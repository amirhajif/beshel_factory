import QrCodeIcon from "@mui/icons-material/QrCode";
import RestoreIcon from "@mui/icons-material/Restore";
import PollIcon from "@mui/icons-material/Poll";
import HailIcon from "@mui/icons-material/Hail";

import { grey } from "@mui/material/colors";

export const UserNavbarItems = [
  {
    id: 1,
    link: "ایجاد کیوار",
    to: "/dashboard",
    icon: <QrCodeIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 2,
    link: "تاریخچه",
    to: "/dashboard/history",
    icon: <RestoreIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 3,
    link: "گزارشات",
    to: "/dashboard/reports",
    icon: <PollIcon sx={{ color: grey[50] }} />,
  },
  {
    id: 4,
    link: "مرخصی",
    to: "/dashboard/leavage",
    icon: <HailIcon sx={{ color: grey[50] }} />,
  },
];

export default UserNavbarItems;
