import React,{useState} from 'react'
import './body.css'
import {BsArrowLeftCircleFill,  BsArrowRightCircleFill} from "react-icons/bs"

export const SlideShow = ({data}) => {
    const [slide,setSlide] =useState(0);
    return (
        <div className="slide-show">
            <BsArrowLeftCircleFill className="arrow arrow-left"/>
            {data.map((item, idx) => {
            return <img src={item.src} alt={item.alt} key={idx} className={slide=== idx ? "slide" : "slide slide-hidden"}/>
        })}
        <BsArrowRightCircleFill className="arrow arrow-right"/>
        <span className="indicators">
            {data.map((_, idx) => {
                return <button key={idx} onClick={null} className="indicator"></button>
            })}
        </span>
        </div>
    )
}