import { createBrowserRouter } from "react-router-dom";
import SignUp from "../component/SignUp";
import Home from "../component/Home";
import About from "../component/About";
import Login from "../component/Login";

import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "about",
                element: <About />

            },


            {
                path: 'login',
                element: <Login />

            }


        ]
    }
])


export default router