import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();
  return <h1>{projectId}</h1>;
};

export default ProjectDetails;
