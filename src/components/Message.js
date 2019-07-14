import React from 'react';

const Message = props => {
  return (
    <div>
      <h3 className="text-center message">Form is {props.status}!</h3>
    </div>
  );
};

export default Message;
