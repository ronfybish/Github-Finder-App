import React from 'react';
import CommentItem from './CommentItem';

const Comments = ({ comments }) => {
  return comments.map(comment => <CommentItem comment={comment} key={comment.id} />);
};

export default Comments;
