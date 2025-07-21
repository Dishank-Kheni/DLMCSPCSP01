import axios from "axios";

const API_URL = "http://localhost:5000/api/chat/message";

export const sendMessage = async (message, conversation) => {
  try {
    const response = await axios.post(API_URL, {
      message,
      conversation,
    });
    return response.data.reply;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
