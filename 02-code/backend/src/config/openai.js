const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getChatResponse = async (message, conversation) => {
  const menuData = require("../../data/menu.json");

  const completion = await openai.createChatCompletion({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: "system",
        content: `You are a restaurant assistant. Suggest dishes only from this menu: ${JSON.stringify(
          menuData
        )}`,
      },
      ...(conversation || []).map((msg) => ({
        role: msg.from === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: message },
    ],
  });

  return completion.data.choices[0].message.content;
};

module.exports = { openai, getChatResponse };
