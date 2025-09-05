import useGlobalReducer from "../hooks/useGlobalReducer";

export function fullNormalize(string) {
    return string.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
}

export function starsVisual(rating) {
    const x = parseFloat(rating)
    switch (true) {
        case x < 0.5:

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
        case x < 1:

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
        case x < 1.5:

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
        case x < 2:

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
        case x < 2.5:

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
        case x < 3:

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
        case x < 3.5:

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
        case x < 4:

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
        case x < 4.5:

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
        case x < 5:

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
