"use client"
import getOrders from '@/apis/getOrders'
import DashboardContent from '@/components/layouts/DashboardContent'
import DashboardWrapper from '@/components/layouts/DashboardWrapper'
import Button from '@/components/shared/Button'
import PlannerNavbarItems from '@/constants/PlannerNavbarItems'
import createTdFromObject from '@/utils/createTdFromObject'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Orders() {
    const [orders, setOrders] = useState([])
    const router = useRouter()

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getOrders()
                setOrders(res.data.data)
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchOrders()
    }, [])

    return (
        <DashboardWrapper navItems={PlannerNavbarItems} >
            <DashboardContent>
                <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
                    <table class="text-sm w-[100%]">
                        <thead class="border-b dark:border-neutral-500 text-slate-50 bg-slate-500">
                            <tr class="text-center">
                                <th scope="col" class="px-6 py-4 font-bold text-xs">ردیف</th>
                                <th scope="col" class="px-6 py-4 font-bold text-xs">شماره سفارش</th>
                                <th scope="col" class="px-6 py-4 font-bold text-xs">نام قطعه</th>
                                <th scope="col" class="px-6 py-4 font-bold text-xs">نام شرکت</th>
                                <th scope="col" class="px-6 py-4 font-bold text-xs">نام پروژه</th>
                                <th scope="col" class="px-6 py-4 font-bold text-xs">تعداد</th>
                                <th scope="col" class="px-6 py-4 font-bold text-xs">مشاهده</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => (
                                    <tr className={`border-b dark:border-neutral-500 text-xs text-center ${index % 2 === 1 ? "bg-slate-300" : "bg-slate-100"}`}>
                                        <td className='whitespace-nowrap px-6 py-4'>{index + 1}</td>
                                        <td className='whitespace-nowrap px-6 py-4'>{order.order_number}</td>
                                        <td className='whitespace-nowrap px-6 py-4'>{order.part.title}</td>
                                        <td className='whitespace-nowrap px-6 py-4'>{order.client.title}</td>
                                        <td className='whitespace-nowrap px-6 py-4'>{order.project.title}</td>
                                        <td className='whitespace-nowrap px-6 py-4'>{order.count}</td>
                                        <td className='whitespace-nowrap px-6 py-4 cursor-pointer font-bold' onClick={() => {
                                            router.push(`/planner/addorder/${order.id}`)
                                        }}>
                                            <p className='bg-indigo-950 text-slate-50 rounded-lg p-2 '>مشاهده کاربرگ</p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </DashboardContent>
        </DashboardWrapper >
    )
}
