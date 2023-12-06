import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import InputSection from "@/components/shared/InputSection";
import Button from "@/components/shared/Button";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";

export const generateMetadata = async () => {
  return {
    title: "اضافه کردن کمپانی",
    description: "اضافه کردن کمپانی",
  };
};

const AddCompany = () => {
  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <form className="w-full max-w-lg flex flex-wrap -mx-3 mb-6">
          <InputSection
            parentClassName="w-full md:w-1/3 px-3 mb-6 md:mb-0"
            labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            inputClassName="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            forValue="company_name"
            text="نام شرکت"
            name="company_name"
            id="company_name"
            placeholder="نام شرکت"
          />
          <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
            <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">
              ثبت شرکت
            </Button>
          </div>
        </form>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default AddCompany;
