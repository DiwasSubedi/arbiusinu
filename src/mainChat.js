import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MessageList from './messageList';
import MessageInput from './messageInput';

function MainChat(messages) {
  return (
    <div>
      <MessageList messages={messages}/>
      <MessageInput />
    </div>
  );
}
  const mapStatetoProps = (state) => ({
    messages: state.messages
  })


export default connect(mapStatetoProps)(MainChat);