# Custom Data Chatbot

This project is a Chatbot built using React, TypeScript, and OpenAI's API. The unique aspect of this chatbot is its ability to learn and answer queries based on custom documents provided to it.

## Features

- **Custom Data Training**: Feed the chatbot with custom documents and it will learn to answer queries based on them.
- **React Frontend**: A sleek UI for users to interact with the chatbot.
- **Express Backend**: For handling server-side operations and communicating with OpenAI's API securely.

## Setup & Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME

2. **Install Dependencies**:
```bash
   npm install
```
3. **Set up Environment Variables:**
   * Rename .env.example to .env.
   * Fill in the required variables (e.g., OPENAI_API_KEY).
  

4. **Start the Application:**
   ```bash
   npm start
   ```

## Training the Chatbot
1. Add your documents (text, PDF, etc.) to the docs folder.
2. Run the Python script to process and index these documents:
```bash
   python3 app.py
   ```
## License
This project is open-source and available under the MIT License.
