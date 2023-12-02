import DashboardContent from "@/components/layouts/DashboardContent";

import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";
import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import SupervisorNavbarItems from "@/constants/SupervisorNavbarItems";
import Filter from "@/components/shared/Filter";
import Routes from "@/constants/Routes";
const Supervisor = async () => {
  return (
    <DashboardWrapper navItems={SupervisorNavbarItems}>
      <DashboardContent>
        <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
          <Filter />
          <ReportMiniTable
            headers={ReportsTableHeaders}
            datas={MiniReportsMocksData}
            baseRoute={Routes?.Supervisor}
          />
        </div>
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Supervisor;
