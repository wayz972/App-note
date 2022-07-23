import React, { useEffect, useState} from 'react'
import './MainArea.css'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid";
export default function MainArea() {
  // je crée un objet et j'ajoute des valeurs
  const [InputInfo, SetInput] = useState({
    title: "",
    subtitle: "",
    body: "",

  });

  //je crée un objet qui va me permetre de mettre a jour les data
  const [update, Setupdate] = useState({
    title: "",
    subtitle: "",
    body: "",

  });
  // je recupere les data dans mon selected reducer passer par dispatch dans notes
  const selected = useSelector(state => state.Selectereducer.selectednote)


  // j'ajoute les valeurs dans mon objet crée vide 
  useEffect(() => {
    Setupdate(selected)

  }, [selected])// je surveille la variable

  const [validation, SetValidation] = useState(true)//afficher un message error dans un span

  console.log(selected.title)
  const dispatch = useDispatch()

  const handleForm = (e) => {
    e.preventDefault()

    if (selected.toggle) {

      if (update.title.length < 1) {
        return SetValidation(false)

      }
      //sinon jappel dispatch j'envoie les info vers noteRducer
      SetValidation(true)
      dispatch({
        type: "UPDATENOTE",
        payload: update
      })
      dispatch({
        type: "RESETNOTE",

      })
      Setupdate({
        title: "",
        subtitle: "",
        body: "",
      })
    } else if (!selected.toggle) {
      if (InputInfo.title.length < 1) {

        return SetValidation(false)

      }
      //sinon jappel dispatch j'envoie les info vers noteRducer
      SetValidation(true)
      dispatch({
        type: "ADDNOTE",
        payload: { ...InputInfo, id: uuidv4() }
      })
      SetInput({
        title: "",
        subtitle: "",
        body: "",
      })

    }



  }


  //je relie mes input a mon state databinding
  const updateInput = (e) => {
    //je lui passe la valeur des id
    const actualInp = e.target.getAttribute("id")//je recupere la valeur des id

    if (selected.toggle) {

      const newobState = { ...update, [actualInp]: e.target.value }

      Setupdate(newobState)

    } else if (selected.toggle == false) {
  console.log("qq",selected.toggle)
      const newobState = { ...InputInfo, [actualInp]: e.target.value }
      console.log(newobState)
      console.log(InputInfo)
      SetInput(newobState)

    }


  }


  return (
    <div className='container-content'>
      <h2>Votre plume</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="title">le Titre</label>
        <input type="text"
          id="title"
          onChange={updateInput}
          value={update.toggle ? update.title : InputInfo.title}
           />

        {!validation && (

          <span className="info-validation">
            veuillez renseigner un titre
          </span>
        )}

        <label htmlFor="subtitle">sous-titre</label>
        <input type="text"
          id="subtitle"
          onChange={updateInput}
          value={update.toggle ? update.subtitle : InputInfo.subtitle}
          />






        <label htmlFor="txtbody">Votre Texte</label>
        <textarea id="body"
          placeholder='votre texte...'
          onChange={updateInput}
          value={update.toggle ? update.body : InputInfo.body}
          ></textarea>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  )
}
