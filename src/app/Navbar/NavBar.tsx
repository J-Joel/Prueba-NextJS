import Image from "next/image";
import Link from "next/link";
import { redirect} from "next/navigation";
import logo from "@/assets/logo.png";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function searchProducts(formData: FormData){
    "use server";

    const Query = formData.get("searchQuery")?.toString();

    if (Query) {
        redirect("/search?query=" + Query);
    }
}

export default async function NavBar(){
    const session = await getServerSession(authOptions);
    const cart = await getCart();

    return(
        <div className="bg-neutral">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl normal-case">
                        <Image src={logo} height={40} width={40} alt="Logo NextJS"/>
                        NextJS
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input
                                name="searchQuery"
                                placeholder="Buscar"
                                className="input-bordered input w-full min-w-[100px]"
                                />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}/>
                    <UserMenuButton session={session}/>
                </div>
            </div>
        </div>
    );
}