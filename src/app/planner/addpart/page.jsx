import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AddPartForm from "@/components/templates/Forms/AddPartForm";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";

export const generateMetadata = async () => {
  return {
    title: "اضافه کردن قطعه",
    description: "اضافه کردن قطعه",
  };
};

const AddPart = async () => {
  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <AddPartForm
          formClassName="w-full max-w-lg flex flex-wrap -mx-3 mb-6"
          parentClassName="w-full md:w-1/3 px-3 mb-6 md:mb-0"
          labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          inputClassName="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          forValue="title"
          text="نام قطعه"
          name="title"
          id="title"
          placeholder="نام قطعه"
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default AddPart;
