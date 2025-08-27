const backendURL = "http://127.0.0.1:3001";

export const auth = async (formData, endpoint) => {
  try {
    const resp = await fetch(`${backendURL}/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!resp.ok) {
      throw new Error("Error " + endpoint);
    }
    const data = resp.json;
    return data;
  } catch (error) {
    console.log(error);
  }
};
