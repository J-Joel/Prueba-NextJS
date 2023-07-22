"use client";
import { Button } from "react-bootstrap";
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
            <Button onClick={reset}>Intertar de nuevo</Button>
        </div>
    );
}