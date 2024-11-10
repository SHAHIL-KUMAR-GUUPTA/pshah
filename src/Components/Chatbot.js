import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const botResponses = {
    "greetings": [
      "Hi there! How can I assist you today?",
      "Hello! How can I help you?",
      "Hey! What can I do for you today?",
      "Hi! How are you today?"
    ],
    "graphic design": [
      "Graphic design services typically cost between $500 to $5000 depending on the complexity.",
      "Graphic design timeframes vary but usually take 1-3 weeks for a project depending on the scope."
    ],
    "web development": [
      "Web development projects can range from $1000 to $10,000+ depending on the features and technology stack used.",
      "Web development usually takes 2 to 6 weeks depending on project requirements."
    ],
    "project consultation": [
      "Project consultation costs generally range from $50 to $200 per hour depending on the consultant's expertise.",
      "Consultation time depends on the project's complexity, but most sessions last between 30 minutes to 2 hours."
    ],
    "pricing": [
      "Pricing varies based on project size, industry, and scope. A typical range is $1000 to $20,000."
    ],
    "how are you": [
      "I'm doing great, thank you! How can I help you today?",
      "I'm doing well, thanks for asking! How can I assist you today?"
    ],
    "default": "I'm here to help with topics like graphic design, web development, project consultation, and pricing. Can you try rephrasing your question?"
  };

  function handleSendMessage() {
    if (userInput.trim() === "") return;

    setMessages(prevMessages => [...prevMessages, { text: userInput, sender: 'user' }]);
    setUserInput("");

    const botMessage = getBotResponse(userInput);
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: botMessage, sender: 'bot' }]);
    }, 1000);
  }

  function getBotResponse(userMessage) {
    const userMessageLower = userMessage.toLowerCase().trim();

    if (userMessageLower.includes("hi") || userMessageLower.includes("hello") || userMessageLower.includes("hey")) {
      return botResponses["greetings"][Math.floor(Math.random() * botResponses["greetings"].length)];
    }
    
    if (userMessageLower.includes("how are you")) {
      return botResponses["how are you"][Math.floor(Math.random() * botResponses["how are you"].length)];
    }

    const categories = [
      { name: "graphic design", keywords: ["graphic design", "logo", "branding", "visual", "designing", "graphics", "illustration"] },
      { name: "web development", keywords: ["web development", "website", "web", "front-end", "back-end", "coding", "programming", "development"] },
      { name: "project consultation", keywords: ["consultation", "project advice", "consulting", "strategy", "advice", "session", "consult"] },
      { name: "pricing", keywords: ["cost", "pricing", "rates", "price", "fees", "charges", "quote", "budget"] }
    ];

    for (let category of categories) {
      const matchCount = category.keywords.filter(keyword => userMessageLower.includes(keyword)).length;
      
      if (matchCount >= 1) {
        return botResponses[category.name][Math.floor(Math.random() * botResponses[category.name].length)];
      }
    }

    return botResponses["default"];
  }

  function handleInputChange(e) {
    setUserInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }

  return (
    <div className="chatbot-container">
      <div id="chat-box" className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      
      <input 
        type="text" 
        id="user-input" 
        value={userInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..." 
        className="user-input" 
      />
      <button 
        id="send-button" 
        onClick={handleSendMessage} 
        className="send-button">
        Send
      </button>
    </div>
  );
}

export default Chatbot;
