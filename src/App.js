import "./App.css";
import Interval from "./components/interval/Interval";

import song from "./assets/kalyana_malai4.mp3";

function App() {
  return (
    <div className="responsive-container">
      <div className="App heartbeat">
        <div>
          <h1 className="h1text">
            💕 உங்கள் 💕 💕 இருவருக்கும் <br />
            💕 இனிய திருமணநாள் வாழ்த்துக்கள் 💕
          </h1>
        </div>
        <div>
          <Interval />
        </div>
      </div>
      <audio src={song} autoPlay></audio>
    </div>
  );
}

export default App;
