"use client";

import React, { useState } from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

import Button from "@/components/shared/Button";
import InputSection from "@/components/shared/InputSection";
import PlannerAddOrderInputs from "@/constants/PlannerAddOrderInputs";
import AddOrderFormFields from "@/models/AddOrderFormFields";
import Select from "@/components/shared/Select";
import Parts from "@/mocks/Parts";
import Companies from "@/mocks/Companies";


import DatePicker, { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Label from "@/components/shared/Label";
import TextField from "@/components/shared/TextField";

const Addorder = () => {

  // test calendar
  let [start, setStart] = useState(new Date())
  let [finish, setFinish] = useState(new Date())


  const handleSubmit = async (e) => {
    e.preventDefault()
    let formsElements = e.target.elements;

    let productName = formsElements.namedItem(
      AddOrderFormFields?.productName?.title
    )?.value;
    let companyName = formsElements.namedItem(
      AddOrderFormFields?.companyName?.title
    )?.value;
    let startDay = formsElements.namedItem(
      AddOrderFormFields?.startDay?.title
    )?.value
    let startMonth = formsElements.namedItem(
      AddOrderFormFields?.startMonth?.title
    )?.value
    let startYear = formsElements.namedItem(
      AddOrderFormFields?.startYear?.title
    )?.value
    let finishDay = formsElements.namedItem(
      AddOrderFormFields?.finishDay?.title
    )?.value
    let finishMonth = formsElements.namedItem(
      AddOrderFormFields?.finishMonth?.title
    )?.value
    let finishYear = formsElements.namedItem(
      AddOrderFormFields?.finishYear?.title
    )?.value
    let count = formsElements.namedItem(
      AddOrderFormFields?.count?.title
    )?.value

    // build Date Values
    const startDate = startYear + "/" + startMonth + "/" + startDay
    const finishDate = finishYear + "/" + finishMonth + "/" + finishYear

  }

  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <p>محتوای صفحه</p>
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <form className="w-full max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6" onSubmit={handleSubmit}>
            <Select
              parentClassName="w-full md:w-1/2 px-3 mb-6 md:mb-0"
              labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="partName"
              text=" نام قطعه"
              selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              selectId="partName"
              options={Parts}
            />

            <Select
              parentClassName="w-full md:w-1/2 px-3 mb-6 md:mb-0"
              labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              forValue="companyName"
              text="نام شرکت"
              selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              selectId="companyName"
              options={Companies}
            />


            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="startDate" text="تاریخ شروع" />
              <DatePicker
                style={{ cursor: 'pointer', padding: '20px' }}
                value={start}
                onChange={setStart}
                calendar={persian}
                locale={persian_fa}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finishDate" text="تاریخ پایان" />
              <DatePicker
                style={{ cursor: 'pointer', padding: '20px' }}
                value={finish}
                onChange={setFinish}
                calendar={persian}
                locale={persian_fa}
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="count" text="تعداد قطعه" />
              <TextField name="count" id="count" placeholder="۱۵" className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
              <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">ثبت سفارش</Button>
            </div>
          </form>
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider >
  );
};

export default Addorder;
