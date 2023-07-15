import React, {useState, useRef} from 'react'
import "./Menu.css"
import { closeIcon } from '../../const'
import {OptionItem,FontItem,ColorItem} from "./components"
import { useAppContext } from '../../context/AppContext'

const Menu = () => {
    const timeOptionsRef = useRef();
    const {showMenu,setShowMenu,color,font,updateSettings} = useAppContext()

    const [selectedColor,setSelectedColor] = useState(color);
    const [selectedFont,setSelectedFont] = useState(font);
    // const [localPomodoro,setLocalPomodoro] = useState(pomodoro)
    // const [localShort,setLocalShort] = useState(short)
    // const [localLong,setLocalLong] = useState(long)
    const times=[
        {id:1,name:"pomodoro",min:5,max:60,value:30,increment:5},
        {id:2,name:"short break",min:1,max:10,value:5,increment:1},
        {id:3,name:"long break",min:5,max:30,value:15,increment:5},
    ]
    const [fonts,setFonts]=useState([
        {id:1,name:"roboto",isHighlighted:false},
        {id:2,name:"kumbhsans",isHighlighted:true},
        {id:3,name:"spacemono",isHighlighted:false},
    ])
    const [colors,setColors]=useState([
        {id:1,name:"red",isHighlighted:true},
        {id:2,name:"blue",isHighlighted:false},
        {id:3,name:"violet",isHighlighted:false},
    ])

    const handleChangeItem=(item,value,id)=>{
        if(item == 'color'){
            setColors((colors)=>colors.map(c=>c.id == id ? {...c,isHighlighted:true} : {...c,isHighlighted:false}))
            setSelectedColor(value)
        }
        if(item == "font"){
            setSelectedFont(value)
            setFonts((fonts)=>fonts.map(f=>f.id == id ? {...f,isHighlighted:true} : {...f,isHighlighted:false}))
        }
        console.log("COLOR",value)
    }

    const applyChanges=()=>{
        console.log(timeOptionsRef.current.children);
        let updatedTimes={}
        Array.from(timeOptionsRef.current.children).forEach(child=>{
            updatedTimes[child.getAttribute('data-category')] = child.getAttribute('data-value')
        })
        console.log(updatedTimes)

           updateSettings(selectedColor,selectedFont,updatedTimes)
    }

  return (
      <div className={showMenu ? "menu-card-parent" : "menu-card-parent hide-menu"}>
    <div className="menu-card">
        <div className="menu-row top-menu-row">
            <h2>Settings</h2>
            <button onClick={()=>setShowMenu(!showMenu)} className="close-btn transparent-bg">
                <img src={closeIcon} alt="" />
            </button>
        </div>
        <div className="menu-options-content">
        <div className="menu-options-row">
            <h4 className="time-header-h4 uppercase">
                Time (Minutes)
            </h4>
         
            <ul ref={timeOptionsRef} className="options-list b-bottom">
                {times.map(time=>(
               <OptionItem key={time.id} time={time} changeItem={handleChangeItem}/>
               ))}
            </ul>
     
        </div>
        <div className="b-bottom menu-row menu-options-row">
            <h3 className="menu-header-h3 uppercase">
                 Font
            </h3>
            <ul className="options-list">
                {fonts.map(font=>(
               <FontItem key={font.id} font={font} changeItem={handleChangeItem}/>
               ))}
            </ul>
        </div>
        <div className="menu-row menu-options-row">
            <h3 className="menu-header-h3 uppercase">
                Color
            </h3>
            <ul className="options-list">
                {colors.map(color=>(
               <ColorItem key={color.id} color={color} changeItem={handleChangeItem}/>
               ))}
            </ul>
        </div>
        </div>
        <button onClick={applyChanges} className="apply-btn btn bg-red">Apply</button>
    </div>
    </div>
  )
}

export default Menu