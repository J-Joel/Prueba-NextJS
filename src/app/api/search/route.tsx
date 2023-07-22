import { UnsplashSearchResponse } from "@/app/models/unsplash-image";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    
    if (!query) return NextResponse.json({ error: "No se proporcionó ninguna consulta" }, { status: 400 }); 

    const response = await fetch(`http://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    const { results }: UnsplashSearchResponse = await response.json();

    return NextResponse.json(results);
}