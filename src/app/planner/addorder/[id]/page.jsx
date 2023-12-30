"use client"
import getOrderById from '@/apis/getOrderById';
import Image from 'next/image'
import React from 'react'
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from 'react-multi-date-picker';
import { useRouter } from 'next/navigation'
import Styles from './style.module.css'
import Button from '@/components/shared/Button';


const PrintPage = async ({ params }) => {
    const { id } = params;
    const orderRequest = await getOrderById(id);
    const order = orderRequest?.data?.data;

    const handlePrint = () => {
        window.print()
    }

    const handleBack = () => {
        location.href = "http://localhost:3000/planner/addorder"
    }

    return (
        <>
            <div className={`flex justify-center my-2 gap-2 ${Styles.noPrint}`}>
                <Button className={`bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`} onClickCallback={() => window.print()}>
                    پرینت کارت سفارش
                </Button>
                <Button class="bg-red-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClickCallback={() => location.href = "http://localhost:3000/planner/addorder"}>
                    بازگشت
                </Button>
            </div >


            <div className='flex justify-center'>
                <Image src='/welcome.png' width={800} height={800} />
            </div>

            <div className='flex justify-center my-3 w-full'>
                <div className=' flex flex-col w-[90%] p-2'>
                    <div className='flex border-2 border-slate-900 items-stretch justify-between'>
                        <div className='text-center justify-center border-l-2 border-slate-800 w-1/4'>نام قطعه</div>
                        <div className='text-center border-l-2 border-slate-800 w-1/4 '>
                            {order.part.title}
                        </div>
                        <div className='border-l-2 border-slate-800 w-1/4 text-center'>کد سفارش</div>
                        <div className='w-1/4 text-center'>{order.order_number}</div>
                    </div>
                    <div className='flex border-2 border-slate-900 items-stretch justify-between border-t-0'>
                        <div className='text-center justify-center border-l-2 border-slate-800 w-1/6'>شروع</div>
                        <div className='text-center border-l-2 border-slate-800 w-1/6 '>
                            {new DateObject(order.started_at).convert(persian, persian_fa).format()}
                        </div>
                        <div className='border-l-2 border-slate-800 w-1/6 text-center'>پایان</div>
                        <div className='border-l-2 border-slate-800 w-1/6 text-center'>
                            {new DateObject(order.ended_at).convert(persian, persian_fa).format()}
                        </div>
                        <div className='border-l-2 border-slate-800 w-1/6 text-center'>تعداد</div>
                        <div className='w-1/6 text-center'>{order.count}</div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <Image src='/table.png' width={800} height={800} />
            </div>
            <div className='flex justify-center'>
                <Image src='/stop.png' width={800} height={800} />
            </div>
        </>
    )
}

export default PrintPage