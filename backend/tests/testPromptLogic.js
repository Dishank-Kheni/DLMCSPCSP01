const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const assert = require("assert");

// Load test cases
const testCases = JSON.parse(
  fs.readFileSync("./tests/structuredPromptTestCases.json", "utf-8")
);

// Setup OpenAI
const configuration = new Configuration({
  apiKey:
    "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",
});
const openai = new OpenAIApi(configuration);

// Function to run tests
async function runTests() {
  const menuData = JSON.parse(fs.readFileSync("./data/menu.json", "utf-8"));

  for (const { category, input, required_tags } of testCases) {
    console.log(`\n🧪 [${category}] "${input}"`);

    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a restaurant assistant. Suggest dishes ONLY from this exact menu: ${JSON.stringify(
            menuData
          )}. Do not invent or suggest items that are not on this menu.`,
        },
        { role: "user", content: input },
      ],
    });

    const reply = completion.data.choices[0].message.content;
    console.log(`🤖 Response: ${reply}`);

    const mentionedItems = extractMenuItems(reply);

    if (mentionedItems.length === 0) {
      console.warn(`⚠️ No valid menu item mentioned.`);
      continue;
    }

    const allValid = mentionedItems.every((item) =>
      required_tags.every((tag) => item.tags.includes(tag))
    );

    if (allValid || required_tags.length === 0) {
      console.log(
        `✅ Passed (${mentionedItems.map((i) => i.name).join(", ")})`
      );
    } else {
      console.error(
        `❌ Failed: Item(s) don't match required tags [${required_tags.join(
          ", "
        )}]`
      );
    }
  }
}

// Helper: find menu item mentioned in response
function extractMenuItems(response) {
  const menu = JSON.parse(fs.readFileSync("./data/menu.json", "utf-8"));
  const mentioned = [];
  for (const item of menu) {
    if (response.toLowerCase().includes(item.name.toLowerCase())) {
      mentioned.push(item);
    }
  }
  return mentioned;
}

// Run tests
runTests();
