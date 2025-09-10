import React, { use, useState } from "react";
import { isWorkRated, rateWork, updateWorkStatus } from "../../services/fetch";
import { useNavigate } from "react-router";
import { starsVisual } from "../../services/generalServices";

const STATUSES = {
    ESPERANDO: "esperando confirmación",
    EN_CURSO: "en curso",
    ENTREGADO: "entregado",
    COMPLETADO: "completado",
    DENEGADO: "cancelado",
};

export default function JobsAction({ authState, statusLabel, onChange, work_id }) {

    const navigate = useNavigate();

    const [showRating, setShowRating] = useState(false);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const [rated, setRated] = useState(false);

    const acceptJob = () => updateWorkStatus(work_id, STATUSES.EN_CURSO).then(() => { onChange(STATUSES.EN_CURSO); navigate(0); });
    const denyJob = () => updateWorkStatus(work_id, STATUSES.DENEGADO).then(() => { onChange(STATUSES.DENEGADO); navigate(0); });
    const deliverJob = () => updateWorkStatus(work_id, STATUSES.ENTREGADO).then(() => { onChange(STATUSES.ENTREGADO); navigate(0); });
    const confirmJob = () => updateWorkStatus(work_id, STATUSES.COMPLETADO).then(() => { onChange(STATUSES.COMPLETADO); navigate(0); });

    if (authState == 2 && statusLabel == STATUSES.ESPERANDO) {
        return (
            <div className="d-flex gap-2">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={acceptJob}
                    aria-label="Aceptar trabajo"
                    title="Aceptar trabajo"
                >
                    Confirmar
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={denyJob}
                    aria-label="Denegar trabajo"
                    title="Denegar trabajo"
                >
                    Denegar
                </button>
            </div>
        );
    }

    let disabled = false;
    let text = statusLabel;
    let onClick = undefined;

    if (authState == 1) {
        if (statusLabel == STATUSES.ESPERANDO) {
            disabled = true;
        } else if (statusLabel == STATUSES.EN_CURSO) {
            disabled = true;
        } else if (statusLabel == STATUSES.ENTREGADO) {

            text = "Confirmar trabajo completado";
            onClick = confirmJob;
            disabled = false;
        } else if (statusLabel == STATUSES.COMPLETADO) {
            isWorkRated(work_id).then((result) => {
                setRated(result.reviewed);
            });

            if (rated) {
                text = "Trabajo completado";
                disabled = true;
            } else {
                text = "Calificar trabajo";
                disabled = false;
                onClick = () => {
                    setShowRating(true);
                };
            }
        }
    } else if (authState == 2) {
        if (statusLabel == STATUSES.EN_CURSO) {
            text = "Entregar trabajo";
            onClick = deliverJob;
            disabled = false;
        } else if (statusLabel == STATUSES.ENTREGADO) {
            text = "Trabajo entregado";
            disabled = true;
        } else if (statusLabel == STATUSES.COMPLETADO) {
            isWorkRated(work_id).then((result) => {
                setRated(result.reviewed);
            });

            if (rated) {
                text = "Trabajo completado";
                disabled = true;
            } else {
                text = "Calificar trabajo";
                disabled = false;
                onClick = () => {
                    setShowRating(true);
                };
            }
        } else if (statusLabel == STATUSES.DENEGADO) {   //PONERLO CON CLIENTE TAMBIEN
            text = "Trabajo denegado";
            disabled = true;
        }
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary w-100 text-truncate"
                disabled={disabled}
                onClick={onClick}
            >
                {text}
            </button>

            {showRating && (
                <div
                    className="modal fade show"
                    style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Califica el trabajo</h5>
                                <button type="button" className="btn-close" onClick={() => setShowRating(false)}></button>
                            </div>
                            <div className="modal-body text-start">

                                <div className="mb-3 d-flex flex-column text-center">
                                    <label htmlFor="ratingRange" className="form-label fs-2">{starsVisual(rating)}</label>
                                    <input type="range" className="form-range w-50 mx-auto" id="ratingRange" min="0" max="5" step="0.5"
                                        value={rating} onChange={(e) => setRating(parseFloat(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Comentario</label>
                                    <textarea rows={5} className="form-control" id="exampleInputPassword1" placeholder="Escribe aquí tu comentario" value={comment} onChange={(e) => setComment(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary rounded-pill" onClick={() => setShowRating(false)}>
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-primary rounded-pill" onClick={() => { setShowRating(false); rateWork(work_id, rating, comment); navigate(0); }}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>)
}