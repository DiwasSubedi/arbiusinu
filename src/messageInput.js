import React, { useState } from 'react';
import './messageInput.css'
import { connect } from 'react-redux';
import { sendMessage } from './actions';

const MessageInput = ({ dispatch }) => {
  const [message, setMessage] = useState('');
  const [rokoResponse, setRokoResponse] = useState(true)

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage(message));
      setRokoResponse(false)
      setMessage('');
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };
  

  const handleRokoResponse = (message) => {
    dispatch(sendMessage(message))
    setRokoResponse(false)
  }

  return (
    <div className="main-container">
      
      <div className="chat-container">
        <input
          type="text"
          className="chat-input"
          onKeyPress={handleEnterPress}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          
        />
        <button className="send-button" onClick={handleSendMessage}></button>
      </div>
    </div>
  );
}

export default connect()(MessageInput);