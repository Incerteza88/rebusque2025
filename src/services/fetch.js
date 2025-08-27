const backendURL = import.meta.env.VITE_BACKEND_URL;

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
