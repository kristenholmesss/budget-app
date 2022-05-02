
import React, { useState, useContext} from 'react';
import './Budget.css';
import profileimg from '../../imgs/prof.png';
import { PieChart } from 'react-minimal-pie-chart';
import { Pie } from './Pie';

export const Budget = () => {

    const [sal, setSal] = useState('');
    const [needs, setNeed] = useState(0);
    const [want, setWant] = useState(0);
    const [save, setSave] = useState(0);
    
    const [d, setD] = useState();
    const [budgets, setBudgets] = useState("test");
    
  

    const onSub = e => {
        e.preventDefault();
        setNeed((sal * .5)/12);
        setWant((sal * .3)/12);
        setSave((sal * .3)/12);
   

        setD( [
            { title: 'Housing', value: ((sal * .35)/12), color: 'rgb(255, 182, 79)', descrip: "your housing costs such as rent, morgage payments, or maitenance"},
            { title: 'Debt', value: ((sal * .15)/12), color: '#ff7327', descrip: "your debt payments for things such as student loans, ect"},
            { title: 'Transportation', value: ((sal * .15)/12), color: 'rgb(255, 165, 39)', descrip:"your transportation needs such as car payments, insurance, gas, ect." },
            { title: 'Savings', value: ((sal * .1)/12), color: 'rgb(251, 227, 158)', descrip: 'your savings'},
            
            
            { title: 'Other', value: ((sal * .25)/12), color: 'rgb(245, 255, 110)', descrip: 'your other costs such as hobbies, shopping, ect' },
          ]);
        
        
       
    }

    const clickedPie = e =>{
        e.preventDefault();

    }


  return (
    <div>

        <div className="profl">
            <div id="profimg">
                <img src={profileimg}  alt="" />

            </div>
          
            <p id="welcome"><b>Anna S</b>, Create your budget to help you plan for your finanical future</p>

            <form action="" id="budget" onSubmit={onSub}>
              <div class="form-control">
                <label for="text">Salary:</label>
                <input type="text" id="text" value = { sal } onChange = {(e) => setSal(e.target.value)} placeholder="Annual Salary " required={true} />
                </div>
                <button class="btn">Create Budget</button>
              </form>

              <h3>Your Montly Budget</h3>
              <ul id='finpln'>
                    <li><div id="needs"><h4>NEEDS: </h4> <p>${ needs }</p></div></li>
                    <li><div id="needs"><h4>WANTS: </h4> <p>${ want }</p></div></li>
                    <li><div id="needs"><h4>SAVINGS: </h4> <p>${ save }</p></div></li>
            
        </ul>

        </div>
        <div className="proflss">
            
            <p id="welcome">Spending Breakdown</p>
            <div id="applepie">
                <Pie data = { d } ></Pie>
            
            </div>
            


       
        </div>
            
        
        
    </div>

   
  )
}
