import React from 'react';
import './Plan.css';

export const Plan = ({ salary }) => {
  return (
      
    <div>
        <div id="profll"> 
        <div id="headdding">
            <p>Your Financial Plan:</p>
        </div>
        <ul id='finpln'>
            <li><div id="needs"><h4>NEEDS: </h4> <p>$0</p></div></li>
            <li><div id="needs"><h4>WANTS: </h4> <p>$0</p></div></li>
            <li><div id="needs"><h4>SAVINGS: </h4> <p>$0</p></div></li>
            
        </ul>

        </div>
      
    </div>
      
  
    
  )
}
