import React, { useState, useEffect } from "react";
import { generateImages } from "../../lib/openai";
import { createDream } from "../../lib/dreams";
import { useNavigate } from "react-router-dom";

export default function ImageGeneration() {
  const navigate = useNavigate();
  const dreamText = localStorage.getItem("dreamTranscript");
  const [image, setImage] = useState("");

  const onSave = async () => {
    try {
      const data = {
        dream: dreamText,
      };
      const create = await createDream(data);

      if (create.success) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    const createImages = async () => {
      try {
        // if (!image) {
        const data = {
          dream: dreamText,
        };

        const create = await generateImages(data);

        console.log("I was called!!!!!!!", dreamText);

        if (create.success) {
          setImage(create);
        } else {
          console.log("Unable to get images");
        }
        // } else {
        //   console.log("No need to run");
        // }
      } catch (error) {
        console.error("There has been a error getting images", error);
      }
    };

    createImages();
  }, [dreamText]);

  return (
    <div>
      {image && <img src={image?.result} alt="Dream Image" onClick={onSave} />}
    </div>
  );
}
