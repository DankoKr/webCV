import { Link } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import ErrorPic from '../assets/images/error.png';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Sidebar />
          <Loader type='pacman' />{' '}
        </>
      ) : (
        <>
          <Sidebar />
          <div className='h-screen w-full flex flex-col justify-center items-center'>
            <img src={ErrorPic} className='animate__animated animate__zoomIn' />
            <button className='mt-5 mb-40'>
              <span className='relative block px-8 py-3 font-sans-serif text-white tracking-4px border-solid border-2 border-slate-900 hover:bg-[#ff8c42]'>
                <Link to='/'>HOME</Link>
              </span>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default NotFound;
