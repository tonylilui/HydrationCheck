import React from "react";
import { useState, useEffect } from "react";

/*const startTimer = () => {
  setTimeout(() => {
    alert("Go drink some water");
  }, 3000);
};*/
function setAlert(){
  alert("Go Drink Some Water 💧💧💧💧💧💧💧")
}
setAlert();
var streak = 0;
var counter = 0;
function Water() {
  
const [seconds, setSeconds] = useState(10);
  useEffect(() =>{
    if(seconds > 0){
      setTimeout(() => setSeconds(seconds - 1), 1000)
    }
    else{
      setAlert();
      counter++;
    }
  },[seconds])
  return (
    <div className='background'>
      Water
      <h1>Timer: {Math.floor(seconds / 60)} : {seconds % 60}</h1>
      <h1 className='watertitle'>
        <br/>
        Water Title
      </h1>
      <p1>
      Streak Number: {streak}  
      </p1>
     

      <p>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          Progress bar
      </p>
      <p>This is another paragraph.</p> 
    </div>
  )
}

export default Water
