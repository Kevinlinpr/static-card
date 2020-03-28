import React, { useState } from 'react'
import './style.css'

export default function StaticCard(props){
    let [backgroundscale,setBackgroundScale] = useState(1);
    return (
        <div id="CardWrapper" className="CardWrapper"
            onMouseEnter={()=>{setBackgroundScale(5)}}
            onMouseLeave={()=>{setBackgroundScale(1)}}
            onClick={()=>{
                if(props.onClick) props.onClick();
            }}
            >
            <img id="CardImg" src={props.img}/>
        <h5 id="CardCategory" className="CardCategory">{props.category}</h5>
        <h4 id="CardSummary" className="CardSummary">{props.summary}</h4>
            <div id="CardDateAndAuthor" className="CardDateAndAuthor">
                {props.dateAndAuthor}
            </div>
            <div id="CardActiveBackground" className="CardActiveBackground"
                style={{transform: 'scale('+backgroundscale+')',backgroundColor:props.activeBackgroundColor}}
            ></div>
        </div>
    )
}