export const initialStore = () => {
  return {
    authState: 0
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

    default:
      throw Error('Unknown action.');
  }
}