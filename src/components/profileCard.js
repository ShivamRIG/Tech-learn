import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
});
export default function Profile(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} id="TGT">
      <CardActionArea onClick={props.fun}>
        <CardMedia
          component="img"
          alt="data"
          height="140"
          image={props.link}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            {props.name} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.def}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
