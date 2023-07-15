import { useState } from 'react'
import {Header,Selector,Menu,Timer,Gear} from "./components"
import './App.css'
import { useAppContext } from './context/AppContext'
import Confetti from 'react-confetti'


function App() {
  const {color,font,time} = useAppContext();

  return (
    <div data-font={font} data-color={color} className="app">
      <Header/>
      <Selector/>
      <Timer/>
      {/* <Menu/> */}
      <Gear/>
      {time.curr == 0 && <Confetti width={innerWidth} height={innerHeight}/>}
    </div>
  )
}

export default App
