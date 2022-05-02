
import React, { useState, useContext} from 'react';
import './MiniBudg.css';
import plane from '../../imgs/air.png'

export const MiniBudg = () => {

    
  return (
    <a href={"/2"}>
      <div className="spend">
          <div id="content">
              <div id="iconic">
                  <img src={plane}  alt="" />
                  
              </div>
              <div id="gpone">
                      <p id="check">BUDGET</p>
                      <p id="acct">Make a Plan for Your financial Future</p>
              </div>
              
              
             
          </div>



          

      </div>

    </a>
  )
}
