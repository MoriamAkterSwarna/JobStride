import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import EditJob from "./pages/EditJob";
import AddJob from "./pages/AddJob";
import MainLayout from "./Layout/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
    path: "/job/:id",
    element: <JobDetails />,
  },
  {
    path: "/edit-job/:id",
    element: <EditJob />,
  },
  {
    path: "/add-job",
    element: <AddJob />,
  },
    ]
  },
  
]);