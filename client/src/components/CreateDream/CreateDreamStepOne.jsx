import React, { useState, useEffect } from "react";
import SpeechToText from "./SpeechRecognition";
import { useNavigate } from "react-router-dom";

export default function CreateDreamStepOne() {
  const navigate = useNavigate();
  const [transcribedText, setTranscribedText] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [doneTranscribing, setDoneTranscribing] = useState(false);

  useEffect(() => {
    if (!isTranscribing && doneTranscribing && transcribedText.length > 0) {
      localStorage.setItem("dreamTranscript", transcribedText);
      navigate("/reviewdream");
    }
  }, [isTranscribing, transcribedText, doneTranscribing]);

  return (
    <div className="flex flex-col h-screen justify-end px-2">
      <div className="flex flex-col items-end w-full h-[60%]">
        <textarea
          type="text"
          className="w-full h-full rounded-t-[60px] px-7 py-7 outline-none"
          placeholder={
            isTranscribing ? "Transcibing..." : "What was your dream?"
          }
          value={transcribedText}
          onChange={(e) => setTranscribedText(e.target.value)}
        />
      </div>
      <div className="w-full">
        <SpeechToText
          setTranscribedText={setTranscribedText}
          setIsTranscibing={setIsTranscribing}
          isTranscibing={isTranscribing}
          setDoneTranscribing={setDoneTranscribing}
        />
      </div>
    </div>
  );
}
