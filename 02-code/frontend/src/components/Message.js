import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = ({ text, from }) => {
  return (
    <div className={`message ${from}`}>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  from: PropTypes.oneOf(['user', 'bot']).isRequired,
};

export default Message;