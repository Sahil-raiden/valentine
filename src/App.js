import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Yes from './components/yes'
import RootLayout from "./components/RootLayout";


function App() {
    let router = createBrowserRouter([
        {
            path: '/valentine',
            element: <RootLayout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                  path: 'yes',
                  element :<Yes />
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;