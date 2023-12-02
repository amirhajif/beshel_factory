import DashboardContent from "@/components/layouts/DashboardContent";

import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import SupervisorNavbarItems from "@/constants/SupervisorNavbarItems";

const Supervisor = async () => {
  return (
    <DashboardWrapper navItems={SupervisorNavbarItems}>
      <DashboardContent>
        <ReportMiniTable
          headers={ReportsTableHeaders}
          datas={MiniReportsMocksData}
          baseRoute={"supervisor"}
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Supervisor;
