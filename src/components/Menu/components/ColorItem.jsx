import React from 'react'
import { useAppContext } from '../../../context/AppContext'

const ColorItem = ({color,changeItem}) => {
  return (
    <button style={{'--circle-color':color.name}} onClick={()=>changeItem('color',color.name,color.id)} className={`circle-btn bg-${color.name}`}>
      {color.isHighlighted && <div className="check"></div>}
    </button>
  )
}

export default ColorItem