
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
    const resp = await fetch(`${backendURL}/signup`, {
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
    console.log(credentialsUser)
    const resp = await fetch(`${backendURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentialsUser),

    });
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.msg || `Login error (${resp.status})`);
    }
    const data = await resp.json();
    console.log(data.user)
    if (data?.access_token) localStorage.setItem("accessToken", data.access_token);
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const sendWork = async () => {
  try {
    const resp = await fetch(`${backendURL}/auth/dashboard`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });


    const data = await resp.json();
    return data;

  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getStatus = async () => {
  try {
    const resp = await fetch(`${backendURL}/client/contracts`);
    if(!resp.ok){
      throw new Error("Error al obtener datos", resp.status);
    }
    const data = await resp.json()
    console.log(data)
  } catch (error) {
    console.error("Error:", error);
  }

}

