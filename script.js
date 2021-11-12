const debug = document.getElementById("debug")
var myNodelist = document.getElementsByName("container");

function setContent(domId, content) {
  const cont = document.createTextNode(content)
  const spazio = document.createTextNode("  ")
  document.getElementById(domId).appendChild(cont)
  document.getElementById(domId).appendChild(spazio)


}


showSensori()

async function showSensori(){

  const response = await fetch("https://hf3xzw.deta.dev/")
  const data = await response.json()
  console.log(Object.keys(data.sensors[0]))
  


  for(let i = 0; i < 8; i++){
    const sensore = JSONToSensor(data['sensors'][i])
    setContent("sensor-description", sensore.description)
    setContent("sensor-id", sensore.id)
    setContent("sensor-lat", sensore.lat)
    setContent("sensor-lng", sensore.lng)
    setContent("sensor-place", sensore.place)
    setContent("sensor-readonly", sensore.readonly)
    setContent("sensor-statecode", sensore.state_code)
    setContent("sensor-value", sensore.value)
  
  
    
  } 
  
}
