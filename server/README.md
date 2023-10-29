# Node Express TypeScript Server

This is a Node.js Express server project developed using TypeScript. It includes routes for interacting with the OpenAI service to generate drink ideas based on user preferences.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- An OpenAI API key (place it in the `.env` file).

## Getting Started

To get started, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone <repository-url>

2. Install project dependencies:

   ```shell
   npm install

3. Start the server in development mode:

   ```shell
   npm run dev

Your server should now be running on the specified port (default is 3000).

## Configuration

The server relies on environment variables for configuration. You should create a .env file in the project root and set your OpenAI API key:

   ```makefile
   OPENAI_API_KEY=your-api-key-here
   PORT=3000
   ```
Replace your-api-key-here with your actual OpenAI API key.

## Usage

You can interact with the server using API endpoints as described in the [API Endpoints](#api-endpoints) section.

## API Endpoints

- GET /: A simple endpoint to check if the server is running.

- POST /drinkideas: Generate drink ideas based on user preferences.
  - Request body
     ```json
     {
       "base": "Preferred base spirit",
       "flavor": "Flavor preferences",
       "fruit": "Preferred fruit or citrus",
       "strength": "Alcohol strength preference",
       "restriction": "Allergies or dietary restrictions"
     }
    ```
  - Response
     ```json
     {
       "result": "Generated drink ideas..."
     }
     ```

## License
This project is licensed under the MIT License.
