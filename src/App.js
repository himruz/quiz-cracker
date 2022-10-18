
import './App.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Statics from './Components/Statics/Statics';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Quiz from './Components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
     children:[
      {path:'/',
      loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>},
      {path:'/home',
      loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<Home></Home>},
      {path:'/home/:quizId',
      loader: async ({params}) =>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<Quiz></Quiz>},
      {path:'/statics',
      loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
       element:<Statics></Statics>},
      {path:'/blog', element:<Blog></Blog>}
     ]
    },
    {path:'*', element: <NotFound></NotFound>}
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
