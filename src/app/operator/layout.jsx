"use client"
import React, { useEffect } from 'react'
import { useRouter, notFound } from "next/navigation";


const layout = ({ children }) => {
    const router = useRouter();

    const role = "operator"
    useEffect(() => {
        if (role != 'operator') {
            return notFound()
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}

export default layout
