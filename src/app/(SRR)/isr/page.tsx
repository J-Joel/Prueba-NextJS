import { UnsplashImage } from "@/app/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/app/components/bootstrap";

export const metadata = {
    title: "ISR Fetching - NextJS",
}

// Cada vez que se actualice la pagina se borrara lo almacenado en el cache (?) despues de 30 seg
export const revalidate = 15;

export default async function Page() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY,
    {
        //next: { revalidate: 15 }
    }
    );
    const image: UnsplashImage = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return(
        <div className="d-flex flex-column align-items-center">
            <Alert>
                Esta página utiliza <strong>regeneración estática incremental</strong>.
                Se obtiene una nueva imagen cada 15 segundos (después de actualizar la página) y luego se sirve desde el caché durante ese tiempo.
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