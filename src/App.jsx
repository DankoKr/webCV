import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/about' element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path='/projects'>
          <Route index element={<Projects />} />
        </Route>
        <Route path='/project-details/:projectId'>
          <Route index element={<ProjectDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
