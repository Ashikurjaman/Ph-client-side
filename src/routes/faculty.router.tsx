import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferCourse from "../pages/Faculty/OfferCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Offer Course",
        path: "offerCourse",
        element: <OfferCourse />,
      },
    ],
  },
];
