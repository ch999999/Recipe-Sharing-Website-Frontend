import Link from "next/link"
import { validateToken } from "@/app/lib/auth"
import LogoutButton from "./logout-button"

export function HomeButton(){
    
    return(
        <>
            <Link href='/' className="btn btn-ghost normal-case text-xl">Your Recipes</Link>
        </>
    )
}

export async function UserButtons(){

    const tokenIsValid = await validateToken()

    if(!tokenIsValid){
    return(
    <>
    <ul className="menu menu-horizontal px-1"><li><Link href="/users/login">Log In</Link></li></ul>
    <ul className="menu menu-horizontal px-1"><li><Link href="/users/signup">Sign up</Link></li></ul>
    </>
    )
    }else{
        return(
        <>
            <ul className="menu menu-horizontal px-1"><li><Link href="/recipes/new">Create Recipe</Link></li></ul>
            <ul className="menu menu-horizontal px-1"><li><LogoutButton/></li></ul>
        </>
        )
    }
}

