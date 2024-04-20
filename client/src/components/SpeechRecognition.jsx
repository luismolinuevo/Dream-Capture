import React, { useState } from 'react';

const SpeechToText = () => {
  const [transcribedText, setTranscribedText] = useState('');
  const [error, setError] = useState('');

  // Check if SpeechRecognition is available
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    setError('Speech recognition not supported in this browser');
    return <div>{error}</div>;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    console.log("test", event.results)
    const transcript = event.results[0][0].transcript;
    setTranscribedText(transcript);
  };

  recognition.onerror = (event) => {
    console.error('Recognition error:', event.error);
  };
  

  const startListening = () => {
    console.log("started to record")
    recognition.start();
  };

  const stopListening = () => {
    console.log("stop recording")
    recognition.stop();
    console.log(recognition);
  };

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      <div>{transcribedText}</div>
    </div>
  );
};

export default SpeechToText;