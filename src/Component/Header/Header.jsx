import React from "react"
import './Header.css'
import profile_img from '../../assets/unnamed.jpg'


const Header = () => {
  return (
    <div id="home" className="header">
     <img src={profile_img} />
     <h1><span>I'm Kiana Ramzanzadeh,</span> Frontend developer based in Turkiye</h1>
     <p>I am an Iranian frontend developer from Turkiye, trying to start my career in Front-End developer field</p>
     <div className="header-action">
        <div className="header-cv"><a href="https://kianaramzanzadehportfolio.vercel.app/assets/CV.pdf" download="KianaRamzanzadeh_CV.pdf">  &#10515; My resume</a></div>
     </div>
    </div>
    
  )
} 

export default Header
