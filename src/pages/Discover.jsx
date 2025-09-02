import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { WorkerCard } from "../components/WorkerCard.jsx";
import { Link, useNavigate } from "react-router";
import { fullNormalize, starsVisual } from "../services/generalServices.jsx";
import { CategoryCard } from "../components/CategoryCard.jsx";
import { getCategories } from "../services/fetch.js";

export const Discover = () => {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    // const sortedCategories = store.categories.map((cat, indexCat) => store.workers
    //     .filter((worker) => worker.works.includes(indexCat))
    //     .map((catWorker) => catWorker = indexCat))
    //     .toSorted((a, b) => b.length - a.length)
    //     .map((catNum) => catNum = { category: store.categories[catNum[0]], workersCount: catNum.length })


    const [searchValue, setSearchValue] = useState(store.searching)
    const [workersList, setWorkersList] = useState(store.workers)

    const [distanceRange, setDistanceRange] = useState(10)
    const [ratingRange, setRatingRange] = useState(4)
    const [priceRange, setPriceRange] = useState(20)


    // const tagsLimpieza = ["limpio", "sucio"]



    async function handleSubmit(e) {
        e.preventDefault()

        dispatch({ type: 'searchThis', payload: searchValue })

        navigate("/discover")

    }

    function filterSearch() {
        let workers = []
        if (searchValue != "") {
            store.workers.map((worker, index) => {
                let searchableWorker = { ...worker, image: "", works: worker.works.map((w) => store.categories[w]) }
                let showWorker = false
                Object.values(searchableWorker).map((value) => {
                    if (fullNormalize(value.toString()).includes(fullNormalize(searchValue))) {
                        showWorker = true;
                        return;
                    }
                })
                if (showWorker) {
                    workers.push(worker)
                }
            })

            setWorkersList(workers)
        }
        else {

            setWorkersList(store.workers)
        }
    }
    useEffect(() => () => getCategories().then((cats) => dispatch({ type: 'setCategories', payload: cats })), [])
    useEffect(() => filterSearch(), [store.searching])

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
                            <select id="orderBy" className="col form-select rounded-pill mx-auto text-nowrap">
                                <option value="0">Por defecto</option>
                                <option value="1">Valoración ↑</option>
                                <option value="2">Valoración ↓</option>
                                <option value="3">Distancia ↑</option>
                                <option value="4">Distancia ↓</option>
                                <option value="5">Precio ↑</option>
                                <option value="6">Precio ↓</option>
                            </select>
                        </div>
                        <div className="col d-flex px-1">
                            <p className="my-auto px-1 text-nowrap">Categoría:</p>
                            <div className="px-1 dropdown-center px-1 ">
                                <button className="form-select rounded-pill w-auto mx-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Mostrar...
                                </button >
                                <ul className="dropdown-menu p-2" >
                                    <li>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                                            <label className="form-check-label" htmlFor="radioDefault2">
                                                Todas
                                            </label>
                                        </div>
                                    </li>
                                    {store.categories.map((cat) =>
                                        <li key={cat.id}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                                <label className="form-check-label text-nowrap" htmlFor="checkDefault">
                                                    {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                                                </label>
                                            </div>
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="col dropdown-center px-1">
                            < button className="form-select rounded-pill w-auto mx-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Distancia
                            </button >
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <label htmlFor="distanceRange" className="form-label">{distanceRange} km máximo</label>
                                    <input type="range" className="form-range" id="distanceRange" value={distanceRange} onChange={(e) => setDistanceRange(e.target.value)} />
                                </li>
                            </ul>
                        </div>
                        <div className="col dropdown-center px-1">
                            < button className="form-select rounded-pill w-auto mx-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Valoración
                            </button >
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <label htmlFor="ratingRange" className="form-label">{starsVisual(ratingRange)}</label>
                                    <input type="range" className="form-range" id="ratingRange" min="0" max="5" step="0.5" value={ratingRange} onChange={(e) => setRatingRange(parseFloat(e.target.value))} />
                                </li>
                            </ul>
                        </div>
                        <div className="col dropdown-center px-1">
                            < button className="form-select rounded-pill w-auto mx-auto" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Precio
                            </button >
                            <ul className="dropdown-menu p-2">
                                <li>
                                    <label htmlFor="distanceRange" className="form-label">Hasta {priceRange} €</label>
                                    <input type="range" className="form-range" id="distanceRange" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <button className="btn btn-dark py-2 rounded-pill text-nowrap"><p className="my-1">Reiniciar filtros</p></button>
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
                <h3 className="text-nowrap">Profesionales recomendados</h3>
                <div className="text-bg-dark ms-2 w-100 align-self-center" style={{ height: "1px" }}> </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                {workersList.map((w) => <WorkerCard key={w.id} id={w.id} />)}
            </div>
        </div >
    );
}; 