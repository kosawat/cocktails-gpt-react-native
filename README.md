# Cocktails Ideas Generation with OpenAI GPT Model

This React Native app allows users to generate cocktail ideas based on their preferences using the OpenAI GPT model. Users can answer a series of questions, and the app will provide cocktail suggestions with recipes and instructions.

## Features

- Create a delightful cocktail recipe based on user preferences.
- Easy-to-use interface for answering questions.
- Receive cocktail ideas, complete with recipes and preparation instructions.
- Option to start a new search with the "Try Again" button.

## Prerequisites

Before running the app, make sure you have the following:

- [Node.js](https://nodejs.org/) and npm installed.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed.
- OpenAI API Key (for using the GPT model in API Server implemented at /server).
- Basic knowledge of React Native development.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   cd cocktail-ideas-app

2. Install the project dependencies:
   
   ```bash
   npm install

3. Start the development server:

   ```bash
   npm start
   ```

   Follow the instructions in the Expo development environment to run the app on your chosen platform (iOS, Android, or a web browser).
   
4. Start the API Server in development mode (API Server is implemented at folder /server):
   
   ```bash
   cd server
   npm run dev
   ```

## Configuration

Create a .env.local file in the project root and set the url of API Server:

   ```makefile
   EXPO_PUBLIC_BASE_API_URL="<your API Server url>"
   ```

## Usage

1. Launch the app on your device or simulator.
2. Answer a series of questions about your cocktail preferences.
3. The app will generate cocktail ideas with recipes and instructions.
4. If you want to start a new search, use the "Try Again" button.

## License
This project is licensed under the MIT License.