import {useContext,createContext, useState} from "react"
import { cardinalToSeconds,secondsToCardinal } from "../utils/formatTime";
import { calculatePercent } from '../utils/calculatePercent'


const AppContext = createContext();

export const useAppContext=()=>{
    return useContext(AppContext)
}




export const GlobalProvider = ({children})=>{
        const [pomodoro,setPomodoro] = useState({total:1800,curr:1800})
        const [short,setShort] = useState({total:300,curr:300})
        const [long,setLong] = useState({total:900,curr:900})
        const [showMenu,setShowMenu] = useState(false)
        const [font,setFont] = useState("roboto");
        const [color,setColor] = useState("red");
        const [isRunning,setIsRunning] = useState(false)
        const [time,setTime] = useState({curr:pomodoro.total,total:pomodoro.total});
        const [currCategory,setCurrCategory] = useState('pomodoro');
        const [timerInt,setTimerInt] = useState(null)



        const updateSettings=(newColor,newFont,newTimesObj)=>{
             console.log(newColor,newFont,newTimesObj)
            setColor(newColor)
            setFont(newFont);
             setPomodoro({total:cardinalToSeconds(newTimesObj.pomodoro),curr:cardinalToSeconds(newTimesObj.pomodoro)})
            setShort({total:cardinalToSeconds(newTimesObj['short break']),curr:cardinalToSeconds(newTimesObj['short break'])})
            setLong({total:cardinalToSeconds(newTimesObj['long break']),curr:cardinalToSeconds(newTimesObj['long break'])});
            // console.log("Category: " + currCategory)
            if(currCategory == "pomodoro"){
                setTime({curr:cardinalToSeconds(newTimesObj.pomodoro),total:cardinalToSeconds(newTimesObj.pomodoro)})
            }
            if(currCategory == "short"){
                 setTime({curr:cardinalToSeconds(newTimesObj['short break']),total:cardinalToSeconds(newTimesObj['short break'])})

            }
            if(currCategory == "long"){
                setTime({curr:cardinalToSeconds(newTimesObj['long break']),total:cardinalToSeconds(newTimesObj['long break'])})

            }
            setShowMenu(false)
        }

        const updateSelectedTime=(category)=>{
            console.log("update timer to " + category + " time value.");
            if(category == "pomodoro"){
                setTime({curr:pomodoro.curr,total:pomodoro.total})
                setCurrCategory("pomodoro")
            }
            if(category == "short break"){
                setTime({curr:short.curr,total:short.total})
                setCurrCategory("short")
            }
            if(category == "long break"){
                setTime({curr:long.curr,total:long.total})
                setCurrCategory("long")
            }
        }




const handleTimer=(e)=>{
    if(e.target.textContent == "Reset"){
        resetTimers();
        return;
    }
    if(isRunning){
        setIsRunning(false)
        console.log("clear INT")
        clearTimeout(timerInt);
        setTimerInt(null);

    }
    else{
        setIsRunning(true)
        // setTimerInt(setInterval(()=>runClock(),500));
        // setTime((time)=>({...time,curr:time.curr-1}))
        runClock(time.curr)


}
}


const resetTimers=()=>{
    setIsRunning(false)
    clearTimeout(timerInt)
    if(currCategory == "pomodoro"){
        setTime({curr:pomodoro.total,total:pomodoro.total})
        setPomodoro({curr:pomodoro.total,total:pomodoro.total})
    }
    if(currCategory == "short"){
        setTime({curr:short.total,total:short.total})
        setShort({curr:short.total,total:short.total})
    }
    if(currCategory == "long"){
        setTime({curr:long.total,total:long.total})
        setLong({curr:long.total,total:long.total})
    }
}



const runClock=(fxTime)=>{
  console.log("RUNNING CLOCK",fxTime)

 
  setTime((time)=>({...time,curr:time.curr-1}))

  if(currCategory == "pomodoro"){
    setPomodoro((pomodoro)=>({...pomodoro,curr:pomodoro.curr-1}))
}
   if (currCategory == "short"){
    setShort((short)=>({...short,curr:short.curr-1}))


}
if(currCategory == "long"){
    setLong((long)=>({...long,curr:long.curr-1}))
    // setPercent(calculatePercent(newCurr,long.total))
}
if(fxTime > 1){
setTimerInt(setTimeout(()=>runClock(fxTime-1),100))
}
else{
    // resetTimers()
    console.log("timer is done")
}

}


        const values={
            color,
            font,
            setColor,
            setFont,
            pomodoro,
            short,
            long,
            time,
            showMenu,
            setShowMenu,
            isRunning,
            handleTimer,
            updateSettings,
            updateSelectedTime,
            resetTimers
        }

    return ( 
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}