import React, {useContext} from 'react'
import './SmallComp.css'
import profileimg from '../../imgs/prof.png';
import { GlobalContext } from '../context/GlobalState';

export const SmallComp = () => {

 

  return (
    <a href={"/2"}>
    <div id="smallp">
        <div id="profimgtwo">
            <img src={profileimg}  alt="" />

        </div>
        <div id="namebox"><p>Anna S</p> </div>

     </div>
     </a>
  )
}
