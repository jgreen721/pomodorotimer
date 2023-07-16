import React from 'react'
import Confetti from 'react-confetti'
import { useAppContext } from '../../context/AppContext'
import "./Congrats.css"


const Congrats = () => {
  const {time,color} = useAppContext();
  return (
      <div className="congrats-parent">
      <h1 className={`h1-congrats ${color}-text`}>STRONG</h1>
      <h1 className={`h1-congrats ${color}-text`}>WORK</h1>
      <h1 className={`h1-congrats ${color}-text`}>💪</h1>
    {time.curr == 0 && <Confetti width={innerWidth} height={innerHeight}/>}
    </div>
    )
}

export default Congrats