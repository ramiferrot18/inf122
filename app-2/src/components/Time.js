import React, { useState } from 'react';
import Timer from './Timer';

function Time() {
    const [timer, setTimer] = useState(0);
    const startTimer = () => {
        window.myTimer = setInterval(() => {
        setTimer((timer) => timer + 1);
        }, 1000);
    };
    const stopTimer = () => {
        clearInterval(window.myTimer);
    };
    const resetTimer = () => {
        clearInterval(window.myTimer);
        setTimer(0);
    };
}
export default Time;