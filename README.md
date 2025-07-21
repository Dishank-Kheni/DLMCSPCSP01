# Restaurant Assistant

## Overview
The Restaurant Assistant project is a web application designed to help users interact with a restaurant's menu through a chatbot interface. The application leverages the OpenAI API to provide intelligent responses based on user input, allowing for a seamless ordering experience.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
The backend is built using Node.js and Express. It handles chat interactions, manages the menu data, and communicates with the OpenAI API.

- **src/controllers/chatController.js**: Contains functions for handling chat-related requests.
- **src/routes/chatRoutes.js**: Defines the endpoints for chat interactions.
- **src/models/menu.js**: Manages menu data retrieval and manipulation.
- **src/config/openai.js**: Configures the OpenAI API settings.
- **src/utils/promptHelpers.js**: Provides utility functions for generating prompts.
- **src/app.js**: Initializes the Express application and sets up middleware.
- **data/menu.json**: Contains the menu data in JSON format.
- **tests/chatbot.test.js**: Tests for the chatbot functionality.
- **.env**: Stores environment variables, including the OpenAI API key.
- **package.json**: Lists dependencies and scripts for the backend application.
- **server.js**: Entry point for the backend server.

### Frontend
The frontend is built using React. It provides a user-friendly interface for interacting with the chatbot.

- **src/components/ChatWindow.js**: Displays the chat interface.
- **src/components/Message.js**: Represents individual messages in the chat.
- **src/components/OrderForm.js**: Allows users to submit their orders.
- **src/services/api.js**: Handles API calls to the backend.
- **src/styles/App.css**: Contains CSS styles for the frontend application.
- **src/App.js**: Main application component.
- **src/index.js**: Entry point for the frontend application.
- **public/index.html**: Main HTML file for the frontend.
- **public/favicon.ico**: Favicon for the frontend application.
- **package.json**: Lists dependencies and scripts for the frontend application.

### Shared
- **shared/menuData.js**: Exports shared menu data or functions for both frontend and backend.

### Tests
- **tests/testPromptLogic.js**: Tests for the prompt logic.
- **tests/structuredPromptTestCases.json**: Contains structured test cases for validating prompt logic.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd restaurant-assistant
   ```

2. **Install backend dependencies**:
   ```
   cd backend
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `backend` directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. **Install frontend dependencies**:
   ```
   cd ../frontend
   npm install
   ```

5. **Run the backend server**:
   ```
   cd backend
   npm start
   ```

6. **Run the frontend application**:
   ```
   cd ../frontend
   npm start
   ```

## Usage
Once both the backend and frontend are running, you can access the application in your web browser. The chatbot will guide you through the menu and help you place orders.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.