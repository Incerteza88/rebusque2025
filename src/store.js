export const initialStore = () => {
  return {
    authState: 0,
    searching: "",
    isLogin: localStorage.getItem("accessToken") ? true : false,
    // localStorage.removeItem()  => para el logOut
    isAuth: null,
    estadoModal: false,
    trabajo: ""
    
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "LOGIN_USER":
      return {
        ...store,
        authState: 1,
      };

    case "LOGIN_WORKER":
      return {
        ...store,
        authState: 2,
      };

    case "LOGOUT":
      return {
        ...store,
        authState: 0,
      };

    case "searchThis":
      console.log(action.payload);

    case "is_auth" : 
    return{
      ...store,
      isAuth: action.payload
    }
    
    case 'stateModal':
      return{
        ...store,
        estadoModal : action.payload
      }
      case 'saveJob':
      return{
        ...store,
        trabajo : action.payload
      }

      return {
        ...store,
        searching: action.payload,
      };


    default:
      throw Error('Unknown action.');
  }
}