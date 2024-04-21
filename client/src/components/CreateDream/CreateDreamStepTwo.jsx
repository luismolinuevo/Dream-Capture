import React, {useEffect, useState} from "react";

export default function CreateDreamStepTwo() {
    const transcribedText = localStorage.getItem("dreamTranscript");
    const [dreamText, setDreamText] = useState(transcribedText || "")

    useEffect(() => {
        if(transcribedText) {
            setDreamText(transcribedText)
        }
    },[transcribedText])
  return (
    <div className="flex flex-col h-screen justify-end px-2">
      <div className="flex flex-col items-end w-full h-[85%]">
        <textarea
          type="text"
          className="w-full h-full rounded-t-[60px] px-7 py-7 outline-none"
          placeholder="Dream description"
          value={dreamText}
          onChange={(e) => setDreamText(e.target.value)}
          readOnly
        />
      </div>
    </div>
  );
}
