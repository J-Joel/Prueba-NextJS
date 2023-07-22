import { UnsplashImage } from "@/app/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/app/components/bootstrap";

export const metadata = {
    title: "Static Fetching - NextJS",
}

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align-items-center">
            <Alert>
                Esta página <strong>obtiene y almacena datos en caché en el momento de la compilación</strong>. 
                Aunque la api unsplash siempre devuelve una nueva imagen, vemos la misma imagen después de actualizar la página hasta que volvemos a copiar el proyecto
            </Alert>
            <Image 
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description}
                className="rounded shadow mv-100 h-100"
            />
            by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
        </div>
    );
}