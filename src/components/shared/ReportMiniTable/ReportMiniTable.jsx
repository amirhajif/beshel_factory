"use client";

import createTdFromObject from "@/utils/createTdFromObject";
import Button from "@/components/shared/Button";
import Link from "next/link";
import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getReports from "@/apis/getReports";

const ReportMiniTable = ({ baseRoute }) => {
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await getReports();
      setData(response.data.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(searchParams.toString());
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
        {/* <tbody>
          {data &&
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
            ))}
        </tbody> */}
      </table>
    </>
  );
};

export default ReportMiniTable;
