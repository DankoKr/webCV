import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';

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
      </Routes>
    </div>
  );
}

export default App;
