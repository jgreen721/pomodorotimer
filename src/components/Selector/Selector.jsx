import React, {useRef} from 'react'
import SelectItem from './components/SelectItem'
import { useAppContext } from '../../context/AppContext'
import "./Selector.css"

const Selector = () => {
    const timeOptions = [
        {id:1,name:"pomodoro",type:"pomodoro",isSelected:false},
        {id:2,name:"short break",type:"short",isSelected:false},
        {id:3,name:"long break",type:"long",isSelected:false},
    ]
    const highlightRef = useRef();
    const {updateSelectedTime} = useAppContext()


    const selectOption=(timeObj)=>{
        let id = timeObj.id - 1;
        let percentMove = Math.floor(id * 33)
             console.log('PercentMove: ' + percentMove + "%") 
             highlightRef.current.style.left = `${percentMove}%`
        updateSelectedTime(timeObj.name);
    }
  return (
    <section className="selector-container">

        <ul className="timer-options">
                                <div ref={highlightRef} className="highlight"></div>

            {timeOptions.map(time=>(
           <SelectItem key={time.id} time={time} selectOption={selectOption}/>
            ))}
        </ul>
    </section>
  )
}

export default Selector