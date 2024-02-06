import Loader from 'react-loaders';
import Sidebar from '../components/SideBar';
import { useEffect, useState } from 'react';
import projects from '../constants/projects';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
          <Loader type='pacman' />
        </>
      ) : (
        <div className='flex'>
          <div className='w-1/4'>
            <Sidebar />
          </div>
          <div className='w-3/4 flex flex-wrap gap-8 mt-20 mr-20 mb-5'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`max-w-sm rounded overflow-hidden bg-zinc-200 shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 animate__animated ${
                  index % 2 === 0
                    ? 'animate__fadeInLeft'
                    : 'animate__fadeInRight'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  className='w-full h-40 hover:scale-105 cursor-pointer'
                  src={project.mainImage}
                  alt='project picture'
                  onClick={() => {
                    navigate('/project-details', {
                      state: { project: project },
                    });
                  }}
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl'>{project.title}</div>
                </div>
                <div className='px-6 pt-1 pb-2'>
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className='inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2'
                    >
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
