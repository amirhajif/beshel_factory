"use client";

import ReportsDetailedTableHeaders from "@/constants/ReportsDetailedTableHeaders";
import ReportsMocksData from "@/mocks/ReportsMocksData";
import SupervisorTable from "@/components/shared/SupervisorTable";
import Link from "next/link";
const Report = ({ params }) => {
  const { id } = params || "";

  const handleAcceptReject = (status) => {
    console.log(`report ${id} new status will be ${status}`);
  };

  return (
    <div className="h-[100vh] flex flex-col p-3 bg-slate-200">
      <Link
        href="/supervisor"
        className="bg-indigo-800 cursor-pointer text-slate-50 w-fit p-2 rounded-lg">
        بازگشت به گزارشات
      </Link>
      <p className="font-bold flex text-lg my-2">گزارش با شناسه {id}</p>
      <div className="flex items-center justify-center">
        <SupervisorTable
          headers={ReportsDetailedTableHeaders}
          datas={ReportsMocksData}
          callback={handleAcceptReject}
        />
      </div>
    </div>
  );
};

export default Report;
