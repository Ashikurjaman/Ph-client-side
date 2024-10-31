import AdminDashBoard from "../pages/Admin/AdminDashBoard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashBoard />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
];
