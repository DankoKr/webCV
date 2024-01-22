import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/layouts/Layout';
//import SideBar from './components/SideBar';

function App() {
  return (
    <div className='flex'>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
