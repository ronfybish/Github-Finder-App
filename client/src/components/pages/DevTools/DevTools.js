import React,{useContext} from 'react'
import Products from '../../products/Products'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProducthuntContext from '../../../context/producthunt/producthuntContext';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const DevTools = () => {
  const classes = useStyles();
  const producthuntContext = useContext(ProducthuntContext);
  const {setTopic}=producthuntContext

  const onChangeTopic=(e)=>{
    const newTopic=e.target.innerText.replace(' ','-').toLowerCase()
    setTopic(newTopic)
  }

  return (
    <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Best Software Development Tools
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Know which Software Tools developers use for developing the latest and modern feature-rich projects
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" onClick={onChangeTopic} color="primary">
                    APIs
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={onChangeTopic} color="primary">
                  Software Engineering
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={onChangeTopic} color="primary">
                  Internet Of Things
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={onChangeTopic} color="primary">
                  Web App
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={onChangeTopic} color="primary">
                    Chrome Extensions
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={onChangeTopic} color="primary">
                    Open Source
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
       <Products />
    </main>
  )
}

export default DevTools
