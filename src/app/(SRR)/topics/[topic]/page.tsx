import { UnsplashImage } from "@/app/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Alert } from "@/app/components/bootstrap";
import { Metadata } from "next";
//export const revalidate = 0;

interface PageProps {
    params: { topic: string },
    //searchParams: { [key: string]: string | string[] | undefined}
}

export function generateMetadata( { params: { topic } }: PageProps): Metadata {
    return{
        title: topic + " - NextJS"
    };
}

export function generateStaticParams() {
    return ["cats","dogs","birds"].map(topic => ({ topic }));
}

export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const images: UnsplashImage[] = await response.json();
    
    return(
        <div>
            <Alert>
                Esta página usa <strong>generateStaticParams</strong> para representar y almacenar en caché páginas estáticas en el momento de la compilación, aunque la URL tenga un parámetro dinámico. 
                Las páginas que no están incluidas en generateStaticParams se obtendrán y procesarán en el primer acceso y luego <strong>se almacenarán en caché para solicitudes posteriores</strong> (esto se puede deshabilitar).
            </Alert>
            <h1>{topic}</h1>
            {
                images.map(image => (
                    <Image
                        src={image.urls.raw}
                        width={250}
                        height={250}
                        alt={image.description}
                        key={image.urls.raw}
                        className={styles.image}
                    />
                ))
            }
        </div>
    );
}
