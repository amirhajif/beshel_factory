import Button from "@/components/shared/Button";
export const createTdFromObject = (
  object,
  index,
  speceficKey = null,
  speceficValue = null,

  className = "whitespace-nowrap px-6 py-4"
) => {
  let datas = [<td className={`${className} font-bold`}>{index + 1}</td>];

  for (const key in object)
    if (key === speceficKey && object[key] === speceficValue)
      datas.push(
        <td className={className}>
          {object[key]} <br />
          <p className="flex gap-5 mt-2">
            <Button>تایید</Button>
            <Button>رد</Button>
          </p>
        </td>
      );
    else datas.push(<td className={className}>{object[key]}</td>);

  return datas;
};

export default createTdFromObject;
