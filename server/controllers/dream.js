const createDream = async () => {
  try {
    const newDream = new Dream({
      dream: req.body.dream,
    });

    const savedDream = await newDream.save();

    res.status(201).json({
        success: true,
        savedDream
    });
  } catch (error) {
    console.error(error);
  }
};

export {createDream};