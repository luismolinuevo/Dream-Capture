import React, { useState } from "react";

const SpeechToText = ({
  setIsTranscibing,
  setTranscribedText,
  isTranscibing,
  setDoneTranscribing,
}) => {
  const [error, setError] = useState("");

  // Check if SpeechRecognition is available
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    setError("Speech recognition not supported in this browser");
    return <div>{error}</div>;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    console.log("test", event.results);
    const transcript = event.results[0][0].transcript;
    setTranscribedText(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Recognition error:", event.error);
  };

  const startListening = () => {
    //may need a couple seconds to before closing
    recognition.start();
    setIsTranscibing(true);
    console.log("Listening");
  };

  const stopListening = () => {
    recognition.stop();
    setIsTranscibing(false);
    setDoneTranscribing(true);
    console.log("Stopped Listening");
  };

  return (
    <div className="bg-white h-[150px]">
      {!isTranscibing ? (
        <div className="flex justify-center">
          <button onClick={startListening}>
            <img src="/Mircophone.png" alt="" />
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button onClick={stopListening}>
            <img src="/EndRecording.png" alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeechToText;
