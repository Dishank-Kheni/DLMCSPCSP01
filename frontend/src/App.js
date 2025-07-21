import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './styles/App.css';
import ChatWindow from './components/ChatWindow';
import OrderForm from './components/OrderForm';

function App() {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="App">
      <ChatWindow messages={messages} />
      <OrderForm addMessage={addMessage} />
      <div ref={chatEndRef} />
    </div>
  );
}

export default App;