import React from 'react'
import './ListNotes.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function ListeNotes() {

  // je recupere les data dans mon selected reducer passer par dispatch dans notes
  const {notes} = useSelector(state => state.NoteReducer)
  return (
    <div className='container-content'>
      <h2>Voici vos Notes</h2>
      <ul className="notes-list-card">
        {notes.map((item) => (
          //je passe dans url le titre
          <Link to={{ pathname: `/displaynote/${item.title}` }}>

            <li>

              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </li>
          </Link>
        ))}
      </ul>

    </div>
  )
}
