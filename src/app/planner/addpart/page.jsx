"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";

import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";
import AddPartForm from "@/components/templates/Forms/AddPartForm";

const AddPart = () => {
    const { width } = useWindowSize();
    const router = useRouter();

    return width < 768 ? (
        <AuthProvider>
            <MobileDashboard navItems={PlannerNavbarItems}>
                <DashboardContent>
                    <AddPartForm
                        formClassName="w-full max-w-lg flex flex-wrap -mx-3 mb-6"
                        parentClassName="w-full md:w-1/3 px-3 mb-6 md:mb-0"
                        labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        inputClassName="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        forValue="part_name"
                        text='نام قطعه'
                        name="part_name"
                        id="part_name"
                        placeholder='نام قطعه'
                    />
                </DashboardContent>
            </MobileDashboard>
        </AuthProvider>
    ) : (
        <AuthProvider>
            <DesktopDasboard navItems={PlannerNavbarItems}>
                <DashboardContent>
                    <AddPartForm
                        formClassName="w-full max-w-lg flex flex-wrap -mx-3 mb-6"
                        parentClassName="w-full md:w-1/3 px-3 mb-6 md:mb-0"
                        labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        inputClassName="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        forValue="part_name"
                        text='نام قطعه'
                        name="part_name"
                        id="part_name"
                        placeholder='نام قطعه'
                    />
                </DashboardContent>
            </DesktopDasboard>
        </AuthProvider>
    );
}

export default AddPart
