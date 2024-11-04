import BabysitaVideo from '../assets/videos/Babysita video.mp4';
import BabysitaImage from '../assets/images/BABYSITA.png';
import EcuImage from '../assets/images/ecu.png';

const projects = [
  {
    id: 1,
    mainImage: EcuImage,
    title: 'ECU Intranet',
    techStack: ['#React', '#PostgreSQL', '#ExpressJS'],
    description:
      'This is a full-stack application I developed for the European Cheer Union (https://icueurope.org/). It serves as an administrative platform designed to manage community members and streamline document-related administrative tasks. NOTE: The source code shared here is not the final version!',
    video: null,
    sourceCodeURL: 'https://github.com/DankoKr/ecu',
  },
  {
    id: 2,
    mainImage: BabysitaImage,
    title: 'Babysita API',
    techStack: ['#Java Spring boot', '#MySQL', '#CI/CD'],
    description:
      'The Babysita API serves as the backbone for the Babysita Web platform. Developed during my third semester at Fontys, this project is written in Java and leverages the Spring Boot framework.Throughout the development process, I immersed myself in mastering both the intricacies of the Java language syntax and the Spring Boot framework. Notably, I implemented Object-Relational Mapping (ORM) using JPA to seamlessly interact with the MySQL database.The project is hosted on GitLab, where a robust CI/CD pipeline is in place. This pipeline ensures code quality through automated checks using SonarQube. Finally, a Docker image is generated and stored on Docker Hub, streamlining deployment processes. For further insights and instructions, please refer to the README file within the source code repository.',
    video: BabysitaVideo,
    sourceCodeURL: 'https://github.com/DankoKr/babysita',
  },
];

export default projects;
