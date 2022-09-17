import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
/*const startTimer = () => {
  setTimeout(() => {
    alert("Go drink some water");
  }, 3000);
};*/
function setAlert() {
  alert("Go Drink Some Water 💧💧💧💧💧💧💧");
}
function Water() {
  const [counter, setCounter] = useState(0); //Set counter here
  const [seconds, setSeconds] = useState(10);
  const [waterStreak, setWaterStreak] = useState("");
  const [filled, setFilled] = useState(0);
  useEffect(
    () => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setAlert();
        setWaterStreak(waterStreak + "💧");
        setCounter(counter + 1);
        setSeconds(10);
      }
    },
    [seconds],
    [waterStreak],
    [counter]
  );
  return (
    <div className="background">
      Water
      <h1>
        Timer: {Math.floor(seconds / 60)} : {seconds % 60}
      </h1>
      <h1 className="watertitle">
        <br />
        Water Title
      </h1>
      <p1>Streak Number: {counter}</p1>
      <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

       <h2>Progress: <ProgressBar value = {counter} max = {10}/></h2>
      </p>
      <br />
      <p>This is another paragraph. {waterStreak}</p>
    </div>
  );
}

export default Water;
