import React, { useContext} from 'react';
import './Profile.css';

import profileimg from '../../imgs/prof.png';
import card from '../../imgs/card.png';
import money from '../../imgs/money.png';

import { GlobalContext } from '../context/GlobalState';




   

export const Profile = () => {

    const { transactions } = useContext(GlobalContext); 
    const amounts = transactions.map(transaction => transaction.amount);


    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);



  return (
    <a href={"/2"}>
    <div className="prof">
        <div id="profimg">
            <img src={profileimg}  alt="" />

        </div>
        <p id="welcome">Welcome Back, <b>Anna S</b></p>
        <div id="duo">
            <div className="boxes">
                <div id="smallimg">
                    <img src={card}  alt="" />
                </div>
                <div id="words">
                    
                <div className="bigtext" id= "green">
                        <p>+$ {income} </p>
                    </div>
                    <div id="smalltexts">
                        <p>Montly Income</p>
                    </div>

                </div>

            </div>
            <div className="boxes">
                <div id="smallimg">
                    <img src={money}  alt="" />
                </div>
                <div id="words">
                    
                    <div className="bigtext" id= "red">
                        <p>-${expense} </p>
                    </div>
                    <div id="smalltexts">
                        <p>Montly Expenses</p>
                    </div>

                </div>

            </div>
           
            
        </div>

    </div>
    </a>
    
  )
}
