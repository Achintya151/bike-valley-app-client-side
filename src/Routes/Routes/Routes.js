import { createBrowserRouter } from 'react-router-dom';
import DashboadLayout from '../../Layouts/Dashboard/DashboadLayout';
import Main from '../../Layouts/Main/Main';
import NotFoundPage from '../../Layouts/NotFoundPage/NotFoundPage';
import AboutPage from '../../Pages/About/AboutPage';
import Blogs from '../../Pages/Blogs/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import Signup from '../../Pages/Login/Signup/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboadLayout></DashboadLayout>
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])

export default router;