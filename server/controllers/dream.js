import Dream from "../models/dream.js";

const createDream = async (req, res) => {
  try {
    const newDream = new Dream({
      dream: req.body.dream,
    });

    const savedDream = await newDream.save();

    if(savedDream) {
        res.status(201).json({
            success: true,
            savedDream
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Unable to create dream"
        })
    }

  } catch (error) {
    console.error(error);
  }
};

export {createDream};