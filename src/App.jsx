import React, { useState } from 'react';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Trainings from './pages/Trainings';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'trainings':
        return <Trainings />;
      case 'contact':
        return <Contact />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default App; 