import Button from "@/components/shared/Button";
export const createTdFromObject = (
  object,
  index,
  speceficKey = null,
  speceficValue = null,
  speceficComponent,
  className = "whitespace-nowrap px-6 py-4"
) => {
  let datas = [<td className={`${className} font-bold`}>{index + 1}</td>];
  for (const key in object)
    if (key === speceficKey && object[key] === speceficValue)
      datas.push(
        <td className={className}>
          {object[key] && (
            <>
              {object[key]}
              <br />
            </>
          )}
          <p className="flex justify-center items-center gap-5 mt-2">
            {speceficComponent}
          </p>
        </td>
      );
    else datas.push(<td className={className}>{object[key]}</td>);

  return datas;
};

export default createTdFromObject;
