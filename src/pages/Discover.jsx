import React, { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { WorkerCard } from "../components/WorkerCard.jsx";
import { useNavigate } from "react-router";

export const Discover = () => {

    const { store, dispatch } = useGlobalReducer()

    const [searchValue, setSearchValue] = useState(store.searching)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        dispatch({ type: 'searchThis', payload: searchValue })

        window.location.reload()

    }

    return (
        <div className="text-center mt-5 container">
            <form className="d-flex w-100 mb-3" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2 rounded-5 border border-primary" type="search" placeholder="Buscar un servicio" aria-label="Search"
                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="btn btn-dark btn-lg me-2 rounded-5" type="submit">Buscar</button>
            </form>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {store.workers.map((w) => <WorkerCard key={w.id} id={w.id} />)}
            </div>
        </div>
    );
}; 