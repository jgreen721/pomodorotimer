import { useState } from 'react'
import {Header,Selector,Timer,Gear,Congrats} from "./components"
import './App.css'
import { useAppContext } from './context/AppContext'


function App() {
  const {color,font,time} = useAppContext();

  return (
    <div data-font={font} data-color={color} className="app">
      <Header/>
      <Selector/>
      <Timer/>
      {/* <Menu/> */}
      <Gear/>
      {time.curr == 0 && <Congrats width={innerWidth} height={innerHeight}/>}
    </div>
  )
}

export default App
