import React from 'react';

import './card.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    maxWidth: 250,
    background: '#9EFDFD',
    borderRadius: 5,
    margin: 5,
    marginLeft: 20,
  },
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CardRobo = (props) => {
  const { name, email, id } = props;
  const classes = useStyles();

    return (
        <Card className={classes.root} elevation={4}>
              <Grid container justify='center'>
                {/* <CardMedia 
                  className={classes.media} 
                  image="https://robohash.org/osa?200x200" 
                  alt="robots" 
                  title="Robot Image" 
                /> */}
                <div className='robot_image'>
                  <img src={`https://robohash.org/${id}`} alt="robots"/>
                </div>
                <Typography variant='h5'>{name}</Typography>
                <Typography>{email}</Typography>
              </Grid>
        </Card>
    );
}

export default CardRobo;
