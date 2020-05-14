import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div className='card'>
      <h3>{comment.user.name} <br/>{comment.body}</h3>
    </div>
  );
};

export default CommentItem;
