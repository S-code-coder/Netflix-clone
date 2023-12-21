import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        });

        return ()=>{
            window.removeEventListener("scroll",()=>{})
        }
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/150px-Netflix_2014_logo.svg.png' alt='Netflix'/>
        <button className="nav_button">Sign In</button>
    </div>
  )
}

export default Nav