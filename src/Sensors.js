import React,{useEffect, useState} from "react";
import style from "./sensor-module.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





const Sensors = ({description,id,lat,lng,place,readonly,state_code,value} ) => {
  
  
  

 async function changeState() {

  return fetch(`https://hf3xzw.deta.dev/${id}/toggle`, {
      method: 'PUT',
  }).then(response => console.log(response))
}


   const Stringvalue = value.toString();




  return(
    
     <div className={style.sensor}>
       <button onClick={changeState}> hey</button>
      <button> map</button>
        <p>{description}</p>
        <p>{id}</p>
        <p>{lat}</p>
        <p>{lng}</p>
        <p>{place}</p>
        <p>{readonly}</p>
        <p>{state_code}</p>
        <p>{Stringvalue}</p>
      
        

    </div>
  )
}

  
  export default Sensors;
