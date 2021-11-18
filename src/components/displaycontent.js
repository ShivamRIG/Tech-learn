import React from 'react';
import {Typography,Container,Button,Grid} from '@material-ui/core/'

import { makeStyles } from '@material-ui/core/styles';


const userstyles=makeStyles((theme)=>({
    container:{
        
        padding:theme.spacing(8,0,6),
        marginTop:200,

    },
   
}))

export default function Displaycontent(){
    const classes= userstyles();
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
    return(
        <>
        <div className="squr">
        <div className={classes.container}>
        <Container maxWidth="lg">
        <Typography justifyContent="center" variant="h3" style={{marginTop:"20px",color:'white'}} zindex="tooltip" align="center" textcolor="white"  gutterBottom marg>Ready to grab some projects</Typography>
        <Grid container spacing={2} justifyContent="center" >
        <Grid item>
        <Button style={{ color: 'white'}}size='large' variant='outlined' align="center" onClick={()=>{scroll.scrollTo(1200,"TGT")}} >Get start</Button>
        </Grid>
        <Grid item>
        <Button color="#b3b3ff"  variant="contained" size="large" align="center">Learn more</Button>
        </Grid>
        </Grid>
        </Container>
        </div>
        </div>
        </>
    )
}
