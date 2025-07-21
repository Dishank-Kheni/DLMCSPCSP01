import React, { useEffect, useRef } from 'react';
import Message from './Message';
import './ChatWindow.css';

const ChatWindow = ({ messages }) => {
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} from={msg.from} text={msg.text} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;