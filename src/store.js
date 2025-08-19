export const initialStore=()=>{
  return{
    prueba: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'prueba':

      return {
        ...store,
        prueba: action.payload
      };

  }    
}