import createTdFromObject from "@/utils/createTdFromObject";
import ReportStatus from "@/constants/ReportStatus";
import Button from "@/components/shared/Button";

const SupervisorTable = ({ headers, datas, callback }) => {
  return (
    <div className="costume-scroll overflow-scroll xs:w-[100%] w-[95%] h-[90%]">
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
                "status",
                ReportStatus?.Pending,
                <span className="flex gap-4">
                  <Button
                    onClickCallback={() => callback(ReportStatus?.Accepted)}>
                    تایید
                  </Button>
                  <Button
                    onClickCallback={() => callback(ReportStatus?.Rejected)}>
                    رد
                  </Button>
                </span>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupervisorTable;
