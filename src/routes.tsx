import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GameDetailPage from "./pages/GameDetailPage";
import Error from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'games/:id', element: <GameDetailPage /> },
            
            
        ]
    
        

        

    }
])

export default router