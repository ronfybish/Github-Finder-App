import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Search from '../../users/Search';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const hero = {
    title: 'Github Finder',
    description:
      "Your place to find and explor new developers!",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));
export default function MainFeaturedPost() {
  const classes = useStyles();
  
  return (
    <Paper className={classes.mainFeaturedPost} >
      {<img style={{ display: 'none' }}  alt={hero.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {hero.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {hero.description}
            </Typography>
            <Search/>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
