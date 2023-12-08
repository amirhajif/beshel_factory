import Parts from "@/mocks/Parts"
import Companies from "@/mocks/Companies"

export const AddOrderSelects = [
    {
        parentClassName: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        forValue: "partName",
        text: " نام قطعه",
        selectClassName: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        selectId: "partName",
        options: Parts
    },
    {
        parentClassName: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
        labelClassName: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
        forValue: "companyName",
        text: "نام شرکت",
        selectClassName: "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
        selectId: "companyName",
        options: Companies
    }
]

export default AddOrderSelects