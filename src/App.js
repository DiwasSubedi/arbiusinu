import logo from './logo.svg';
import './App.css';
import city from './assets/videos/arb2.mp4'
import cityflipped from './assets/videos/arb2-flipped.mp4'
import dog from './assets/videos/arbiusin-home1.mp4'
// import MessageList from './messageList';
// import MessageInput from './messageInput';
import { Provider } from 'react-redux';
import store from './store';
import MainChat from './mainChat';

function App() {
  const mobile = window.matchMedia("(max-width: 500px)")


    return (
      <div className="app">
        <div className="left-section">
          <video src={city} autoPlay loop muted className="full-video" style={{ transform: 'scaleY(-1))' }}></video>
          <video src={dog} autoPlay loop muted className="overlay-video"></video>
          <div className="button-container">
            <a href="https://discord.gg/fZXkYMAchQ"><img src="https://roko.network/img/Discordneedle.55b10906.svg" height={"35px"} width={"35px"} alt=""/></a>     
            <a href="https://t.me/RokoNetwork"><img src="https://roko.network/img/telegram.e57a616e.svg" height={"35px"} width={"35px"}alt=""/></a>
            <a href="https://twitter.com/RokoNetwork"><img src="https://roko.network/img/Twitterneedle.74b664e4.svg" height={"35px"} width={"35px"}alt=""/></a>  
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xe0076d311a4628516d157ad684dbd2ddada3dafe"><img src="https://roko.network/img/dextools.22c2f9c8.svg" alt="" height={"35px"} width={"35px"}/></a>  
            <a href="https://www.coingecko.com/en/coins/roko-network"><img src="https://roko.network/img/cg.dfcc57bb.svg" alt="" height={"35px"} width={"35px"}/></a>  
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
