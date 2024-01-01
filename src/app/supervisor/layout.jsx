"use client"
import React, { useEffect } from 'react'
import { useRouter, notFound } from "next/navigation";


const layout = ({ children }) => {
    const router = useRouter();

    const role = "supervisor"
    useEffect(() => {
        if (role != 'supervisor') {
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
