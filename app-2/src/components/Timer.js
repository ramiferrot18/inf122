
import "../style/Timer.css";

function Timer(startTimer, stopTimer, resetTimer) {
    return (
        <div className="container">
        <h1>Timer</h1>
        <span>{Math.trunc(Timer / 60)} mins </span>
        <span>{Timer % 60} secs</span>
        <div>
            <button onClick={() => startTimer()}>Start</button>
            <button onClick={() => stopTimer()}>Stop</button>
            <button onClick={() => resetTimer()}>Reset</button>
        </div>
        </div>
    );
}
export default Timer;
