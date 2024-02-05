import { useLocation } from 'react-router-dom';
import Sidebar from '../components/SideBar';

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;
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
              <source src={project.video} type='video/mp4' />
            </video>
          </div>
          <a
            href={project.sourceCodeURL}
            className='inline-flex items-center mt-4 px-5 py-2.5 text-sm font-sans-serif tracking-4px text-center text-white border-solid border-2 border-slate-900 hover:bg-[#ff8c42]'
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
            {project.title}
          </h2>
          <p className='mt-2 text-lg'>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
