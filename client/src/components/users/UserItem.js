import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  const classes = useStyles();
  return (
        <Grid item key={Math.random} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={avatar_url}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                {login}
                </Typography>
                <Typography>
                  BIO user profile
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                <Link to={`/user/${login}`}>
                    More
                </Link>
                </Button>
              </CardActions>
            </Card>
        </Grid>    
  );
};

{/* <div className='text-center'>
<Card className={classes.card}>
<CardMedia
  className={classes.cardMedia}
  image={avatar_url}
  title="Image title"
/>
<CardContent className={classes.cardContent}>
  <Typography gutterBottom variant="h5" component="h2">
    {login}
    
  </Typography>
  <Typography>
    This is a media card. You can use this section to describe the content.
  </Typography>
</CardContent>
<CardActions>
  <Button size="small" color="primary">
    <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
      More
    </Link>
  </Button>
</CardActions>
</Card>
</div> */}

export default UserItem;
