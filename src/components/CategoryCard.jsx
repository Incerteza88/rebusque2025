import { Link } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CategoryCard = ({ id }) => {

    const { store, dispatch } = useGlobalReducer()

    let category = store.categories[id]

    return (
        <div className="col">
            <div className="col btn border border-primary rounded-4 p-0 position-relative">
                <img src={"src/assets/categoriesImages/" + id + ".jpg"} className="rounded-4 p-0 w-100" />
                <h2 className="position-absolute top-50 start-50 translate-middle"
                    style={{
                        textShadow: "2px 0 30px white, -2px 0 30px white, 0 2px 30px white, 0 -2px 30px white, " +
                            "2px 2px 30px white, -2px -2px 30px white, 2px -2px 30px white, -2px 2px 30px white"
                    }}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h2>
            </div>
        </div>
    )
}