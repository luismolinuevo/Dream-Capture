export const createDream = async (data) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dream`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.error(
        "Create dream request request failed. Response status:",
        response.status
      );
      const errorData = await response.json();
      console.error("Error details:", errorData);

      throw new Error("Create dream request failed");
    }

    // If the response is successful, return the data (if needed)
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Log more details about the error
    console.error("Error during creating dream:", error);
    throw error;
  }
};

export const updatePost = async (data, dream_id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dreams/${dream_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.error(
        "Edit dream request request failed. Response status:",
        response.status
      );
      const errorData = await response.json();
      console.error("Error details:", errorData);

      throw new Error("Edit dream request failed");
    }

    // If the response is successful, return the data (if needed)
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Log more details about the error
    console.error("Error during editing dream:", error);
    throw error;
  }
};

export const getAllDreams = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dreams`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        //   Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const res = await response.json();

      return res;
    }
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
