import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{ Typography} from '@material-ui/core'
import { Grid } from '@material-ui/core';
import Profile  from './profileCard';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {

    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  headingP:{
    textAlign:'center',
    marginTop:'750px', 
    height:"100px",
    background: 'linear-gradient(45deg, #E6DADA 30%, #274046 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#2c3e50',

  },
  heading:{
    textAlign:'center', 
    height:"100px",
    background: 'linear-gradient(45deg, #E6DADA 30%, #274046 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#2c3e50',
    marginBottom:'10px',

  },
  gridContainer:{
    marginTop:'100px',
    paddingLeft:'300px',
    paddingRight:'200px',
    paddingBottom:'20px',
    marginBottom:'100px',
  
  }
});
const python={
  link:"https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/06/Python1.png",
  name:"Pyhton",
  def:"Python is an interpreted high-level general-purpose programming language.It is maintained by Facebook and a community of individual developers and companies.",
};
const js={
  link:"https://miro.medium.com/max/1838/1*6ahbWjp_g9hqhaTDSJOL1Q.png",
  name:"Javascript",
  def:" JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation.",
};
const and={
  link:"https://i.pcmag.com/imagery/lineups/01peUn6ncZ6gL0dEpO6rsW0-1.1569492716.fit_lim.size_768x432.jpg",
  name:"Tech",
  def:"React is a free Mobile app development is the act or process by which a mobile app is developed for mobile devices, enterprise digital assistants or mobile phones."

};

  

export default function Projects() {
  const classes = useStyles();
  let history=useHistory();

   const pyt=()=>{
       
    history.push('/contain')

  }
  const JS=()=>{
    history.push('/contain')
  }
  const And=()=>{
    history.push('/contain')
  }
  return (
  <div>
  <Typography className={classes.headingP} variant="h3"  >
    Get Ready to say Hello World
  </Typography>
  <Grid container spacing={4}   className={classes.gridContainer}>
  <Grid xs={12} md={6} lg={4}  item >
  <Profile link={python.link} name={python.name+" Projects"} def={python.def} fun={pyt}/>
  </Grid>
  <Grid xs={12} md={6} lg={4} item >
  <Profile link={js.link} name={js.name+" Projects"} def={js.def} fun={JS}/>
  </Grid>
  <Grid xs={12} md={6} lg={4} item >
  <Profile link={and.link} name={and.name+" Projects"} def={and.def} fun={And}/>
  </Grid>
  </Grid>
  <Typography className={classes.heading} variant="h3"  >
     Ready to Grab Course 
  </Typography>
  <Grid container spacing-xs-4  className={classes.gridContainer}>
  <Grid  item xs={1} sm={2} md={4} >
  <Profile link={python.link} name={python.name+" Course"} def={python.def} fun={pyt}/>
  </Grid>
  <Grid item xs={1} sm={2} md={4}  >
  <Profile link={js.link} name={js.name+" Course"} def={js.def} fun={JS}/>
  </Grid>
  <Grid item xs={1} sm={2} md={4} >
  <Profile link={and.link} name={and.name+" Course"} def={and.def} fun={And}/>
  </Grid>
  </Grid>
  </div>
  
  )
}
