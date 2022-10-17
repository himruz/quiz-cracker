
import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
     children:[
      {path:'/', element:<Home></Home>},
      {path:'/statics', element:<Statics></Statics>},
      {path:'/blog', element:<Blog></Blog>}
     ]
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
