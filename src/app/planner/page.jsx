import DashboardContent from "@/components/layouts/DashboardContent";
import dynamic from "next/dynamic";
import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";
import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import Filter from "@/components/shared/Filter";
import Routes from "@/constants/Routes";
import getMachines from "@/apis/getMachines";

export const generateMetadata = async () => {
  return {
    title: "پنل برنامه ریز",
    description: "پنل برنامه ریز",
  };
};

const Planner = async () => {
  const DashboardWrapper = dynamic(
    () => import("@/components/layouts/DashboardWrapper"),
    {
      ssr: false,
    }
  );

  const machineRequest = await getMachines();
  const machines = machineRequest?.data?.results;

  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
          <Filter options={{ machines: machines }} />
          <ReportMiniTable baseRoute={Routes?.Planner} />
        </div>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Planner;
