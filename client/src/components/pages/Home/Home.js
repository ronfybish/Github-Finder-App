import React from 'react';
import Users from '../../users/Users';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Search from '../../users/Search'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
        {<img style={{ display: 'none' }} alt='replace'  />}
      <div className={classes.overlay} />
          <Container maxWidth="sm">
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h2" align="center"  color="inherit" gutterBottom>
              <strong>Github Finder</strong>
            </Typography>
            <Typography variant="h4" align="center"  color="inherit" paragraph>
              Finding the right people and building high performing projects together
            </Typography>
              <Search/>
              <Typography variant="h6" align="center"  color="inherit" paragraph>
                The modern developer's toolbox:
            </Typography>
            <Link to='/devtools'>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                endIcon={<Icon>send</Icon>}
              >
                BEST Software Developers Tools
              </Button>
            </Link>
            </div>
          </Container>
        </div>
       <Users/>
    </main>
  )
};

export default Home;
