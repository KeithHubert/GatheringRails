import React from 'react';

const CommentField = props => {
  return (
    <div className='columns small-12'>
      <div className='bumper-50'></div>
      <h6> Leave a comment </h6>
      <label>{props.label}
        <textarea
          name={props.name}
          onChange={props.handlerFunction}
          value={props.content}
        />
      </label>
    </div>
  );
}
export default CommentField;
