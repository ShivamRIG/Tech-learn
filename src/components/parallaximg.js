import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
function parallaximg(props) {
    return (
        <div>
           <ParallaxBanner
              layers={[{image:props.imgsrc,amount:0.6}]}
              style={{height:props.height}}>
                <div>
                    {props.children}
                </div>
              </ParallaxBanner> 
        </div>
    )
}

export default parallaximg
