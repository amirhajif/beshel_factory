import createTdFromObject from "@/utils/createTdFromObject";
import ReportStatus from "@/constants/ReportStatus";
import Button from "@/components/shared/Button";
import Filter from "@/components/shared/Filter";

const ReportMiniTable = ({ headers, datas, callback }) => {
  return (
    <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
      <Filter />

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
              key={item.id}
              className={`border-b dark:border-neutral-500 text-xs text-center ${
                index % 2 === 1 ? "bg-slate-300" : "bg-slate-100"
              }`}>
              {createTdFromObject(
                item,
                index,
                "dummy",
                "",
                <Button onClickCallback={() => callback(item)}>
                  مشاهده گزارش
                </Button>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportMiniTable;
