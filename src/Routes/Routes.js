import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import PostDetails from "../Pages/Home/PostDetails";
import Media from "../Pages/Media/Media";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
            ,
            {
                path: '/media',
                element: <Media></Media>
            }
            ,
            {
                path: '/register',
                element: <Register></Register>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: `/postDetails/:id`,
                element: <PostDetails></PostDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/postDetails/${params.id}`)
            }
        ]
        
    }
])