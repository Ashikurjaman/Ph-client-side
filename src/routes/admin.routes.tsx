import { ReactNode } from "react";
import AdminDashBoard from "../pages/Admin/AdminDashBoard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element?: ReactNode;
};
type TSidebar = {
  key: string;
  label: ReactNode;
  children?: TSidebar[];
};
const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], items) => {
  if (items.path && items.element) {
    acc.push({
      path: items.path,
      element: items.element,
    });

    if (items.children) {
      acc.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
  }
  return acc;
}, []);

export const adminSideBar = adminPaths.reduce((acc: TSidebar[], items) => {
  if (items.path && items.name) {
    acc.push({
      key: items.name,
      label: <NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>,
    });
  }
  if (items.children) {
    acc.push({
      key: items.name,
      label: items.name,
      children: items.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);
