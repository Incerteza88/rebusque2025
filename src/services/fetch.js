
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


const backendURL = "https://c8gm3skn-3001.uks1.devtunnels.ms";

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
export const loginUser = async (credentialsUser) => {
  try {
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
    if (data?.access_token) localStorage.setItem( "token", data.access_token);
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
      body: JSON.stringify({  }), 
    });

    
    const data = await resp.json();
    return data;

  } catch (error) {  
    console.error("Login error:", error);
    throw error;
  }
};

