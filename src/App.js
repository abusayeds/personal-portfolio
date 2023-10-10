

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects'


function App() {
    const router =createBrowserRouter([
     {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
         path: 'about',
         element: <About></About>
        },
        {
          path: 'projects',
          element:<Projects></Projects>
        }

      ]
     }
    ])

  return (
    <div className='bg-gray-600 text-white '>
     <RouterProvider
     router={router}
     ></RouterProvider>
     
    </div>
  );
}

export default App;
