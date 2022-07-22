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
  return (
    <li className='txt-note-prev'>
      <div className="bloc-note-left">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>
      <div className="bloc-note-right">
        <button
          onClick={deleteNote}
        >
          <img src={remove} alt="delete" />
        </button>
        <button>
          <img src={edit} alt="" />
        </button>
      </div>

    </li>
  )
}
