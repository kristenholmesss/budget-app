
import React, { useState, useContext} from 'react';
import './Track.css';
import { GlobalContext } from '../context/GlobalState';



export const Track = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const{ addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        console.log(newTransaction);
    }
  return (
      <div id='boxxing'>
          <div id="headddd">
            <h3>Add New Transaction</h3>
          </div>
          
      <form id="form" onSubmit={onSubmit}>
        <div class="form-control">
          <label for="text">Description</label>
          <input type="text" id="text" value = { text } onChange = {(e) => setText(e.target.value)} placeholder="Description of Transaction" required="true" />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" required="true" id="amount"  step="0.01" value = { amount } onChange = {(e) => setAmount(e.target.value)}  placeholder="$0.00" />
        </div>
        <button class="btn">Add transaction</button>
      </form>

      </div>
    
  )
}
