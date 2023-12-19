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

const ReportMiniTable = ({ baseRoute }) => {
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await getReports(searchParams.toString());
      setData(
        response.data.results.map((result) => ({
          id: result?.id,
          date: new DateObject(result?.created_at)
            .convert(persian, persian_fa)
            .format(),
          operator: `${result?.operator?.first_name}  ${result?.operator?.last_name}`,
          machine: result?.machine?.title,
          status:
            result?.status === ReportStatus?.Accepted?.key
              ? ReportStatus?.Accepted?.title
              : result?.status === ReportStatus?.Rejected?.key
              ? ReportStatus?.Rejected?.title
              : ReportStatus?.Pending?.title,
          dummy: "",
        }))
      );
    };

    fetchData();
  }, [searchParams]);

  return (
    <>
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
                key={`${item.id}_index`}
                className={`border-b dark:border-neutral-500 text-xs text-center ${
                  index % 2 === 1 ? "bg-slate-300" : "bg-slate-100"
                }`}>
                {createTdFromObject(
                  item,
                  index,
                  "dummy",
                  "",
                  <Button>
                    <Link href={`${baseRoute}/${item?.id}`}> مشاهده گزارش</Link>
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
