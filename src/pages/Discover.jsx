import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { WorkerCard } from "../components/WorkerCard.jsx";
import { useNavigate } from "react-router";
import { fullNormalize } from "../services/generalServices.jsx";

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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {workersList.map((w) => <WorkerCard key={w.id} id={w.id} />)}
            </div>
        </div>
    );
}; 