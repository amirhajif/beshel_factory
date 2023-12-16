import DashboardContent from "@/components/layouts/DashboardContent";
import dynamic from "next/dynamic";
import OperatorNavbarItems from "@/constants/OperatorNavbarItems";
import AddReportForm from "@/components/templates/AddReportForm";
import getMachines from "@/apis/getMachines";

const Operator = async () => {
  const DashboardWrapper = dynamic(
    () => import("@/components/layouts/DashboardWrapper"),
    {
      ssr: false,
    }
  );
  const data = await getMachines();
  const result = data?.data?.results;
  return (
    <DashboardWrapper navItems={OperatorNavbarItems}>
      <DashboardContent>
        <AddReportForm info={result} />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Operator;
