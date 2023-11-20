import AddBoxIcon from "@mui/icons-material/AddBox";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { grey } from "@mui/material/colors";

export const PlannerNavbarItems = [
  {
    id: 1,
    link: "گزارشات",
    to: "/planner",
    icon: <AssessmentIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 2,
    link: "افزودن سفارش",
    to: "/planner/addorder",
    icon: <AddBoxIcon sx={{ color: grey[50] }} />,
  },
];

export default PlannerNavbarItems;
