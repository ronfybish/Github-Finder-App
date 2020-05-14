import React from 'react';
import Users from '../../users/Users';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Search from '../../users/Search'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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

const Home = () => {
  const classes = useStyles();
  return(
    <main>
        <div className={classes.heroContent}>
        {<img style={{ display: 'none' }}   />}
      <div className={classes.overlay} />
          <Container maxWidth="sm">
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h2" align="center"  color="inherit" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center"  color="inherit" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
              <Search/>
            </div>
          </Container>
        </div>
       <Users/>
    </main>
  )
};

export default Home;
