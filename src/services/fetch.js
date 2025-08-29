
// export const auth = async (formData, endpoint) => {
//   try {
//     const resp = await fetch(`${backendURL}/api/${endpoint}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     if (!resp.ok) {
//       const err = await resp.json().catch(() => ({}));
//       throw new Error(err.msg || `Error ${endpoint} (${resp.status})`);
//     }
//     const data = await resp.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };


const backendURL = "http://127.0.0.1:3001";

export const registerUser = async (payload) => {
  try {
    const resp = await fetch(`${backendURL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.msg || `Register error (${resp.status})`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

export const loginUser = async (credentialsUser) => {
  try {
    const resp = await fetch(`${backendURL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentialsUser),
    });
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.msg || `Login error (${resp.status})`);
    }
    const data = await resp.json();
    if (data?.access_token) localStorage.setItem("accessToken", data.access_token);
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
