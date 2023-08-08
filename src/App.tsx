// App.tsx
import React from 'react';
import './App.css';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Custom Chatbot
      </header>
      <Chat />
    </div>
  );
}

export default App;
