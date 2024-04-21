import React, { useState } from "react";
import SpeechToText from "../SpeechRecognition";

export default function CreatePostStepOne() {
  const [transcribedText, setTranscribedText] = useState("");
  return (
    <div className="flex flex-col h-screen justify-end px-2">
      <div className="flex flex-col items-end w-full h-[65%]"> {/* Set height of container to 75% */}
        <textarea type="text" className="w-full h-full rounded-t-[60px] px-5 py-5 outline-none" placeholder="What was your dream?" /> {/* Set height of textarea to 100% */}
      </div>
      <div className="w-full"> {/* Add margin to separate textarea and SpeechToText */}
        <SpeechToText
          transcribedText={transcribedText}
          setTranscribedText={setTranscribedText}
        />
      </div>
    </div>
  );
}
