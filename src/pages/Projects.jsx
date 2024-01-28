import Sidebar from '../components/SideBar';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project1',
      description: 'Loream.............',
      techStack: ['stack1', 'stack2'],
    },
    {
      id: 2,
      title: 'Project2',
      description: 'Loream.............',
      techStack: ['stack1', 'stack2'],
    },
    {
      id: 3,
      title: 'Project3',
      description: 'Loream.............',
      techStack: ['stack1', 'stack2'],
    },
  ];
  return (
    <div className='flex'>
      <div className='w-1/4'>
        <Sidebar />
      </div>
      <div className='w-3/4 flex flex-wrap gap-8 mt-20 mr-20'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4'
          >
            <img
              className='w-full'
              src='https://th.bing.com/th/id/OIP.zqlCSVVC-v0Hh0qs-q-eBwHaEK?rs=1&pid=ImgDetMain'
              alt='Sunset in the mountains'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{project.title}</div>
              <p className='text-gray-700 text-base'>{project.description}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
