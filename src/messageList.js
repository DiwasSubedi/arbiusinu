import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import './messageList.css';

const TypingIndicator = () => (
  <div className="typing-indicator">
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const MessageList = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll to bottom whenever messages change

  return (
    <div className="messages-container">
      {messages.map((message, index) => {
        const messageClass = message.sender === 'user' ? 'user-message' : 'response-message';

        return (
          <div key={index} className={messageClass + ' text glow-div'}>
            {message.text}
          </div>
        );
      })}
     {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
  isTyping: state.isTyping
});

export default connect(mapStateToProps)(MessageList);