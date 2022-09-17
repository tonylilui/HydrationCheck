import React from "react";
import { useState, useEffect } from "react";

/*const startTimer = () => {
  setTimeout(() => {
    alert("Go drink some water");
  }, 3000);
};*/



function Water() {
  
const [seconds, setSeconds] = useState(10);
  useEffect(() =>{
    if(seconds > 0){
      setTimeout(() => setSeconds(seconds - 1), 1000)
    }
    else{
      alert("Go Drink Some Water")
    }
  },[seconds])
  return (
    <div>Water
      <h1>Timer: {Math.floor(seconds / 60)} :: {seconds % 60}</h1>
    </div>
  )
}

export default Water
