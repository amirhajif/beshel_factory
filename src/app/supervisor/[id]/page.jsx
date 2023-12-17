"use client";

import ReportsDetailedTableHeaders from "@/constants/ReportsDetailedTableHeaders";
import ReportsMocksData from "@/mocks/ReportsMocksData";
import SupervisorTable from "@/components/shared/SupervisorTable";
import Link from "next/link";
import Routes from "@/constants/Routes";
import { useEffect, useState } from "react";
import getReportById from "@/apis/getReportById";
import ReportStatus from "@/constants/ReportStatus";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useRouter } from "next/navigation";
import updateReport from "@/apis/updateReport";
import sendNotif from "@/utils/sendNotif";

const Report = ({ params }) => {
  const router = useRouter();

  const [data, setData] = useState(null);

  const { id } = params || "";

  useEffect(() => {
    const fetchData = async (id) => {
      let response = await getReportById(id);
      const result = response.data.data;
      setData({
        id: result?.id,
        created_at: new DateObject(result?.created_at)
          .convert(persian, persian_fa)
          .format(),
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

  const handleAcceptReject = async (status) => {
    try {
      await updateReport(id, { ...data, status: status });
      sendNotif("با موفقیت صورت گرفت", "success");
    } catch (err) {
      sendNotif("خطایی رخ داد", "error");
      router.refresh();
    }
  };

  return (
    <div className="h-[100vh] flex flex-col p-3 bg-slate-200">
      <Link
        href={`/${Routes?.Supervisor}`}
        className="bg-indigo-800 cursor-pointer text-slate-50 w-fit p-2 rounded-lg">
        بازگشت به گزارشات
      </Link>
      <p className="font-bold flex text-lg my-2">گزارش با شناسه {id}</p>
      <div className="flex items-center justify-center">
        {data ? (
          <SupervisorTable
            headers={ReportsDetailedTableHeaders}
            datas={[data]}
            callback={handleAcceptReject}
          />
        ) : (
          <p>داده ای یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export default Report;
