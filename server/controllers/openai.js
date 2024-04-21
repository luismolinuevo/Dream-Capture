import { generateResponse } from "../services/openai.js";

export async function generateAdvice(req, res) {
  try {
    const dream = req.body.dream;
    if (dream) {
      const response = await generateResponse(dream);
      console.log("Here in controller" + response);
      if (response) {
        res.status(201).json({ result: response, success: true });
      } else {
        res.status(404).json({
          success: false,
          message: "Unable to generate response",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "No dream given",
      });
    }
  } catch (error) {
    console.log(`Error with OpenAI API request: ${error}`);
    res.status(500).json({
      error: {
        message: "An error occurred during your request.",
        success: false,
        error,
      },
    });
  }
}
