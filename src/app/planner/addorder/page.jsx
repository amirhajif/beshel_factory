import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

import AddOrderForm from "@/components/templates/Forms/AddOrderForm";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";

export const generateMetadata = async () => {
  return {
    title: "اضافه کردن سفارش",
    description: "اضافه کردن سفارش",
  };
};

const Addorder = async () => {
  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <AddOrderForm
          formClassName="w-full max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Addorder;
