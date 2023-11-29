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

// "use client";

// import React from "react";
// import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
// import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
// import { useWindowSize } from "@uidotdev/usehooks";
// import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
// import DashboardContent from "@/components/layouts/DashboardContent";
// import AuthProvider from "@/components/layouts/AuthProvider";
// import TextField from "@/components/shared/TextField";
// import Label from "@/components/shared/Label";
// import Button from "@/components/shared/Button";

// const Addorder = () => {
//   const { width } = useWindowSize();
//   return width < 768 ? (
//     <AuthProvider>
//       <MobileDashboard navItems={PlannerNavbarItems}>
//         <DashboardContent>
//           <p>محتوای صفحه</p>
//         </DashboardContent>
//       </MobileDashboard>
//     </AuthProvider>
//   ) : (
//     <AuthProvider>
//       <DesktopDasboard navItems={PlannerNavbarItems}>
//         <DashboardContent>
//           <form className="w-full max-w-lg flex flex-wrap -mx-3 mb-6">
//             {/* product and company name */}
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue='product_name' text='نام قطعه' />
//               <TextField name="product_name" id="product_name" placeholder="نام قطعه" className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
//             </div>

//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="company_name" text="نام مجموعه" />
//               <TextField name="company_name" id="company_name" placeholder="نام شرکت" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
//             </div>

//             {/* start date */}
//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue='start_day' text="روز شروع" />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="start_day" type="text" placeholder="۵" />
//             </div>

//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="start_month" text="ماه شروع " />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="start_month" type="text" placeholder="۹" />
//             </div>
//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="start_year" text="سال شروع" />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="start_year" type="text" placeholder="۱۴۰۲" />
//             </div>

//             {/* finish date */}
//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finish_day" text="روز پایان" />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="finish_day" type="text" placeholder="۱۵" />
//             </div>

//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finish_month" text="ماه پایان" />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="finish_month" type="text" placeholder="۱۰" />
//             </div>

//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finish_year" text="سال پایان" />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="finish_year" type="text" placeholder="۱۴۰۲" />
//             </div>

//             {/* count and submit */}
//             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//               <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="count" text="تعداد قطعه" />
//               <TextField className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="count" type="text" placeholder="۱۵" />
//             </div>
//             <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
//               <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">ثبت سفارش</Button>
//             </div>
//           </form>
//         </DashboardContent>
//       </DesktopDasboard>
//     </AuthProvider >
//   );
// };

// export default Addorder;