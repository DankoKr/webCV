import Loader from 'react-loaders';
import Sidebar from '../components/SideBar';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const projects = [
    {
      id: 1,
      title: 'Project18888888888888',
      techStack: ['stack1', 'stack2'],
    },
    {
      id: 2,
      title: 'Project2',
      techStack: ['stack1', 'stack2'],
    },
    {
      id: 3,
      title: 'Project3',
      techStack: ['stack1', 'stack2', 'stack3', 'stack4'],
    },
    {
      id: 4,
      title: 'Project1',
      techStack: ['stack1', 'stack2'],
    },
    {
      id: 5,
      title: 'Project2',
      techStack: ['stack1', 'stack2'],
    },
  ];

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
            {projects.map((project) => (
              <div
                key={project.id}
                className='max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4'
              >
                <img
                  className='w-full'
                  src='https://th.bing.com/th/id/OIP.zqlCSVVC-v0Hh0qs-q-eBwHaEK?rs=1&pid=ImgDetMain'
                  alt='project picture'
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl'>{project.title}</div>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
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
