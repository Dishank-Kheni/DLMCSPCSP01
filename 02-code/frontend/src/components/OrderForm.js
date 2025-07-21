import React, { useState } from "react";
import { sendMessage } from "../services/api";

const OrderForm = ({ addMessage }) => {
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (order.trim()) {
      setIsLoading(true);

      // Add user message to chat
      const userMessage = { text: order, from: "user" };
      addMessage(userMessage);

      // Update conversation history
      const updatedConversation = [...conversation, userMessage];
      setConversation(updatedConversation);

      try {
        // Send to API with conversation history
        const reply = await sendMessage(order, updatedConversation);

        // Add bot message to chat
        const botMessage = { text: reply, from: "bot" };
        addMessage(botMessage);

        // Update conversation with bot response
        setConversation([...updatedConversation, botMessage]);
      } catch (error) {
        console.error("Failed to get response:", error);
        addMessage({
          text: "Sorry, I couldn't process your request.",
          from: "bot",
        });
      } finally {
        setIsLoading(false);
      }

      setOrder("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-area">
      <input
        type="text"
        value={order}
        onChange={handleChange}
        placeholder="Type your order..."
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit Order"}
      </button>
    </form>
  );
};

export default OrderForm;
