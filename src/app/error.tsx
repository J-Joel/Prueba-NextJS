"use client";

// Error de cargas, datos, etc
interface ErrorPageProps {
    error: Error,
    reset: () => void,
}

export default function Error({error,reset}: ErrorPageProps){
    return(
        <div>
            <h1>¡¡Error!!</h1>
            <p>Algo salio mal</p>
            <button className="btn btn-error btn-block" onClick={reset}>Intertar de nuevo</button>
        </div>
    );
}