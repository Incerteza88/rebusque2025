import React from "react";

const STATUSES = {
    ESPERANDO: "esperando confirmación",
    EN_CURSO: "en curso",
    ENTREGADO: "entregado",
    COMPLETADO: "completado",
    DENEGADO: "denegado",
};

export default function JobsAction({ authState, statusLabel, onChange }) {

    const acceptJob = () => onChange(STATUSES.EN_CURSO);
    const denyJob = () => onChange(STATUSES.DENEGADO);
    const deliverJob = () => onChange(STATUSES.ENTREGADO);
    const confirmJob = () => onChange(STATUSES.COMPLETADO);

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