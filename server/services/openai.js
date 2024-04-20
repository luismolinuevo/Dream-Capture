import OpenAI from "openai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function generateResponse(dream) {
  // Validate input (if needed)

  try {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: generatePrompt(dream),
        n: 4,
        size: "1024x1024",
      });

      image_url = response.data[0].url;
      console.log(image_url)
    return image_url;
  } catch (error) {
    throw error;
  }
}

function generatePrompt(dream) {
  return `
You respond with a max of 250 tokens, so you should keep your bullets straight to the point.
${dream}`;
}