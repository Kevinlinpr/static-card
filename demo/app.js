import React from 'react'
import ReactDOM from 'react-dom'
import StaticCard from '../src/index'
import Img from './test.jpg';
const root = document.createElement('div');
window.document.body.appendChild(root);
ReactDOM.render(
    <StaticCard
        img={Img}
        category={"ANDROID"}
        summary={"Bringing more people online and introducing Camera Go"}
        dateAndAuthor={"By Arpit Midha & Joris van Mens - Mar 19,2020"}
        onClick={()=>{console.log("Click")}}
        activeBackgroundColor={"#00e5ff"}
    />,
    root
)