import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoEdit from "./ImgsSidebar/edit.svg"
import FolderIcon from "./ImgsSidebar/folder.svg"
import Tools from "./ImgsSidebar/settings.svg"
import Menu from "./ImgsSidebar/menu.svg"
import './Sidebar.css'
export default function Sidebar() {

  // i create usestate for size window 
  const [checkWidth, setChekWidth] = useState(window.innerWidth);

  // function which update chekwidth
  const checkWidthFunc = () => {
    console.log("resize", window.innerWidth)
    setChekWidth(window.innerWidth)
   
  };

  // hook
  // allows use addvenlistener with the method 'resize'
  useEffect(() => {
    window.addEventListener('resize', checkWidthFunc);
    //always  remove addvevenlistener
    return () => {
      window.removeEventListener("resize", checkWidthFunc)
    }

  }, []);


  const [toggleNav,setTogleNav]=useState(false)
  const toggleNavbar=()=>{
    setTogleNav(!toggleNav)
    console.log(toggleNav)
  }

  return (
    <>
      {
        checkWidth < 900 && (
          <button
          onClick={toggleNavbar}
           className="toggle-nav-btn">
            <img src={Menu} alt="logo menu" />
          </button>

        )
      }

      <nav className={
        toggleNav? "container-sidebar visible-nav":"container-sidebar"
      }>
        <div className="sidebar">

          <div className="three-dots"
          >
            <div className="dot-nav d-red"></div>
            <div className="dot-nav d-yellow"></div>
            <div className="dot-nav d-green"></div>

          </div>
          <ul>
             <Link to="/"> 
            <li>
              <img src={FolderIcon} alt="logo folder" />
            </li>
             </Link> 
             <Link to="edit"> 
            <li>
              <img src={LogoEdit} alt="logo edit" />
            </li>
             </Link>
             <Link to="/"> 
            <li>
              <img src={Tools} alt="logo tools" />
            </li>
             </Link> 

          </ul>
        </div>
      </nav>



    </>
  )
}
