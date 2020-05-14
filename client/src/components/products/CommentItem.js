import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const CommentItem = ({ comment }) => {
  const classes = useStyles();

  return (
    <div className='card'>
      <h3>
      <Avatar alt="Remy Sharp" src={comment.user.image_url['60px']} className={classes.large} />
        {comment.user.name}
        </h3>
      <h6>{comment.body}</h6>
    </div>
  );
};

export default CommentItem;
