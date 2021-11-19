import React,{useEffect, useState} from "react";
import style from "./sensor-module.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Chart } from "chart.js";





const Sensors = ({description,id,lat,lng,place,readonly,state_code,value} ) => {
  
  
  

   const Stringvalue = value.toString();




  return(
    
     <div className={style.sensor}>
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
