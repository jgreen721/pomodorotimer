import React from 'react'
import { useAppContext } from '../../../context/AppContext'

const ColorItem = ({color,changeItem}) => {
  return (
    <button onClick={()=>changeItem('color',color.name,color.id)} className={`circle-btn bg-${color.name}`}>
      {color.isHighlighted && "$"}
    </button>
  )
}

export default ColorItem