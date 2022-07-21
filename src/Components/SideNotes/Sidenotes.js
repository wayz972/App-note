import React,{useEffect,useState} from 'react'
import './SideNotes.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Sidenotes() {

    const {notes}= useSelector(state=>state.NoteReducer)
  
    console.log(notes)
   
  return (
    <div>Sidenotes</div>
  )
}
