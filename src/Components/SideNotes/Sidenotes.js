import React, { useEffect, useState } from 'react'
import './SideNotes.css'
import { useSelector } from 'react-redux'
import MesNotes from './Note/Note'
export default function Sidenotes() {
  // (3)je recupere les informations avec useSelector  de mon state situer dans noteReducer
  const { notes } = useSelector((state) => state.NoteReducer);

  const [notelist, SetNoteList] = useState(notes)

  useEffect(() => {
    SetNoteList(notes)


  }, [notes])//je surveille la variable 

  const preventForm = (e) => {
    e.prevenDefault()
  }


  //  barre de recherche (input) 
  const handleFiter = (e) => {
    const stateCopy = [...notes];

    const filter = stateCopy.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))

    SetNoteList(filter)
  }

  return (
    <div className='notes-display'>
      <h2>Mes Notes</h2>
      <form onSubmit={preventForm}>
        <input type="text" id="search-notes"
          placeholder='Recherche'
          onChange={handleFiter}
        />

      </form>

      <ul className='notes-list'>
        {notelist.map((item) =>
          <MesNotes

            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            body={item.body}
          />
        )}
      </ul>
    </div>
  )
}
