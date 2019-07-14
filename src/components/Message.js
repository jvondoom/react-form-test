import React from 'react';

const Message = props => {
  let status = '';
  if (
    props.isEmailValid &&
    props.isNameValid &&
    props.isPhoneValid &&
    props.isUrlValid
  ) {
    status = 'Complete';
  } else {
    status = 'Incomplete';
  }
  return (
    <div>
      <h3 className="text-center message">Form is {status}!</h3>
    </div>
  );
};

export default Message;
