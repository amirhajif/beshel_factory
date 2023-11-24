import createTdFromObject from "@/utils/createTdFromObject";
const Table = ({ headers, datas }) => {
  return (
    <div className="overflow-x-scroll xs:w-[100%] w-[95%]">
      <table className="text-sm">
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
              key={item._id}
              className={`border-b dark:border-neutral-500 text-xs text-center ${
                index % 2 === 1 ? "bg-slate-300" : "bg-slate-100"
              }`}>
              {createTdFromObject(item, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
