import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './DisplayNote.css'
export default function DisplayNote() {
  
  // recupere le parametre dans url et jai passer dans app :id sur a route
    const {id}=useParams()


    // je recupere les data dans mon selected reducer passer par dispatch dans notes
  const {notes} = useSelector(state => state.NoteReducer)
  //trouver index du array 
  const indexArr=notes.findIndex(item=>item.title === id)
 
  return (
    <div className='display-txt-zone'>
       <h2 className="title-display">
         votre note:{notes[indexArr] ? `${notes[indexArr].title}`:""}
         <span className="subtitle-display">
         {notes[indexArr] ? `${notes[indexArr].subtitle}`:""}
         </span>
         <p className="txt-display">
         {notes[indexArr] ? `${notes[indexArr].body}`:""}
         </p>
       </h2>
    </div>
  )
}
