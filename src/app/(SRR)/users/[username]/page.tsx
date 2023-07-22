import { UnsplashUser } from "@/app/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
//import { cache } from "react";
import { Alert } from "@/app/components/bootstrap";

interface PageProps {
    params: { username: string },
}
async function getUser(username: string): Promise<UnsplashUser> {
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    if(response.status === 404) notFound();

    return await response.json();
}

export async function generateMetadata({ params: { username } }: PageProps): Promise<Metadata> {
    const user = await getUser(username);
    return{
        title: ([user.first_name, user.last_name].filter(Boolean).join(" ") || user.username) + " - NextJS",
    }
}
// const getUserCached = cache(getUser); Use caché si no está usando la búsqueda nativa
export default async function Page({ params: { username } }: PageProps) {
    const user = await getUser(username); // await getUserCached(username)

    return(
        <div>
            <Alert>
                Esta página de perfil usa <strong>generateMetadata</strong> para establecer el <strong>título de la página</strong> de forma dinámica a partir de la respuesta de la API.
            </Alert>
            <h1>{user.username}</h1>
            <p>Nombre: {user.first_name}</p>
            <p>Apellido: {user.last_name}</p>
            <a href={"https://unsplash.com/" + user.username}>Perfil de Unsplash</a>
        </div>
    );
}