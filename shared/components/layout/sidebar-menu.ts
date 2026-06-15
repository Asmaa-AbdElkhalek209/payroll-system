import {
  LayoutDashboard,
  Users,
  Folder,
  CalendarDays,
  FileBarChart,
  Settings,
} from "lucide-react";

export type UserRole = "HR" | "Employee";

export const sidebarConfig = {
  HR: [
    {
      label: "Dashboard",
      href: "/hr",
      icon: LayoutDashboard,
    },
    {
      label: "Employees",
      href: "/hr/employees",
      icon: Users,
    },
    {
      label: "Payroll",
      href: "/hr/payroll",
      icon: Folder,
    },
    {
      label: "Attendance",
      href: "/hr/attendance",
      icon: CalendarDays,
    },
    {
      label: "Reports",
      href: "/hr/reports",
      icon: FileBarChart,
    },
    {
      label: "Settings",
      href: "/hr/settings",
      icon: Settings,
    },
  ],

  Employee: [
    {
      label: "Dashboard",
      href: "/employee",
      icon: LayoutDashboard,
    },
    {
      label: "My Attendance",
      href: "/employee/attendance",
      icon: CalendarDays,
    },
    {
      label: "My Payroll",
      href: "/employee/profile",
      icon: Users,
    },
  ],
};
