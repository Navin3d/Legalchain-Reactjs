import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUPPage from "../pages/auth/SignUp.page";
import HomePage from "../pages/Home.page";
import DocListPage from "../pages/document/DocList.page";
import DocViewPage from "../pages/document/DocumentView.Page";
import DocUploadPage from "../pages/document/DocUpload.page";
import Loginpage from "../pages/auth/Loginpage";
import Loadingscreen from "../pages/document/Loading"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import SimpleDialogDemo from "../components/SimpleDialogDemo";
import MyDocpage from "../pages/document/MyDocpage";

const router = createBrowserRouter([
    {
        path: "/auth/signup",
        element: <SignUPPage/>
    },
    {
        path: "/auth/login",
        element: <Loginpage/>
    },
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/loading",
        element: <Loadingscreen/>
    },
    {
        path: "/document",
        element: <DocListPage/>
    },
    {
        path: "/upload",
        element: <DocUploadPage/>
    },
    {
        path: "/document/view",
        element: <DocViewPage/>
    },
    {
        path: "/mydocs",
        element: <MyDocpage/>
    },

]);

const Router = () => (
    <div>
        <Navbar/>
        <RouterProvider router={router} />
        <Footer/>
    </div>
);

export default Router;

    