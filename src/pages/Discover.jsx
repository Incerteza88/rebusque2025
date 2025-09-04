import React, { use, useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router";
import { fullNormalize, starsVisual } from "../services/generalServices.jsx";
import { CategoryCard } from "../components/CategoryCard.jsx";
import { getCategories, getServices } from "../services/fetch.js";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { func } from "prop-types";

export const Discover = () => {

    const { store, dispatch } = useGlobalReducer()

    const [searchValue, setSearchValue] = useState(store.searching)
    const [servicesList, setServicesList] = useState(store.services)
    const [sortedServices, setSortedServices] = useState([])

    const [sortBy, setSortBy] = useState("default")

    const [maxPrice, setMaxPrice] = useState(100)

    // const [distanceRange, setDistanceRange] = useState(10)
    const [catRadio, setCatRadio] = useState(true)
    const [checkedCategs, setCheckedCategs] = useState([])
    const [ratingRange, setRatingRange] = useState(0)
    const [priceRange, setPriceRange] = useState(maxPrice)

    async function handleSubmit(e) {
        e.preventDefault()

        dispatch({ type: 'searchThis', payload: searchValue })

    }

    function filterSearch() {
        getServices(searchValue, checkedCategs, "", "", "").then((servs) => dispatch({ type: 'setServices', payload: servs }))
    }

    function resetFilters() {
        setSearchValue("")
        dispatch({ type: 'searchThis', payload: "" })
        setCheckedCategs([])
        setSortBy("default")
        // setDistanceRange(10)
        setRatingRange(0)
        setPriceRange(maxPrice)
    }

    function sortServices() {
        // console.log(sortBy);
        let sorted = []

        switch (sortBy) {
            case "rating_up":
                sorted = [...servicesList].sort((a, b) => b.rating - a.rating);
                break;
            case "rating_down":
                sorted = [...servicesList].sort((a, b) => a.rating - b.rating);
                break;
            case "price_up":
                sorted = [...servicesList].sort((a, b) => b.price - a.price);
                break;
            case "price_down":
                sorted = [...servicesList].sort((a, b) => a.price - b.price);
                break;
            default:
                sorted = servicesList;
        }

        setSortedServices(sorted)

    }

    useEffect(() => () => {
        getCategories().then((cats) => dispatch({ type: 'setCategories', payload: cats }))
        getServices(searchValue, checkedCategs, "", "", "").then((servs) => dispatch({ type: 'setServices', payload: servs }))
    }, [])
    useEffect(() => filterSearch(), [store.searching, checkedCategs])
    useEffect(() => setServicesList(store.services), [store.services])

    useEffect(() => sortServices(), [sortBy, servicesList]);

    useEffect(() => {
        checkedCategs.length === 0 ? setCatRadio(true) : setCatRadio(false)
    }, [checkedCategs]);

    useEffect(() => { catRadio ? setCheckedCategs([]) : "" }, [catRadio]);
    useEffect(() => {
        let max = 0
        store.services.map((s) => s.price > max ? max = s.price : "")
        setMaxPrice(max)
        setPriceRange(max)
    }, [store.services]);




    return (
        <div className="text-center mt-5 container">
            <form className="d-flex w-100 mb-3" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2 rounded-pill border border-primary" type="search" placeholder="Buscar un servicio" aria-label="Search"
                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="btn btn-dark btn-lg me-2 rounded-pill" type="submit">Buscar</button>
            </form>
            <div className="navbar navbar-expand-lg d-flex w-100 mb-3">
                <div className="mx-auto">
                    <div className="py-2 px-3 rounded-pill text-bg-primary d-flex align-items-center">
                        <p className="my-1 inline-limit">Filtros de búsqueda</p>
                    </div>
                </div>
                <div className="mx-1 py-1 px-3 text-bg-primary rounded-5 d-flex w-100">
                    <div className="row cols-2 mx-auto h-100 d-flex align-items-center">
                        <div className="col d-flex px-1" style={{ minWidth: "fit-content", maxWidth: "fit-content" }}>
                            <p className="col my-auto px-1 text-nowrap">Ordenar por:</p>
                            <select id="sortBy" className="col form-select rounded-pill mx-auto text-nowrap" onChange={(e) => setSortBy(e.target.value)}>
                                <option value="default">Por defecto</option>
                                <option value="rating_up">Valoración ↑</option>
                                <option value="rating_down">Valoración ↓</option>
                                {/* <option value="3">Distancia ↑</option>
                                <option value="4">Distancia ↓</option> */}
                                <option value="price_up">Precio ↑</option>
                                <option value="price_down">Precio ↓</option>
                            </select>
                        </div>
                        <div className="col d-flex px-1">
                            <p className="my-auto px-1 text-nowrap">Categorías:</p>
                            <div className="px-1 dropdown-center px-1 ">
                                <button className="form-select rounded-pill w-auto mx-auto" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                                >
                                    Mostrar...
                                </button >
                                <ul className="dropdown-menu p-2" >
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="radioDefault" id="allChecked" checked={catRadio}
                                                onChange={(e) => setCatRadio(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="allChecked">
                                                Todas
                                            </label>
                                        </div>
                                    </li>
                                    {store.categories.map((cat) =>
                                        <li key={cat.id}>
                                            <div className="form-check" >
                                                <input className="form-check-input" type="checkbox" value={cat.id} id={cat.id + "_checked"}
                                                    checked={checkedCategs.includes(cat.id)} onChange={(e) => e.target.checked ?
                                                        setCheckedCategs([...checkedCategs, cat.id])
                                                        :
                                                        setCheckedCategs(checkedCategs.filter((c) => c !== cat.id))
                                                    }
                                                />
                                                <label className="form-check-label text-nowrap" htmlFor={cat.id + "_checked"}>
                                                    {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                                                </label>
                                            </div>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col dropdown-center px-1">
                            < button className="form-select rounded-pill w-auto mx-auto" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                            >
                                Distancia
                            </button >
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <label htmlFor="distanceRange" className="form-label">{distanceRange} km máximo</label>
                                    <input type="range" className="form-range" id="distanceRange" value={distanceRange} onChange={(e) => setDistanceRange(e.target.value)} />
                                </li>
                            </ul>
                        </div> */}
                        <div className="col dropdown-center px-1">
                            < button className="form-select rounded-pill w-auto mx-auto" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                            >
                                Valoración
                            </button >
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <label htmlFor="ratingRange" className="form-label">{starsVisual(ratingRange)}</label>
                                    <input type="range" className="form-range" id="ratingRange" min="0" max="5" step="0.5"
                                        value={ratingRange} onChange={(e) => setRatingRange(parseFloat(e.target.value))}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col dropdown-center px-1">
                            < button className="form-select rounded-pill w-auto mx-auto" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                            >
                                Precio
                            </button >
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <label htmlFor="distanceRange" className="form-label">Hasta {priceRange} €</label>
                                    <input type="range" className="form-range" id="distanceRange" step={100} max={maxPrice} value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <button className="btn btn-dark py-2 rounded-pill text-nowrap" onClick={resetFilters}><p className="my-1">Reiniciar filtros</p></button>
                </div>
            </div>
            <div className="d-flex my-2">
                <h3 className="text-nowrap">Categorías</h3>
                <div className="text-bg-dark ms-2 w-100 align-self-center" style={{ height: "1px" }}> </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-1 flex-nowrap hide-scroll overflow-auto">
                {store.categories.map((cat) => <CategoryCard key={cat.id} id={cat.id} />)}
            </div>
            <div className="d-flex mb-2 mt-4">
                <h3 className="text-nowrap">Servicios recomendados</h3>
                <div className="text-bg-dark ms-2 w-100 align-self-center" style={{ height: "1px" }}> </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                {sortedServices.length >= 1 ?
                    sortedServices.map((s) => <ServiceCard key={s.id} id={s.id} />)
                    :
                    <div className="text-center my-5 w-100">
                        <h4>No se han encontrado resultados para "{fullNormalize(store.searching)}"</h4>
                    </div>
                }
            </div >
        </div >
    );
}; 