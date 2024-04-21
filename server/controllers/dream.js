import Dream from "../models/dream.js";

//Create a dream
const createDream = async (req, res) => {
  try {
    const newDream = new Dream({
      dream: req.body.dream,
    });

    const savedDream = await newDream.save();

    if (savedDream) {
      res.status(201).json({
        success: true,
        savedDream,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Unable to create dream",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", error, success: false });
  }
};

//Edit a dream
const editDream = async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);

    if (!dream) {
      return res.status(404).json({ error: "Dream not found", success: false });
    }

    dream.dream = req.body.dream;

    const updatedDream = await dream.save();

    return res.status(200).json({
      success: true,
      message: "Successfully edit dream",
      updatedDream,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", error, success: false });
  }
};

//get all dreams(for user in the future)
const getDreams = async (req, res) => {
  try {
    const dreams = await Dream.find();

    if (dreams) {
      res.status(200).json({
        success: true,
        message: "Successfully fetched dreams",
        dreams
      });
    } else {
      res.status(204).json({
        success: false,
        message: "No post",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", error, success: false });
  }
};

export { createDream, editDream, getDreams };
