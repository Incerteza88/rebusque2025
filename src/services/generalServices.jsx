import useGlobalReducer from "../hooks/useGlobalReducer";

export function fullNormalize(string) {
    return string.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
}

export function starsVisual(rating) {
    switch (rating) {
        case 0:

            return (
                <span>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 0.5:

            return (
                <span>
                    <i className="bi bi-star-half text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 1:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 1.5:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 2:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 2.5:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 3:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 3.5:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 4:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                </span>
            );
        case 4.5:

            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                </span>
            );

        default:
            return (
                <span>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                </span>
            );
    }
}

//declaracion de funcion para validar la autenticacion
export async function validAuth() {
    let token = localStorage.getItem("token")
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`)

    const requestOptions = {
        method: "GET",
        headers: myHeaders
    };
    // try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/valid-auth", requestOptions);

        return response
    // } catch (error) {
    //     console.error(error);
    // };
}