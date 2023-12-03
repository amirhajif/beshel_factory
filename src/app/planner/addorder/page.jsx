"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

import AddOrderFormFields from "@/models/AddOrderFormFields";
import AddOrderForm from "@/components/templates/Forms/AddOrderForm";

import AddOrderSelects from "@/constants/AddOrderSelects";

const Addorder = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <AddOrderForm
            formClassName="w-full max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
            selects={AddOrderSelects}
          />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <AddOrderForm
            formClassName="w-full max-w-lg flex gap-y-3 flex-wrap -mx-3 mb-6"
            selects={AddOrderSelects}
          />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider >
  );
};

export default Addorder;


