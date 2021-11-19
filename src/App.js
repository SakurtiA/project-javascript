import React, {useEffect, useState } from "react";
import Sensors from "./Sensors";
import "./App.css"
import Chart from "./components/chart";



function App(){


  const [sensors, setSensors] = useState([]);


  useEffect(() => {
    
    showSensori();
    

 },[]);


  async function showSensori(){

    const response = await fetch("https://hf3xzw.deta.dev/")
    const data = await response.json()
    setSensors(data.sensors);

  }
  
  function update(){

    setInterval(showSensori())

  }
  
  return(

  
  <div className="App">
  <h1 className="title">List of sensors : {Object.keys(sensors).length}</h1>
    <button className="button4" onClick={update} >update</button>
  

    <div className="Sensor">
      
    
    {sensors.map(sensore => (
      
      < Sensors
       key = {sensore.id}
       description={sensore.description}
       id={sensore.id}
       lat={sensore.lat}
       lng={sensore.lng} 
       place={sensore.place} 
       readonly={sensore.readonly} 
       state_code={sensore.state_code} 
       value={sensore.value}
       sensore = {sensors}
       state = {setSensors}
       refresh = {showSensori}
       />
    ))}
    </div>
    

  </div>
  

  );
  

}

export default App;