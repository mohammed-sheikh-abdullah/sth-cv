import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Trainings from './pages/Trainings';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'trainings',
        element: <Trainings />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]); 