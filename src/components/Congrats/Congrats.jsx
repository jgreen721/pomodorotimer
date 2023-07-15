import React from 'react'
import Confetti from 'react-confetti'
import { useAppContext } from '../../context/AppContext'


const Congrats = () => {
  const {time} = useAppContext();
  return (
      <>
    {time.curr == 0 && <Confetti width={innerWidth} height={innerHeight}/>}
    </>
    )
}

export default Congrats