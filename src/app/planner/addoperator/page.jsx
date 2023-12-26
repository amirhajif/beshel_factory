import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

import AddOrderForm from "@/components/templates/Forms/AddOrderForm";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import AddOperatorForm from "@/components/templates/AddOperatorForm";

export const generateMetadata = async () => {
  return {
    title: "اضافه کردن اپراتور",
    description: "اضافه کردن اپراتور",
  };
};

const AddOperator = async () => {
  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <AddOperatorForm />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default AddOperator;
