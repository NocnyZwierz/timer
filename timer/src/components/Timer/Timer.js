import Button from '../Button/Button';
import style from './Timer.module.scss';

import React, { useState, useEffect } from "react";

const Timer = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
  
    useEffect(() => {
      if (isRunning) {
        const id = setInterval(() => {
          setTime(prevTime => prevTime + 10);
        }, 10);
        setIntervalId(id);
      }
  
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [isRunning]);
  
    const start = () => {
      if (!isRunning) {
        setIsRunning(true);
      }
    };
  
    const stop = () => {
      if (isRunning) {
        clearInterval(intervalId);
        setIsRunning(false);
      }
    };
  
    const reset = () => {
      clearInterval(intervalId);
      setIsRunning(false);
      setTime(0);
    };
  
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return (
        <div className={style.mainDiv}>
            <h1>Timer</h1>
            <p>
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}.
            {milliseconds.toString().padStart(3, "0")}

            </p>
            <div className={style.buttonDiv}>
                <Button onClick={start}>Start</Button>
                <Button onClick={stop}>Stop</Button>
                <Button onClick={reset}>Reset</Button>
            </div>
        </div>
    );
};

export default Timer;