const backendURL = import.meta.env.VITE_BACKEND_URL || "https://c8gm3skn-3001.uks1.devtunnels.ms";

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

//declaracion de funcion para validar la autenticacion
export async function validAuth() {
  let token = localStorage.getItem("access_token")
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  try {
    const response = await fetch(backendURL + "/valid-auth", requestOptions);

    return response
  } catch (error) {
    console.error(error)
  }
}

export async function getProviderWorks() {
  let token = localStorage.getItem("access_token")
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  try {
    const response = await fetch(backendURL + "/provider/contracts", requestOptions);

    return response
  } catch (error) {
    console.error(error)
  }
}

export async function getClientWorks() {
  let token = localStorage.getItem("access_token")
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  try {
    const response = await fetch(backendURL + "/client/contracts", requestOptions);

    return response
  } catch (error) {
    console.error(error)
  }
}

export async function addWork(service_id) {
  let token = localStorage.getItem("access_token")
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)
  myHeaders.append("Content-Type", "application/json")

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ service_id })
  };
  try {
    const response = await fetch(backendURL + "/contracts", requestOptions);
    return response
  } catch (error) {
    console.error(error)
  }
}

export async function updateWorkStatus(work_id, newStatus) {
  let token = localStorage.getItem("access_token")
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)
  myHeaders.append("Content-Type", "application/json")
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({ status: newStatus })
  };
  try {
    const response = await fetch(backendURL + `/contracts/${work_id}/status`, requestOptions);
    return response
  } catch (error) {
    console.error(error)
  }
}

//obtener los servicios desde el backend
export async function getServices(search, categories, min_price, max_price, rating) {
  categories ? categories = categories.join("-") : ""

  // preparo los parametros para la url
  let params = new URLSearchParams({
    search: search,
    categories: categories,
    min_price: min_price,
    max_price: max_price,
    min_rating: rating
  }).toString()

  try {
    const response = await fetch(backendURL + "/search?" + params);
    const data = await response.json()

    // console.log(data);

    return data
  } catch (error) {
    console.error(error)
  }
}

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
    // console.log(credentialsUser)
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
    // console.log(data.user)
    if (data?.access_token) localStorage.setItem("access_token", data.access_token);
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
    if (!resp.ok) {
      throw new Error("Error al obtener datos", resp.status);
    }
    const data = await resp.json()
    // console.log(data)
  } catch (error) {
    console.error("Error:", error);
  }

}

export const rateWork = async (work_id, rating, comment) => {

  let token = localStorage.getItem("access_token")
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)
  myHeaders.append("Content-Type", "application/json")
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ contract_id: work_id, rating: rating, comment: comment })
  };
  try {
    const resp = await fetch(`${backendURL}/reviews`, requestOptions);
    if (!resp.ok) {
      throw new Error("Error al calificar el trabajo", resp.status);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const isWorkRated = async (work_id) => {
  try {
    const resp = await fetch(`${backendURL}/review/contract/${work_id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}