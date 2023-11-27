"use client";

import React from "react";
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

const Addorder = () => {

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
          <form className="w-full max-w-lg flex flex-wrap -mx-3 mb-6" onSubmit={handleSubmit}>
            {PlannerAddOrderInputs.map(input => (
              < InputSection
                key={input.name}
                parentClassName={input.parentClassName}
                labelClassName={input.labelClassName}
                inputClassName={input.inputClassName}
                forValue={input.forValue}
                text={input.text}
                name={input.name}
                id={input.id}
                placeholder={input.placeholder}
              />
            ))}
            {/* submit */}
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