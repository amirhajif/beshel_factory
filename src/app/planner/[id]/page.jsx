export const generateMetadata = async ({ params }) => {
  const { id } = params || "";

  return {
    title: `گزارش شماره ${id}`,
    description: `گزارش شماره ${id}`,
  };
};

const Report = async ({ params }) => {
  const { id } = params || "";
  return <div>page with id {id}</div>;
};

export default Report;
