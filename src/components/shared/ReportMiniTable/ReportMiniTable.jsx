import createTdFromObject from "@/utils/createTdFromObject";
import Button from "@/components/shared/Button";
import Link from "next/link";
const ReportMiniTable = ({ headers, datas, baseRoute }) => {
  return (
    <>
      <table className="text-sm w-[100%]">
        <thead className="border-b dark:border-neutral-500 text-slate-50 bg-slate-500">
          <tr className="text-center">
            {headers.map((item) => (
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
          {datas.map((item, index) => (
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
        </tbody>
      </table>
    </>
  );
};

export default ReportMiniTable;
