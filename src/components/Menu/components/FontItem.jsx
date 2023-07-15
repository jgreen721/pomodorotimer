import React from 'react'

const FontItem = ({font,changeItem}) => {
  return (
    <button onClick={()=>changeItem('font',font.name,font.id)} className={font.isHighlighted ? "circle-btn highlighted-circle" : "circle-btn"}>Aa</button>
  )
}

export default FontItem