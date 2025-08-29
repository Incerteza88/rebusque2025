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


export async function getCategories() {
    try {
        let response = await fetch(`${backendURL}/categories`)
        let data = await response.json()
        if (response.ok) {
            // data = data.map((item) => { return { ...item, uid: item.url.match(/(\d+)/)[0], page: "/ships/" + item.url.match(/(\d+)/)[0] } })
            localStorage.setItem("categories", JSON.stringify(data))
            return (data)
        }
    }
    catch (error) {
        console.log(error);
    }
}