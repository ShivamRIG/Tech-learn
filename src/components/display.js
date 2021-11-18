import {React,useState,useEffect} from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import "./displat.css"
import Parallaximg from './parallaximg'
const background="https://images.hdqwalls.com/download/i-love-coding-xl-1920x1080.jpg";
export default function Display() {
    const size = useWindowSize();

    return (
        <>
        <div className="display" id="img">
        <ParallaxProvider >
        <Parallaximg imgsrc={background} height={size.height} width={(size.width)} opacity=".5" ></Parallaximg>
        </ParallaxProvider>
        </div>
        </>
    )
}

//hooks
function useWindowSize() {
    const [windowsize, setWindowsize] = useState({height:undefined,width:undefined});
    useEffect(()=>{
        function handleResize() {
            setWindowsize({height:window.innerHeight,width:window.innerWidth});

        }
        window.addEventListener("resize",handleResize);
        handleResize();
        return()=>window.removeEventListener("resize",handleResize);
    },[]);
    return windowsize;
}
