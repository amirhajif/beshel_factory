"use client"
import React, { useEffect } from 'react'
import { useRouter, notFound } from "next/navigation";
import { useUserInfos } from '@/store/User';


const layout = async ({ children }) => {
    const router = useRouter();

    const { info } = useUserInfos()
    const { role } = info

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
