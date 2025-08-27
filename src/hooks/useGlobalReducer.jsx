import { useContext, useReducer, createContext, useState } from "react";
import storeReducer, { initialStore } from "../store"

const StoreContext = createContext()

export function StoreProvider({ children }) {
   
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    const [employeeAccount, setEmployeeAccount] = useState(false)


    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}