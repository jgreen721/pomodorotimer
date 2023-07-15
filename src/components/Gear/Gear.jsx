import React from 'react'
import "./Gear.css"
import { iconSettings } from '../../const'
import {Menu} from ".."
import { useAppContext } from '../../context/AppContext'


const Gear = () => {
  const {setShowMenu} = useAppContext()

  return (
    <div className="settings-row">
      {/* <div className="settings-content"> */}
      {/* <Menu/> */}
      <button onClick={()=>setShowMenu(true)} className="settings-btn">
      <img data-tooltip="Change options" className="settings-icon" src={iconSettings} alt="" />
      </button>
      {/* </div> */}
    </div>
  )
}

export default Gear