"use client";

import { UnsplashImage } from "@/app/models/unsplash-image";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Alert, Spinner } from "@/app/components/bootstrap"
import styles from "./SearchPage.module.css"

export default function SearchPage(){
    const [searchResults, setSearchResults] = useState<UnsplashImage[] |null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false);
    const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement> ) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const query = formData.get("query")?.toString().trim();

        if(query){
            try {
                setSearchResults(null);
                setSearchResultsLoadingIsError(false);
                setSearchResultsLoading(true);
                const response = await fetch("/api/search?query=" + query);
                const images: UnsplashImage[] = await response.json();
                setSearchResults(images);
            } catch (error){
                console.error(error);
                setSearchResultsLoadingIsError(true);
            } finally{
                setSearchResultsLoading(false);
            }
        }
    }

    return(
        <div>
            <Alert>
                Esta página obtiene datos del <strong>lado del cliente</strong>. 
                Para no filtrar las credenciales de la API, la solicitud se envía a un <strong>controlador de ruta</strong> NextJS que se ejecuta en el servidor. 
                Este controlador de ruta luego obtiene los datos de la API Unsplash y los devuelve al cliente.
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="search-input">
                    <Form.Label>Peticion de busqueda</Form.Label>
                    <Form.Control
                        name="query"
                        placeholder="Ej: cats, dogs, ..."
                    />
                </Form.Group>
                <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
                    Buscar
                </Button>
            </Form>
            <div className="d-fles flex-column align-items-center">
                {searchResultsLoading && <Spinner animation="border"/>}
                {searchResultsLoadingIsError && <p>Algo salio mal. Por favor vuelva intentarlo</p>}
                {searchResults?.length === 0 && <p>No se a encontrado. Intenta otra peticion</p>}
            </div>
            {
                searchResults &&
                    <>
                        {searchResults.map(image => (
                            <Image
                                src={image.urls.raw}
                                width={250}
                                height={250}
                                alt={image.description}
                                key={image.urls.raw}
                                className={styles.image}
                                />
                        ))}
                    </>
            }
        </div>
    );
}