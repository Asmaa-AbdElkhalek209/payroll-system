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
    href: "/employees",
  },

  {
    key: "payroll",
    icon: Folder,
    href: "/payroll",
  },

  {
    key: "attendance",
    icon: Calendar,
    href: "/attendance",
  },

  {
    key: "reports",
    icon: FileText,
    href: "/reports",
  },
];
