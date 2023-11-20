import AssessmentIcon from "@mui/icons-material/Assessment";
import { grey } from "@mui/material/colors";

export const SupervisorNavbarItems = [
  {
    id: 1,
    link: "گزارشات",
    to: "/supervisor",
    icon: <AssessmentIcon sx={{ color: grey[50] }} />,
  },
];

export default SupervisorNavbarItems;
