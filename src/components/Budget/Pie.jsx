import React, { useState, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './Budget.css';



export const Pie = ({ data }) => {
  const shiftSize = 7;
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [hoveredTitle, setHoveredTitle] = useState({ title: 'Savings', value: ((10 * .1)/12), color: 'rgb(66, 155, 66)', descrip:"null" });
  const [buddy, setBuddy] = useState("");


  const onTap = ( index ) => {
    console.log("hello: " + index);
    const d = data.map((entry, i) => {
      if (index === i) {
        setHoveredTitle(entry);
        setBuddy("Based upon your annual salary, every month you should budget $" + Math.round(entry.value) + " towards " + entry.descrip);
        
        return {
          ...entry,
          color: 'grey',
        };
      }
      return entry;
    });

    const h = ({ hoveredTitle });
    console.log("hello0" + h);

    
    

  }

  
  

  

 


  

  

  
  return (
    <div>
      <PieChart
      data={data}
      radius={PieChart.defaultProps.radius - 6}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      onClick={(event, index) => {

        console.log('CLICK', { event, index });
        setSelected(index === selected ? undefined : index);
        onTap(index);
        
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
        
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}

      label={({ dataEntry }) =>  dataEntry.title}
      labelStyle={{
        fontSize: '4px',
        fontFamily: "Montserrat",
        fill: '#222',
      }}
      lineWidth={65} 
      paddingAngle={5}
      labelPosition={75}
                
      />;
      

      <div id="buddy">
        { buddy }
      
     
      
        

        
      
        
      </div>

      
    </div>
    

    
  )
}
