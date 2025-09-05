import React, { use } from "react";
import { updateWorkStatus } from "../../services/fetch";
import { useNavigate } from "react-router";

const STATUSES = {
    ESPERANDO: "esperando confirmación",
    EN_CURSO: "en curso",
    ENTREGADO: "entregado",
    COMPLETADO: "completado",
    DENEGADO: "cancelado",
};

export default function JobsAction({ authState, statusLabel, onChange, work_id }) {

    const navigate = useNavigate();

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
            text = "Trabajo completado";
            disabled = true;
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
            text = "Trabajo completado";
            disabled = true;
        } else if (statusLabel == STATUSES.DENEGADO) {   //PONERLO CON CLIENTE TAMBIEN
            text = "Trabajo denegado";
            disabled = true;
        }
    }

    return (
        <button
            type="button"
            className="btn btn-primary w-100 text-truncate"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}