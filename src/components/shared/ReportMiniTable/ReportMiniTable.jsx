"use client";

import createTdFromObject from "@/utils/createTdFromObject";
import Button from "@/components/shared/Button";
import Link from "next/link";
import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getReports from "@/apis/getReports";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ReportStatus from "@/constants/ReportStatus";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ReportMiniTable = ({ baseRoute }) => {
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await getReports(searchParams.toString());
      setData(
        response.data.results
          .map((result) => ({
            شناسه: result?.id,
            کد_سفارش: result?.order?.order_number,
            تاریخ: new DateObject(result?.created_at)
              .convert(persian, persian_fa)
              .format(),
            اپراتور: `${result?.operator?.first_name}  ${result?.operator?.last_name}`,
            ماشین: result?.machine?.title,
            وضعیت:
              result?.status === ReportStatus?.Accepted?.key
                ? ReportStatus?.Accepted?.title
                : result?.status === ReportStatus?.Rejected?.key
                ? ReportStatus?.Rejected?.title
                : ReportStatus?.Pending?.title,
            dummy: "",
          }))
          .reverse()
      );
    };

    fetchData();
  }, [searchParams]);

  const handleExcelExport = () => {
    const modifiedJsonData = data.map((obj) => {
      const { dummy, ...rest } = obj;
      return rest;
    });

    const worksheet = XLSX.utils.json_to_sheet(modifiedJsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, "data.xlsx");
  };
  return (
    <>
      <button
        onClick={handleExcelExport}
        className="bg-green-700 text-sm text-slate-50 p-2 rounded-lg my-2">
        <FileDownloadIcon />
        <span> خروجی اکسل از جدول</span>
      </button>
      <table className="text-sm w-[100%]">
        <thead className="border-b dark:border-neutral-500 text-slate-50 bg-slate-500">
          <tr className="text-center">
            {ReportsTableHeaders.map((item) => (
              <th
                key={item}
                scope="col"
                className="px-6 py-4 font-bold text-xs">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={`${item["شناسه"]}_index`}
                className={`border-b dark:border-neutral-500 text-xs text-center ${
                  index % 2 === 1 ? "bg-slate-300" : "bg-slate-100"
                }`}>
                {createTdFromObject(
                  item,
                  index,
                  "dummy",
                  "",
                  <Button>
                    <Link href={`${baseRoute}/${item["شناسه"]}`}>
                      {" "}
                      مشاهده گزارش
                    </Link>
                  </Button>
                )}
              </tr>
            ))
          ) : (
            <p className="text-center p-3 font-bold text-sm">
              داده ای وجود ندارد
            </p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ReportMiniTable;
