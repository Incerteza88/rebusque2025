import useGlobalReducer from "../../hooks/useGlobalReducer"

export const PanelSideBarTitle = () => {

    const { store } = useGlobalReducer();
    const user = JSON.parse(store.isAuth)
    const userImage = user ? user.photo_url : null
    const userName = user ? user.name : ""
    const userLastName = user ? user.last_name : ""

    return (
        <>
            <h5 className="offcanvas-title d-flex w-100 mb-3" id="offcanvasExampleLabel">
                <img src={userImage === null ? "src/assets/img/default_user.jpg" : userImage} width="60" height="60" className="rounded-5 border border-dark"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "src/assets/img/default_user.jpg";
                    }} />
                <div className="ms-2 inline-limit">
                    {userName}
                    <p className="fw-semibold mb-0 fs-6 inline-limit">{userLastName}</p>
                </div>
            </h5>
        </>
    )
}