import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";

import DashboardWrapper from "@/components/layouts/DashboardWrapper";
import AddOperatorForm from "@/components/templates/AddOperatorForm";
import AddProjectForm from "@/components/templates/AddProjectForm";

export const generateMetadata = async () => {
    return {
        title: "اضافه کردن پروژه",
        description: "اضافه کردن پروژه",
    };
};

const AddProject = async () => {
    return (
        <DashboardWrapper navItems={PlannerNavbarItems}>
            <DashboardContent>
                <AddProjectForm />
            </DashboardContent>
        </DashboardWrapper>
    );
};

export default AddProject;
