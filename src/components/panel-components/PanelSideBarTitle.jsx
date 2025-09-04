import useGlobalReducer from "../../hooks/useGlobalReducer"

export const PanelSideBarTitle = () =>{

const {store} = useGlobalReducer();
const user = JSON.parse(store.isAuth)

    return(
        <>
        <h5 className="ps-2 mb-4">{user.name} </h5>
        </>
    )
}