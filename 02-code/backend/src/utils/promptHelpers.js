export function generatePrompt(userInput, context) {
    return `User Input: ${userInput}\nContext: ${context}\nPlease provide a response based on the above information.`;
}

export function extractRelevantTags(menuItem) {
    return menuItem.tags.join(', ');
}

export function createMenuResponse(menuItems) {
    return menuItems.map(item => `${item.name} - ${item.price} (${extractRelevantTags(item)})`).join('\n');
}