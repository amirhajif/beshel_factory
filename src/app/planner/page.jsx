import DashboardContent from "@/components/layouts/DashboardContent";

import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
const Planner = async () => {
  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <ReportMiniTable
          headers={ReportsTableHeaders}
          datas={MiniReportsMocksData}
          baseRoute={"planner"}
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Planner;
