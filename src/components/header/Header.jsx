import React, { useEffect, useState } from 'react'
import {Link ,NavLink,useLocation} from 'react-router-dom'
import './Header.css';





export const Logo =(
  <div className='logo'>
    <Link to="/mercury" >
     <h2>The Planets</h2>
    </Link>
  </div>
)








const Header = () => {


  
  

  return (
    <header>
      <div className='header'>
      {Logo}
      
      <nav>
        <div className='header-right'>
        <span>
        <NavLink  to={"Mercury"}   > Mercury </NavLink>
          <NavLink to={"Venus"} > Venus </NavLink>
          <NavLink to={"Earth"} > Earth </NavLink>
          <NavLink to={"Mars"} > Mars </NavLink>
          <NavLink to={"Jupiter"} > Jupiter </NavLink>
          <NavLink to={"Saturn"} > Saturn </NavLink>
          <NavLink to={"Uranus"} > Uranus </NavLink>
          <NavLink to={"Neptune"} > Neptune </NavLink>
        </span>
       

          



        </div>
      
      </nav>


    </div>
    </header>


  )
}

export default Header