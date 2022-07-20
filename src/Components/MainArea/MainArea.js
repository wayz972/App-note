import React,{useEffect,useState,useRef} from 'react'
import './MainArea.css'
export default function MainArea() {
  return (
    <div className='container-content'>
   <h2>Votre plume</h2>
   <form >
<label htmlFor="title">le Titre</label>
<input type="text" id="title"  />

<label htmlFor="sous_titre">sous-titre</label>
<input type="sous_titre" id="sous_titre"  />

<label htmlFor="txtbody">Votre Texte</label>
<textarea name="" id="txtbody" placeholder='votre texte...'></textarea>

<button type="submit">Enregistrer</button>
   </form>
    </div>
  )
}
