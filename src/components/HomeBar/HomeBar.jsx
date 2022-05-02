
import React from 'react'
import './HomeBar.css'

import transfer from '../../imgs/transfer.png'
import settings from '../../imgs/settings.png'
import coin from '../../imgs/coin.png'
import transfero from '../../imgs/transfero.png'
import coino from '../../imgs/coino.png'

export const HomeBar = () => {
  return (
     <div id="bat">
         <ul>
           <li><img id="barimg"  src={transfer}  alt="" /></li>
         </ul>
         <ul>
         <a href={"/"}>
           <li><img id="barimg" src={coin}  alt="" /></li></a>

         </ul>
         <ul>
           <li><img id="barimg" src={settings}  alt="" /></li>
         </ul>
     </div>
    
  )
}
