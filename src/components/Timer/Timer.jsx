import React, {useRef} from 'react'
import { useAppContext } from '../../context/AppContext'
import "./Timer.css"
import {Menu} from ".."
import { secondsToCardinal } from '../../utils/formatTime'
import { calculatePercent } from '../../utils/calculatePercent'

const Timer = () => {
  const {isRunning,handleTimer,time,resetTimers} = useAppContext();







  return (
    <div className="timer-parent-wrapper">
      <Menu/>
    <div className="timer-container">
        <div style={{"--percent":calculatePercent(time.curr,time.total)}} className="timer-clock">
            <div className="timer-overlay-display">
              <h1 className="clock-time">
                <span className="minutes">{secondsToCardinal(time.curr).minutes}</span>
                :
                <span className="seconds">{secondsToCardinal(time.curr).seconds}</span>
              </h1>
              <button onClick={(e)=>handleTimer(e)} className="play-btn transparent-bg">
                {time.curr == 0 ? "Reset" : isRunning ? "Pause" : "Play"}
              </button>
            
              {/* {time.curr != time.total && <button onClick={resetTimers} className="reset-btn">Reset</button>} */}
            </div>
        </div>

    </div>
    {time.curr != time.total && <button onClick={resetTimers} className="reset-btn">Reset</button>}

    </div>
  )
}

export default Timer