import React, { useEffect, useState, useRef } from 'react'
import './MainArea.css'
import { useDispatch, useSelector, UseSelector } from 'react-redux'
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

  const [validation, SetValidation] = useState(true)//afficher un message error



  // je transmet mets information vers notereducer grace a dispatch
  const dispatch = useDispatch()

  const handleForm = (e) => {
    e.preventDefault()
    
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


  const recupInput = useRef([])

  const addInput = (value) => {
  
    if (value && recupInput.current.includes(value)) {
      recupInput.current.push(value)
      
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

      const newobState = {...InputInfo,[actualInp]: e.target.value} 
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
          ref={addInput} />

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
          ref={addInput} />






        <label htmlFor="txtbody">Votre Texte</label>
        <textarea id="body"
          placeholder='votre texte...'
          onChange={updateInput}
          value={update.toggle ? update.body : InputInfo.body}
          ref={addInput}></textarea>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  )
}
