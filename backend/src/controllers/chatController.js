const { getChatResponse } = require("../config/openai");
const Menu = require("../models/menu");

// Chat controller function
const processMessage = async (req, res) => {
  const { message, conversation } = req.body;

  try {
    // Get response using the helper function
    const reply = await getChatResponse(message, conversation);
    res.json({ reply });
  } catch (error) {
    console.error("Error handling chat request:", error);
    res
      .status(500)
      .json({ error: "Failed to get response from chat service." });
  }
};

module.exports = {
  processMessage,
};
