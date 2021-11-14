import {React} from 'react'
import { Typography,Grid, makeStyles } from '@material-ui/core'
import Profile from './profileCard'

const useStyles = makeStyles({
    gridContainer:{
        marginTop:'100px',
        paddingLeft:'300px',
        paddingRight:'200px',
        paddingBottom:'20px',
        marginBottom:'100px',
      
      }
});
const data={
    github:{
        Glink:"https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png",
        Ilink:"https://img.flaticon.com/icons/png/512/1384/1384031.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
        Gmlink:"https://thumbs.dreamstime.com/b/mail-175540258.jpg",
    },
    info:{
        git:'Git-HUB',
        instagram:'Instagram',
        Mail:'MAIL',
    },
     Git:function () {
      window.open("https://github.com/ShivamRIG", '_blank').focus();
        
      },
      Insta:function () {
        window.location.replace('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiT-5C4m4jzAhVUqksFHYcNANoQFnoECAIQAQ&url=https%3A%2F%2Fwww.instagram.com%2F_dex_rig_%2F&usg=AOvVaw3Sximc3Zg8b4LXP04JCWA4')
      },
      Mail:function () {

        window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ss8461216@gmail.com'; 
      },
      

      
};
export default function About() {
    const classes = useStyles();

    return (
        <>
         <Typography variant="h2" align="center" mt={2}> Link Us On  for More Updates</Typography>
         
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.gridContainer}>
        <Grid  item xs={6} sm={4} md={4}  >
        <Profile link={data.github.Glink} name={data.info.git} def={''} fun={data.Git} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}  >
        <Profile link={data.github.Ilink} name={data.info.instagram} def={''} fun={data.Insta} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}  >
        <Profile link={data.github.Gmlink} name={data.info.Mail} def={''} fun={data.Mail}/>
        </Grid>
       
        </Grid>
      
        </>
    )
}
