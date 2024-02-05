import { useLocation } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import Video from '../assets/images/Ordina Web App.mp4';

const ProjectDetails = () => {
  const location = useLocation();
  const projectTitle = location.state?.project.title;
  return (
    <div className='flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex-1 p-4 lg:p-8 animate__animated animate__zoomIn'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center'>
            <video
              width='600'
              height='400'
              controls
              className='mx-auto rounded-lg'
            >
              <source src={Video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <a
            href='#'
            className='inline-flex items-center mt-4 px-5 py-2.5 text-sm font-sans-serif tracking-4px text-center text-white border-solid border-2 border-slate-900 hover:bg-[#ff8c42]'
            // <span className='font-sans-serif tracking-4px'>
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
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
