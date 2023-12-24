import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/login", element: <LoginPage /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "users",
                element: <UserPage />,
                children: [{ path: ":id", element: <UserDetail /> }],
            },
        ],
    },
]);

export default router;
