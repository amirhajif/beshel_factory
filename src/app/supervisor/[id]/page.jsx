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
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { useRouter } from "next/navigation";
import updateReport from "@/apis/updateReport";
import sendNotif from "@/utils/sendNotif";

const Report = ({ params }) => {
  const [dummy, setDummy] = useState(0);

  const [data, setData] = useState(null);
  const [originalDate, setOriginalDate] = useState(null);
  const [operatorId, setOperatorId] = useState(null);
  const [machineId, setMachineId] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const { id } = params || "";

  useEffect(() => {
    const fetchData = async (id) => {
      let response = await getReportById(id);
      const result = response.data.data;

      setOriginalDate(result?.date);
      setOperatorId(result?.operator?.id);
      setMachineId(result?.machine?.id);
      setOrderId(result?.order?.id);

      setData({
        id: result?.id,
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
  }, [dummy]);

  const handleAcceptReject = async (status) => {
    try {
      console.log(operatorId);
      await updateReport(id, {
        ...data,
        status: status,
        date: originalDate,
        operator: operatorId,
        machine: machineId,
        order: orderId,
      });
      sendNotif("با موفقیت صورت گرفت", "success");
    } catch (err) {
      sendNotif("خطایی رخ داد", "error");
    }

    setDummy((prev) => prev + 1);
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
