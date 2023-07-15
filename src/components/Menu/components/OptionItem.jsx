import React, {useState} from 'react'
import { arrowUp,arrowDown } from '../../../const'

const OptionItem = ({time}) => {
  const [value,setValue] = useState(time.value)

  const changeTime=(direction)=>{
    if(direction == "up"){
     
      if(value + time.increment <= time.max)  setValue((value)=>value+time.increment);
    }
    else{
      if(value - time.increment > 0)  setValue((value)=>value-time.increment);
    }
  }
  return (
    <div data-category={time.name} data-value={value} className="time-option-select-div">
      <h5 className="time-label">{time.name}</h5>
<div className="time-option-select">
        <h3 className="time-value">{value}</h3>
        <div className="arrows-div">
            <button onClick={()=>changeTime("up")} className="arrow-btn transparent-bg">
                <img className="arrow-icon" src={arrowUp} alt="arrow"/>
            </button>
            <button onClick={()=>changeTime("down")} className="arrow-btn transparent-bg">
                <img className="arrow-icon" src={arrowDown} alt="arrow"/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default OptionItem