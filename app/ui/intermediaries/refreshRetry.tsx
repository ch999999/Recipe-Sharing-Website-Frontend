'use client'
import { useEffect } from "react";
import { tokenRefresh } from "@/app/lib/actions";
import Loading from "./loading";

export default function RefreshRetry({nextPage}:{nextPage:string}){
    useEffect(()=>{
        tokenRefresh(nextPage);   
    },[])

    return <Loading></Loading>
}