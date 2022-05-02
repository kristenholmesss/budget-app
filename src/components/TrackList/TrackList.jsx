import React,{ useContext} from 'react'
import './TrackList.css'
import profileimg from '../../imgs/prof.png';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../Transaction';



export const TrackList = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);

    

  return (
    <div id="boop">
        <div id="wap">
        <div id="beep">
            <h3 id='ktext'>Checking Account</h3>
            <p>Account ending in 9876</p>

        </div>
        <div id="availing">
         <h3 id='ktext'>${total}</h3>
            <p>avaiable balance</p>
        </div>

        </div>
       
        
        
        <br></br>
        <ul id="list" className="list">
            {transactions.map(transaction => (<Transaction key= {transaction.id} transaction = {transaction} />))}
         
      </ul>
    </div>
  )
}
