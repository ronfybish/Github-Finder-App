import React, { useContext,useEffect } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GithubContext from '../../context/github/githubContext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Users = () => {
  const classes = useStyles();
  const githubContext = useContext(GithubContext);
  const {loading,users,getUsers}=githubContext
   
    useEffect(() => {
          getUsers()
          // eslint-disable-next-line
    }, [])

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}  />
        ))}
      </Grid>
    </Container>
    );
  }
};



export default Users;
