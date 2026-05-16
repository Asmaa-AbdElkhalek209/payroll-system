import { Home, Users, Folder, Calendar, FileText } from "lucide-react";

export const sidebarMenu = [
  {
    key: "dashboard",
    icon: Home,
    href: "/dashboard",
  },

  {
    key: "employees",
    icon: Users,
    href: "/dashboard/employees",
  },

  {
    key: "payroll",
    icon: Folder,
    href: "/dashboard/payroll",
  },

  {
    key: "attendance",
    icon: Calendar,
    href: "/dashboard/attendance",
  },

  {
    key: "reports",
    icon: FileText,
    href: "/dashboard/reports",
  },
];
