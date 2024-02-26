import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

import AddOrderForm from "@/components/templates/Forms/AddOrderForm";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";

import getProjects from "@/apis/getProjects";
import getParts from "@/apis/getParts";
import getClients from "@/apis/getClients";

export const generateMetadata = async () => {
  return {
    title: "اضافه کردن سفارش",
    description: "اضافه کردن سفارش",
  };
};

const Addorder = async () => {
  const partsRequest = await getParts()
  const parts = partsRequest?.data?.data

  const clientsRequest = await getClients()
  const clients = clientsRequest?.data?.data

  const projectRequests = await getProjects()
  const projects = projectRequests?.data?.data


  return (
    <DashboardWrapper navItems={PlannerNavbarItems}>
      <DashboardContent>
        <AddOrderForm
          formClassName="w-full max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
          options={{ parts: parts, clients: clients, projects: projects }}
        />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default Addorder;
