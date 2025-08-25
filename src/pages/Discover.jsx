import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { WorkerCard } from "../components/WorkerCard.jsx";
import { useNavigate } from "react-router";
import { fullNormalize } from "../services/generalServices.jsx";
import { CategoryCard } from "../components/CategoryCard.jsx";

export const Discover = () => {

    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    const sortedCategories = store.categories.map((cat, indexCat) => store.workers
        .filter((worker) => worker.works.includes(indexCat))
        .map((catWorker) => catWorker = indexCat))
        .toSorted((a, b) => b.length - a.length)
        .map((catNum) => catNum = { category: store.categories[catNum[0]], workersCount: catNum.length })

    console.log(sortedCategories);

    const [searchValue, setSearchValue] = useState(store.searching)
    const [workersList, setWorkersList] = useState(store.workers)

    const tagsLimpieza = ["limpio", "sucio"]

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

    useEffect(() => filterSearch(), [store.searching])

    return (
        <div className="text-center mt-5 container">
            <form className="d-flex w-100 mb-3" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2 rounded-5 border border-primary" type="search" placeholder="Buscar un servicio" aria-label="Search"
                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="btn btn-dark btn-lg me-2 rounded-5" type="submit">Buscar</button>
            </form>
            <div className="d-flex w-100 mb-3" role="search" onSubmit={handleSubmit}>
                <div className="form-control me-2 rounded-5 text-bg-primary d-flex">
                    <div className="d-flex align-items-center">
                        <p className="my-0 text-nowrap">Filtros de búsqueda</p>
                        <div className="ms-3 border border-light h-100"></div>
                    </div>
                    <div className="mx-auto h-100 d-flex align-items-center">
                        <p className="my-0 mx-3 text-nowrap">Filtro 1</p>
                        <p className="my-0 mx-3 text-nowrap">Filtro 2</p>
                        <p className="my-0 mx-3 text-nowrap">Filtro 3</p>
                        <p className="my-0 mx-3 text-nowrap">Filtro 4</p>
                    </div>
                </div>
                <button className="btn btn-dark btn-lg me-2 rounded-5 text-nowrap">Reiniciar filtros</button>
            </div>
            <div className="d-flex my-2">
                <h3 className="text-nowrap">Categorías</h3>
                <div className="text-bg-dark ms-2 w-100 align-self-center" style={{ height: "1px" }}> </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-1 flex-nowrap hide-scroll overflow-auto">
                {sortedCategories.map((cat) => <CategoryCard key={store.categories.indexOf(cat.category)} id={store.categories.indexOf(cat.category)} />)}
            </div>
            <div className="d-flex mb-2 mt-4">
                <h3 className="text-nowrap">Profesionales recomendados</h3>
                <div className="text-bg-dark ms-2 w-100 align-self-center" style={{ height: "1px" }}> </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                {workersList.map((w) => <WorkerCard key={w.id} id={w.id} />)}
            </div>
        </div>
    );
}; 