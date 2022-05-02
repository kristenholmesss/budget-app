
import React, { useContext }  from 'react'
import './Spending.css'

import pig from '../../imgs/pig.png'
import { GlobalContext } from '../context/GlobalState';

export const Spending = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
  return (
      <div>
          <a href={"/1"}>
            <div className="spending">
                <div id="content">
                    <div id="iconic">
                        <img src={pig}  alt="" />
                        
                    </div>
                    <div id="gpone">
                            <p id="check">CHECKING</p>
                            <p id="acct">acount ending in 9876</p>
                    </div>
                    <div id="dolla">
                        <p id="avmon">${ total }</p>
                        <p id="subtecc">AVAILABLE BALANCE</p>
                    </div>

                </div>



                

            </div>

          </a>
          


      </div>
    
  )
}
