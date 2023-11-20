import AddchartIcon from "@mui/icons-material/Addchart";
import { grey } from "@mui/material/colors";

export const OperatorNavbarItems = [
  {
    id: 1,
    link: "افزودن گزارش",
    to: "/operator",
    icon: <AddchartIcon sx={{ color: grey[50] }} />,
  },
];

export default OperatorNavbarItems;
