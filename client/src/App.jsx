import "./App.css";
import Calendar from "./components/General/Calender";
import SpeechToText from "./components/SpeechRecognition";
import Home from "./pages/Home";

function App() {
  return (
    <Home/>
    // <div className="">
    //   <SpeechToText />
    //   <div className="flex justify-center">
    //     <Home/>
    //   </div>
    // </div>
  );
}

export default App;
