export const initialStore = () => {
  return {
    authState: localStorage.getItem("authState") == null ? 0 : parseInt(localStorage.getItem("authState")), // 0 = no logueado, 1 = user, 2 = worker
    searching: "",
    // isLogin: localStorage.getItem("access_token") ? true : false,
    // localStorage.removeItem()  => para el logOut
    isAuth: localStorage.getItem("isAuth") ? localStorage.getItem("isAuth") : null,
    estadoModal: false,
    trabajo: "",
    categories: [],
    services: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "setCategories":
      return {
        ...store,
        categories: action.payload,
      };

    case "setServices":
      return {
        ...store,
        services: action.payload,
      };

    case "LOGIN_USER":
      localStorage.setItem("authState", 1)
      return {
        ...store,
        authState: 1,
      };

    case "LOGIN_WORKER":
      localStorage.setItem("authState", 2)
      return {
        ...store,
        authState: 2,
      };

    case "LOGOUT":
      localStorage.removeItem("authState")
      localStorage.removeItem("access_token")
      localStorage.removeItem("isAuth")
      return {
        ...store,
        authState: 0,
        isLogin: false,
        isAuth: null,
      };

    case "searchThis":
      return {
        ...store,
        searching: action.payload,
      };

    case "is_auth":
      localStorage.setItem("isAuth", action.payload)
      return {
        ...store,
        isAuth: action.payload
      }

    case 'stateModal':
      return {
        ...store,
        estadoModal: action.payload
      }
    case 'saveJob':
      return {
        ...store,
        trabajo: action.payload
      }

      return {
        ...store,
        searching: action.payload,
      };


    default:
      throw Error('Unknown action.');
  }
}