import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Users } from "./pages/Users";
import { Giris } from "./pages/Giris";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Giris />,
            },
            {
                path: '/kullanicilar',
                element: <Users/>,
            },
        ]
    }
])