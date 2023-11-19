import RestoreIcon from "@mui/icons-material/Restore";
import PollIcon from "@mui/icons-material/Poll";
import HailIcon from "@mui/icons-material/Hail";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { grey } from "@mui/material/colors";

export const AdminNavbarItems = [
  {
    id: 1,
    link: "تاریخچه",
    to: "/panel",
    icon: <RestoreIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 2,
    link: "گزارشات",
    to: "/panel/reports",
    icon: <PollIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 3,
    link: "افزودن کاربر",
    to: "/panel/add-user",
    icon: <PersonAddIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 4,
    link: "مرخصی ها",
    to: "/panel/leavage",
    icon: <HailIcon sx={{ color: grey[50] }} />,
  },
];

export default AdminNavbarItems;
