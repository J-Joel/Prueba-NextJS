import { Spinner } from "@/app/components/bootstrap"

// Pagina de carga
export default function Loading(){
    return(
        <Spinner animation="border" className="d-block m-auto"/>
    );
}