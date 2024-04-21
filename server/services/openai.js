import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function generateResponse(dream) {
  try {
    if (dream) {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: generatePrompt(dream),
        n: 1,
        size: "1024x1024",
      });

      const image_url = response.data[0].url;
      console.log(image_url);

      return image_url;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function generatePrompt(dream) {
  return `
So I want to you create a image of my dream. Im going to give you a description of my dream below
${dream}`;
}
