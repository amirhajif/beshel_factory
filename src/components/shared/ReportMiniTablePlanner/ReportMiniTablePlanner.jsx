"use client";

import createTdFromObject from "@/utils/createTdFromObject";
import Button from "@/components/shared/Button";
import Link from "next/link";
import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsDetailedTableHeaders from "@/constants/ReportsDetailedTableHeaders";
import { useEffect, useState } from "react";
import getReports from "@/apis/getReports";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ReportStatus from "@/constants/ReportStatus";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";
import getReportsForExcelFile from "@/apis/getReportsForExcelFile";

const ReportMiniTablePlanner = ({ baseRoute }) => {
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();
  const [count, setCount] = useState(0);
  const { replace } = useRouter();
  const pathname = usePathname();
  const limit = 10;
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getReports(searchParams.toString());
      setCount(response.data.count);

      setData(
        response.data.results
          .map((result) => ({
            شناسه: result?.id,
            "شماره سفارش": result?.order?.order_number,
            "تاریخ ثبت گزارش": new DateObject(result?.date)
              .convert(persian, persian_fa)
              .format("YYYY/MM/DD"),
            "ساعت شروع": result?.started_at,
            "ساعت پایان": result?.ended_at,
            اپراتور: `${result?.operator?.first_name}  ${result?.operator?.last_name}`,
            ماشین: result?.machine?.title,
            قطعه: result?.part?.title,
            "شماره قطعات": result?.report_part_codes
              .map(({ number }) => `${number} `)
              .toString(),
            "St(m)": result?.standard_time,
            "تعداد قطعات سالم": result?.intact_parts_count,
            "تعداد قطعات ناسالم": result?.defective_parts_count,
            "کنترل توقف کد 1": result?.stop_controller_1_code,
            "زمان توقف کد 1": result?.stop_controller_1_time,
            "کنترل توقف کد 2": result?.stop_controller_2_code,
            "زمان توقف کد 2": result?.stop_controller_2_time,
            "کنترل توقف کد 3": result?.stop_controller_3_code,
            "زمان توقف کد 3": result?.stop_controller_3_time,
            "کنترل توقف کد 4": result?.stop_controller_4_code,
            "زمان توقف کد 4": result?.stop_controller_4_time,
            "تایید سرپرست":
              result?.status === ReportStatus?.Accepted?.key
                ? ReportStatus?.Accepted?.title
                : result?.status === ReportStatus?.Rejected?.key
                ? ReportStatus?.Rejected?.title
                : ReportStatus?.Pending?.title,
          }))
          .reverse()
      );
    };

    fetchData();
  }, [searchParams]);

  const handleExcelExport = async () => {
    let response = await getReportsForExcelFile(searchParams.toString());
    const result = response.data.data
      .map((result) => ({
        شناسه: result?.id,
        "شماره سفارش": result?.order?.order_number,
        "تاریخ ثبت گزارش": new DateObject(result?.date)
          .convert(persian, persian_fa)
          .format("YYYY/MM/DD"),
        "ساعت شروع": result?.started_at,
        "ساعت پایان": result?.ended_at,
        اپراتور: `${result?.operator?.first_name}  ${result?.operator?.last_name}`,
        ماشین: result?.machine?.title,
        قطعه: result?.part?.title,
        "شماره قطعات": result?.report_part_codes
          .map(({ number }) => `${number} `)
          .toString(),
        "St(m)": result?.standard_time,
        "تعداد قطعات سالم": result?.intact_parts_count,
        "تعداد قطعات ناسالم": result?.defective_parts_count,
        "کنترل توقف کد 1": result?.stop_controller_1_code,
        "زمان توقف کد 1": result?.stop_controller_1_time,
        "کنترل توقف کد 2": result?.stop_controller_2_code,
        "زمان توقف کد 2": result?.stop_controller_2_time,
        "کنترل توقف کد 3": result?.stop_controller_3_code,
        "زمان توقف کد 3": result?.stop_controller_3_time,
        "کنترل توقف کد 4": result?.stop_controller_4_code,
        "زمان توقف کد 4": result?.stop_controller_4_time,
        "تایید سرپرست":
          result?.status === ReportStatus?.Accepted?.key
            ? ReportStatus?.Accepted?.title
            : result?.status === ReportStatus?.Rejected?.key
            ? ReportStatus?.Rejected?.title
            : ReportStatus?.Pending?.title,
      }))
      .reverse();

    // const modifiedJsonData = data.map((obj) => {
    //   const { dummy, ...rest } = obj;
    //   return rest;
    // });

    const worksheet = XLSX.utils.json_to_sheet(result);
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

  const handlePageNumberChange = (event, value) => {
    setPageNumber(value);
    const params = new URLSearchParams(searchParams);
    params.set("page", value);

    replace(`${pathname}?${params}`);
  };
  return (
    <>
      <button
        onClick={handleExcelExport}
        className="bg-green-700 text-sm text-slate-50 p-2 rounded-lg my-2">
        <FileDownloadIcon />
        <span> خروجی اکسل از جدول</span>
      </button>
      <br />
      <div className="flex gap-3 my-3">
        {count > limit && (
          <Box
            sx={{
              margin: "auto",
              width: "fit-content",
              alignItems: "center",
              direction: "ltr",
            }}>
            <Pagination
              count={Math.ceil(count / limit)}
              page={pageNumber}
              onChange={handlePageNumberChange}
            />
          </Box>
        )}
      </div>

      <table className="text-sm">
        <thead className="border-b dark:border-neutral-500 text-slate-50 bg-slate-500">
          <tr className="text-center">
            {ReportsDetailedTableHeaders.map((item) => (
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

export default ReportMiniTablePlanner;
