import React,{useEffect,useState} from 'react'
import './SideNotes.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MesNotes from './Note/Note'
export default function Sidenotes() {
// (3)je recupere les informations avec useSelector  de mon state situer dans noteReducer
    const {notes,tags}= useSelector((state)=>  state.NoteReducer);
    
    const [notelist,SetNoteList] = useState(notes)
   
     useEffect(()=>{
      
      
     },[notes])//je surveille la variable 

     const preventForm =(e)=>{
          e.prevenDefault()
     }
   console.log(notelist)
  return (
    <div className='notes-display'>
      <h2>Mes Notes</h2>
      <form onSubmit={preventForm}>
        <input type="text" id="search-notes" placeholder='Recherche' />

      </form>

     <ul className='notes-list'>
        {notelist.map((item)=>
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
