import dynamic from "next/dynamic";
import DashboardContent from "@/components/layouts/DashboardContent";

import ReportMiniTable from "@/components/shared/ReportMiniTable";
import SupervisorNavbarItems from "@/constants/SupervisorNavbarItems";
import Filter from "@/components/shared/Filter";
import Routes from "@/constants/Routes";
import getMachines from "@/apis/getMachines";
import getOrders from "@/apis/getOrders";
import { getOperators } from "@/apis/getOperators";

const Supervisor = async () => {
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

  const operatorsRequest = await getOperators()
  const operators = operatorsRequest?.data?.results;

  return (
    <DashboardWrapper navItems={SupervisorNavbarItems}>
      <DashboardContent>
        <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
          <Filter options={{ machines: machines, orders: orders, operators: operators }} />
          <ReportMiniTable baseRoute={Routes?.Supervisor} />
        </div>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Supervisor;
