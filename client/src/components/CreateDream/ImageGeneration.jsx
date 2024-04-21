import React, { useState, useEffect } from "react";
import { generateImages } from "../../lib/openai";

export default function ImageGeneration() {
  const dreamText = localStorage.getItem("dreamTranscript");
  const [image, setImage] = useState("");

  const onSave = async () => {
    
  }

  useEffect(() => {
    const createImages = async () => {
      try {
        // if (dreamTe) {
          const data = {
            dream: dreamText,
          };
          const create = await generateImages(data);

          console.log(create);

          if (create.success) {
            setImage(create);
          } else {
            console.log("Unable to get images");
          }
        // } else {
        //   console.log("No dream text");
        // }
      } catch (error) {
        console.error("There has been a error getting images", error);
      }
    };

    createImages();
  },[dreamText]);

  return (
    <div>
      {image && <img src={image?.result} alt="Dream Image" onClick={onSave}/>}
    </div>
  );
}
