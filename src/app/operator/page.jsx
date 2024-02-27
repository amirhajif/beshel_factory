import DashboardContent from "@/components/layouts/DashboardContent";
import dynamic from "next/dynamic";
import OperatorNavbarItems from "@/constants/OperatorNavbarItems";
import AddReportForm from "@/components/templates/AddReportForm";
import getMachines from "@/apis/getMachines";
import getOrders from "@/apis/getOrders";
import { getOperators } from "@/apis/getOperators";

const Operator = async () => {
  const DashboardWrapper = dynamic(
    () => import("@/components/layouts/DashboardWrapper"),
    {
      ssr: false,
    }
  );

  const machineRequest = await getMachines();
  const machines = machineRequest?.data?.data;

  const ordersRequest = await getOrders();
  const orders = ordersRequest?.data?.data;

  const operatorsRequest = await getOperators();
  const operators = operatorsRequest?.data?.data;

  return (
    <DashboardWrapper navItems={OperatorNavbarItems}>
      <DashboardContent>
        <AddReportForm
          machines={machines}
          orders={orders}
          operators={operators}
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Operator;
