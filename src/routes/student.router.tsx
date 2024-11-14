import OfferCourse from "../pages/Faculty/OfferCourse";
import StudentDashBoard from "../pages/Student/StudentDashBoard";

export const StudentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashBoard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Course",
        path: "Course",
        element: <OfferCourse />,
      },
    ],
  },
];
