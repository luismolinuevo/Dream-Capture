import React, {useState, useEffect} from "react";
import CreateDreamStepTwo from "../components/CreateDream/CreateDreamStepTwo";
import ImageGeneration from "../components/CreateDream/ImageGeneration";

export default function ConfirmCreateDream() {
    useEffect(() => {
        console.log("remoun confirm");
      }, []);
    
    // const transcribedText = localStorage.getItem("dreamTranscript");
    // const [dreamText, setDreamText] = useState(transcribedText || "")

    // useEffect(() => {
    //     if(transcribedText) {
    //         setDreamText(transcribedText)
    //     }
    // },[transcribedText])

  return (
    <div className="bg-purple-primary z-[-1] h-[100vh]">
      <CreateDreamStepTwo/>
      
    </div>
  );
}
