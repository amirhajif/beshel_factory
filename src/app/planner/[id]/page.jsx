"use client";

import { useState, useEffect } from "react";
import ReportsDetailedTableHeaders from "@/constants/ReportsDetailedTableHeaders";
import ReportsMocksData from "@/mocks/ReportsMocksData";
import Table from "@/components/shared/Table";
import Link from "next/link";
import Routes from "@/constants/Routes";
import { useRouter } from "next/navigation";
import getReportById from "@/apis/getReportById";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ReportStatus from "@/constants/ReportStatus";

const Report = ({ params }) => {
  const [data, setData] = useState(null);

  const { id } = params || "";

  useEffect(() => {
    const fetchData = async (id) => {
      let response = await getReportById(id);
      const result = response.data.data;
      setData({
        id: result?.id,
        order_number: result?.order?.order_number,
        date: new DateObject(result?.date)
          .convert(persian, persian_fa)
          .format("YYYY/MM/DD"),
        started_at: result?.started_at,
        ended_at: result?.ended_at,
        operator: `${result?.operator?.first_name}  ${result?.operator?.last_name}`,
        machine: result?.machine?.title,
        standard_time: result?.standard_time,
        intact_parts_count: result?.intact_parts_count,
        defective_parts_count: result?.defective_parts_count,
        stop_controller_1_code: result?.stop_controller_1_code,
        stop_controller_1_time: result?.stop_controller_1_time,
        stop_controller_2_code: result?.stop_controller_2_code,
        stop_controller_2_time: result?.stop_controller_2_time,
        stop_controller_3_code: result?.stop_controller_3_code,
        stop_controller_3_time: result?.stop_controller_3_time,
        stop_controller_4_code: result?.stop_controller_4_code,
        stop_controller_4_time: result?.stop_controller_4_time,
        status:
          result?.status === ReportStatus?.Accepted?.key
            ? ReportStatus?.Accepted?.title
            : result?.status === ReportStatus?.Rejected?.key
            ? ReportStatus?.Rejected?.title
            : ReportStatus?.Pending?.title,
      });
    };

    fetchData(id);
  }, []);

  return (
    <div className="h-[100vh] flex flex-col p-3 bg-slate-200">
      <Link
        href={`/${Routes?.Planner}`}
        className="bg-indigo-800 cursor-pointer text-slate-50 w-fit p-2 rounded-lg">
        بازگشت به گزارشات
      </Link>
      <p className="font-bold flex text-lg my-2">گزارش با شناسه {id}</p>
      <div className="flex items-center justify-center">
        {data ? (
          <Table headers={ReportsDetailedTableHeaders} datas={[data]} />
        ) : (
          <p>داده ای یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export default Report;
