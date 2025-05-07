import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Trainings from './pages/Trainings';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/trainings',
    element: <Trainings />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]); 