import React, { useState } from "react";
import SpeechToText from "../SpeechRecognition";

export default function CreateDreamStepOne() {
  const [transcribedText, setTranscribedText] = useState("");
  return (
    <div className="flex flex-col h-screen justify-end px-2">
      <div className="flex flex-col items-end w-full h-[65%]">
        <textarea type="text" className="w-full h-full rounded-t-[60px] px-7 py-7 outline-none" placeholder="What was your dream?" value={transcribedText} onChange={(e) => setTranscribedText(e.target.value)} /> 
      </div>
      <div className="w-full"> 
        <SpeechToText
          transcribedText={transcribedText}
          setTranscribedText={setTranscribedText}
        />
      </div>
    </div>
  );
}