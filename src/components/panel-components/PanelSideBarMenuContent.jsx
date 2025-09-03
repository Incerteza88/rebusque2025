
export const options = ["Trabajos", "Mensajes", "Servicios", "Perfil", "Cerrar sesión"]

export const PanelSideBarMenuContent = () => {


    return (
        <>

            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {options.map((option, index) => {
                    const lowerOption = option.toLowerCase()
                    return (
                        <button key={index} className={`nav-link ${index == 0 && "active"}`}
                            id={`v-pills-${lowerOption}-tab`}
                            data-bs-toggle="pill"
                            data-bs-target={`#v-pills-${lowerOption}`}
                            type="button"
                            role="tab"
                            aria-controls={`v-pills-${lowerOption}`}
                            aria-selected="true">
                            {option}
                        </button>
                    )
                })}

            </div>
        </>
    )
}

