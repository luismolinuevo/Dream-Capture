import "./App.css";
import Calendar from "./components/General/Calender";
import SpeechToText from "./components/SpeechRecognition";

function App() {
  return (
    <div className="">
      <SpeechToText />
      <div className="flex justify-center">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
