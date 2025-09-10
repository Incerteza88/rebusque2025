import useGlobalReducer from "../../hooks/useGlobalReducer"
import defaultPhoto from "../../assets/img/default_user.jpg"

export const PanelSideBarTitle = () => {

    const { store } = useGlobalReducer();
    const user = JSON.parse(store.isAuth)
    const userImage = user ? user.photo_url != "" ? user.photo_url : defaultPhoto : defaultPhoto
    const userName = user ? user.name : ""
    const userLastName = user ? user.last_name : ""

    return (
        <>
            <h5 className="offcanvas-title d-flex w-100 mb-3" id="offcanvasExampleLabel">
                <img src={userImage === null ? defaultPhoto : userImage} width="60" height="60" className="rounded-5 border border-dark"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultPhoto;
                    }} />
                <div className="ms-2 inline-limit">
                    {userName}
                    <p className="fw-semibold mb-0 fs-6 inline-limit">{userLastName}</p>
                </div>
            </h5>
        </>
    )
}