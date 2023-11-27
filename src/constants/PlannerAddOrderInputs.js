import { AssuredWorkloadSharp } from "@mui/icons-material"

export const PlannerAddOrderInputs = [
    {
        parentClassName: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "product_name",
        text: 'نام قطعه',
        name: "product_name",
        id: "product_name",
        placeholder: 'نام قطعه'
    },
    {
        parentClassName: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "company_name",
        text: "نام مجموعه",
        name: "company_name",
        id: "company_name",
        placeholder: "نام شرکت"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: 'start_day',
        text: "روز شروع",
        name: "company_name",
        id: "start_day",
        placeholder: "۵"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "start_month",
        text: "ماه شروع ",
        id: "start_month",
        placeholder: "۹"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "start_year",
        text: "سال شروع",
        id: "start_year",
        placeholder: "۱۴۰۲"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "finish_day",
        text: "روز پایان",
        id: "finish_day",
        placeholder: "۱۵"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "finish_month",
        text: "ماه پایان",
        id: "finish_month",
        placeholder: "۱۰"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "finish_year",
        text: "سال پایان",
        id: "finish_year",
        placeholder: "۱۴۰۲"
    },
    {
        parentClassName: "w-full md:w-1/3 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        inputClassName: "appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        forValue: "count",
        text: "تعداد قطعه",
        id: "count",
        placeholder: "۱۵"
    }


    // <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
    //     <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">ثبت سفارش</Button>
    // </div>

]

export default PlannerAddOrderInputs
