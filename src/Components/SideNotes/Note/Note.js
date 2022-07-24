import React from 'react'
import './Note.css'
import remove from './remove.svg'
import edit from './edit.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux' //permet de transiter les data vers notReducer

export default function Note(props) {
  //  (4) je passe UseDispatch
  const dispatch = useDispatch()



  const deleteNote = () => {
    // je passe  props.id dans  dispatch
    dispatch({
      type: "DELETENOTE",
      payload: props.id

    })

  }
  
// envoie mes data props vers mon selected reducer initialiser vide 
  const modifynote=()=>{
    
    dispatch({
      type:'VISUALISERNOTE',
      payload:props
    })

  }
  return (
    <li className='txt-note-prev'>
        <Link to={{ pathname:`/displaynote/${props.title}`}} >
      <div className="bloc-note-left">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>
        </Link>
      <div className="bloc-note-right">
        <button
          onClick={deleteNote}
        >
          <img src={remove} alt="delete" />
        </button>
        
        <Link to="/edit">
        <button
       onClick={modifynote}>
          <img src={edit} alt="" />
        </button>
         </Link>
      </div>

    </li>
  )
}
