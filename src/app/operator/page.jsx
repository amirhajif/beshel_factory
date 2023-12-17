import DashboardContent from "@/components/layouts/DashboardContent";
import dynamic from "next/dynamic";
import OperatorNavbarItems from "@/constants/OperatorNavbarItems";
import AddReportForm from "@/components/templates/AddReportForm";
import getMachines from "@/apis/getMachines";
import getOrders from "@/apis/getOrders";
import sendNotif from "@/utils/sendNotif";

const Operator = async () => {
  const DashboardWrapper = dynamic(
    () => import("@/components/layouts/DashboardWrapper"),
    {
      ssr: false,
    }
  );

  const machineRequest = await getMachines();
  const machines = machineRequest?.data?.results;

  const ordersRequest = await getOrders();
  const orders = ordersRequest?.data?.results;

  return (
    <DashboardWrapper navItems={OperatorNavbarItems}>
      <DashboardContent>
        <AddReportForm machines={machines} orders={orders} />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Operator;
