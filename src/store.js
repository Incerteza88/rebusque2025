export const initialStore=()=>{
  return{
    prueba: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    // case 'set_hello':
    //   return {
    //     ...store,
    //     message: action.payload
    //   };
      
    case 'prueba':

      return {
        ...store,
        prueba: action.payload
      };


    // default:
    //   throw Error('Unknown action.');
  }    
}