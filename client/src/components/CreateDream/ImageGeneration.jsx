import React, { useState, useEffect } from "react";
import { generateImages } from "../../lib/openai";

export default function ImageGeneration({ transcribedText }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const createImages = async () => {
      try {
        if (transcribedText) {
          const data = await generateImages(transcribedText);
        }
        console.log(data);

        if (data.success) {
          setImages(data);
        } else {
          console.log("Unable to get images");
        }
      } catch (error) {
        console.error("There has been a error getting images", error);
      }
    };

    createImages();
  }, [transcribedText]);
  return (
    <div>
      {images && images.length != 0 ? (
        images.map((image) => <img src="" ult="Image of dream" />)
      ) : (
        <p>No images</p>
      )}
    </div>
  );
}
