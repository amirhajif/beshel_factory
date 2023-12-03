import DashboardContent from "@/components/layouts/DashboardContent";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import OperatorNavbarItems from "@/constants/OperatorNavbarItems";
import AddReportForm from "@/components/templates/AddReportForm";
const Operator = () => {
  return (
    <DashboardWrapper navItems={OperatorNavbarItems}>
      <DashboardContent>
        <AddReportForm />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Operator;
