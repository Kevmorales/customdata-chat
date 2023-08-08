// components/Chat.tsx
import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    setMessages([...messages, `You: ${input}`]);

    // TODO: Here, you'll call the API (Express server) to get the bot's response
    // For now, we'll mock a dummy response
    const botResponse = "I'm a dummy response!";
    setMessages([...messages, `You: ${input}`, `Bot: ${botResponse}`]);
    setInput('');
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
