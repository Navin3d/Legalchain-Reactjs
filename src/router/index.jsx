import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignUPPage from "../pages/auth/SignUp.page";
import HomePage from "../pages/Home.page";
import DocListPage from "../pages/document/DocList.page";
import DocViewPage from "../pages/document/DocumentView.Page";


const router = createBrowserRouter([
    {
        path: "/auth/signup",
        element: <SignUPPage/>
    },
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/document",
        element: <DocListPage/>
    },
    {
        path: "/document/view",
        element: <DocViewPage/>
    }
]);

const Router = () => (
    <div>
        <RouterProvider router={router} />
    </div>
);

export default Router;
