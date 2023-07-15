import React from 'react'

const SelectItem = ({selectOption,time}) => {
 
  return (
    <li onClick={()=>selectOption(time)} className="time-option-item">
        <div className="time-item-content">
    <h3>{time.name}</h3>
    </div>
</li>
  )
}

export default SelectItem