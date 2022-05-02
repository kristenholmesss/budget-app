import React from 'react'
import './Header.css'

import Bankicon from '../../imgs/bank-1.png'

export const Header = () => {
  return (
    <a href={"/"}>
       <div id="head">
      <div id="icon">
      <img src={Bankicon}  alt="" />
      </div>
      <div id="headtext">
        <p>OBDURANT <b>BUDGETING</b></p>
      </div>
    </div>

    </a>
   
    
  )
}
