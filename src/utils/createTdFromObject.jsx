export const createTdFromObject = (
  object,
  index,
  speceficKey,
  speceficValue,
  className = "whitespace-nowrap px-6 py-4"
) => {
  let datas = [<td className={`${className} font-bold`}>{index + 1}</td>];

  for (const key in object) {
    if (key !== "id") datas.push(<td className={className}>{object[key]}</td>);
  }
  return datas;
};

export default createTdFromObject;
