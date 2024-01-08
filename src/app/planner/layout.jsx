"use client"
import React, { useEffect } from 'react'
import { useRouter, notFound } from "next/navigation";
import { useUserInfos } from '@/store/User';


const layout = ({ children }) => {
    const router = useRouter();

    const { info } = useUserInfos()
    const { role } = info
    useEffect(() => {
        if (role != 'planner') {
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
