import DashboardContent from "@/components/layouts/DashboardContent";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import OperatorNavbarItems from "@/constants/OperatorNavbarItems";
const Operator = async () => {
  return (
    <DashboardWrapper navItems={OperatorNavbarItems}>
      <DashboardContent>صفحه اپراتور</DashboardContent>
    </DashboardWrapper>
  );
};

export default Operator;
