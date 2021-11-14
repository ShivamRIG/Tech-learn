import React from 'react'
import "./displat.css"
import pexels from "./back.mp4";
export default function Display() {
    return (
        <>
        <div className="display">
        <video autoplay="autoplay" muted loop id="myVideo">
        <source src={pexels} type="video/mp4"/>
        </video>
        </div>
        </>
    )
}
