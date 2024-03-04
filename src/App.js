import "./App.css";
import Interval from "./components/interval/Interval";

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
    </div>
  );
}

export default App;
