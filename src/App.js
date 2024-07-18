import logo from './logo.svg';
import './App.css';
import city from './assets/videos/arb2.mp4'
import cityflipped from './assets/videos/arb2-flipped.mp4'
import dog from './assets/videos/arbiusin-home1.mp4'
import sound from './assets/videos/metal-click.mp3'
// import MessageList from './messageList';
// import MessageInput from './messageInput';
import { Provider } from 'react-redux';
import store from './store';
import MainChat from './mainChat';
import React, { useRef, useState } from 'react';
function App() {
  const mobile = window.matchMedia("(max-width: 500px)")
  const [metalAudio] = useState(new Audio(sound));
  const startMetal = () => {
    if (mobile.matches) return
    metalAudio.currentTime = 0
    metalAudio.play().catch(error => console.error("Error playing the sound:", error));
  }

    return (
      <div className="app">
        <div className="left-section">
          <video src={city} autoPlay loop muted className="full-video" ></video>
          <div><video src={dog} autoPlay loop muted className="overlay-video"></video></div>
          <div className="button-container">
            <a href="https://discord.gg/fZXkYMAchQ"><img onMouseEnter={startMetal} src="https://roko.network/img/Discordneedle.55b10906.svg" height={"35px"} width={"35px"} alt=""/></a>     
            <a href="https://t.me/RokoNetwork"><img onMouseEnter={startMetal} src="https://roko.network/img/telegram.e57a616e.svg" height={"35px"} width={"35px"}alt=""/></a>
            <a href="https://twitter.com/RokoNetwork"><img onMouseEnter={startMetal} src="https://roko.network/img/Twitterneedle.74b664e4.svg" height={"35px"} width={"35px"}alt=""/></a>  
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xe0076d311a4628516d157ad684dbd2ddada3dafe"><img onMouseEnter={startMetal} src="https://roko.network/img/dextools.22c2f9c8.svg" alt="" height={"35px"} width={"35px"}/></a> 

           </div>
        </div>
        <div className="right-section">
          <video src={cityflipped} autoPlay loop muted className="full-video"></video>
          <div className="chat-overlay">
            <Provider store={store}>
              <MainChat></MainChat>
            </Provider>
          </div>
        </div>
      </div>
    );
}


export default App;
