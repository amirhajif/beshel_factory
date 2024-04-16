import DashboardContent from "@/components/layouts/DashboardContent";
import dynamic from "next/dynamic";
import ReportMiniTable from "@/components/shared/ReportMiniTable";
import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import Filter from "@/components/shared/Filter";
import Routes from "@/constants/Routes";
import getMachines from "@/apis/getMachines";
import getOrders from "@/apis/getOrders";
import { getOperators } from "@/apis/getOperators";
import getParts from "@/apis/getParts";
import getProjects from "@/apis/getProjects";

const Planner = async () => {
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

  const partsRequest = await getParts();
  const parts = partsRequest?.data?.data;
  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
          <Filter
            options={{
              machines: machines,
              orders: orders,
              operators: operators,
              parts: parts,
            }}
          />
          <ReportMiniTable baseRoute={Routes?.Planner} />
        </div>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Planner;
