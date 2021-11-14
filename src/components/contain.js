import React from 'react'
import { ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from './parallaximg';
import Profile from './profileCard';
import Stack from '@mui/material/Stack';
const pyt='https://images8.alphacoders.com/947/thumb-1920-947346.jpg'
const js="https://wallpaperaccess.com/full/1294303.jpg"
export default function contain() {
    return (
        <>
        <div>
          <ParallaxProvider>
            <Parallaximg imgsrc={pyt} height="290px" opacity=".5" ></Parallaximg>
            <div >
            <Stack direction='row' sx={{pt:2,m:3,ml:15 }} spacing={10}>
            <Profile link={obj.obj} name={obj.name} def={obj.def} fun={obj.odj}/>
            <Profile link={python.obj} name={python.name} def={python.def} fun={python.Pyth}/>
            <Profile link={Projects.obj} name={Projects.name} def={Projects.def} fun={Projects.Proj}/>
            <Profile link={ML.obj} name={ML.name} def={ML.def} fun={ML.ML}/>
            </Stack>
            </div>
            <Parallaximg imgsrc={js} height="300px" opacity=".5" ></Parallaximg>
         </ParallaxProvider> 
        </div>
    </>
    )
}
 const obj={
    obj:"https://analyticsindiamag.com/wp-content/uploads/2020/08/object-detection-illustration.png",
    name:"Object Detection Using Python",
    def:"Image result for object detection python Object Detection is a computer technology related to computer vision, image processing, and deep learning that deals with detecting instances of objects in images and videos. We will do object detection in this article using something known as haar cascades",
    odj:function(){
      window.open("https://www.freecodecamp.org/news/create-computer-vision-apps-in-the-cloud-with-opencv-and-python/",'_blank').focus();
    },
  }
   const python={
    obj:"https://c4.wallpaperflare.com/wallpaper/873/975/781/python-programming-minimalism-grey-technology-hd-wallpaper-preview.jpg",
    name:"Basic Python",
    def:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    Pyth:function(){
      window.open("https://www.youtube.com/watch?v=gfDE2a7MKjA&t=2767s",'_blank').focus();
    },
   }
   const Projects={
    obj:"https://media.geeksforgeeks.org/wp-content/uploads/20201123152927/PythonProjects11.png",
    name:"Python Projects – Beginner to Advanced",
    def:"Python has become one of the most popular languages. So getting only the theoretical knowledge will be of no use unless and until you don’t work on some real-time projects. Working on such projects will test your Python knowledge and you will get some hands-on experience. Moreover, working on such projects will help you improve your knowledge. ",
    Proj:function(){
      window.open("https://realpython.com/tutorials/projects/",'_blank').focus();
    },
   }
   const ML={
     obj:"https://miro.medium.com/max/1400/1*RIrPOCyMFwFC-XULbja3rw.png",
     name:"Machine Learning Python",
     def:"Machine Learning is making the computer learn from studying data and statistics.Machine Learning is a step into the direction of artificial intelligence (AI).Machine Learning is a program that analyses data and learns to predict the outcome.Machine learning is used in internet search engines, email filters to sort out spam, websites to make personalised recommendations, banking software to detect unusual transactions, and lots of apps on our phones such as voice recognition.",
     ML:function(){
      window.open("https://data-flair.training/blogs/machine-learning-project-ideas/",'_blank').focus();
    },
    }

