import { useLocation } from 'react-router-dom';
import Sidebar from '../components/SideBar';

const ProjectDetails = () => {
  const location = useLocation();
  const projectTitle = location.state?.project.title;
  return (
    <div className='flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex-1 p-4 lg:p-8'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center'>
            <img
              src='https://th.bing.com/th/id/OIP.PMZOBM52_L1UFP_8Ag3WNAHaEo?rs=1&pid=ImgDetMain'
              alt='Big Picture'
              className='mx-auto rounded-lg'
            />
          </div>
          <a
            href='#'
            className='inline-flex items-center mt-4 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
          >
            Source Code
            <svg
              className='w-3.5 h-3.5 ms-2 mt-0.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>

          <h2 className='mt-4 text-3xl font-semibold text-white'>
            {projectTitle}
          </h2>
          <p className='mt-2 text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
