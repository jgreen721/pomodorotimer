import React from 'react'
import Confetti from 'react-confetti'
import { useAppContext } from '../../context/AppContext'


const Congrats = () => {
  const {time} = useAppContext();
  return (
      <>
      <h1>STRONG</h1>
      <h1>WORK</h1>
      <h1>💪</h1>
    {time.curr == 0 && <Confetti width={innerWidth} height={innerHeight}/>}
    </>
    )
}

export default Congrats