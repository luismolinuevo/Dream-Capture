import "./App.css";
import Calendar from "./components/General/Calender"
import SpeechToText from "./components/SpeechRecognition";

function App() {

  return (
    <div className="main">
      <SpeechToText />
      <Calendar/>
    </div>
  );
}

export default App;
