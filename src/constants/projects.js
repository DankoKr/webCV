import OrdinaVideo from '../assets/videos/Ordina Web App.mp4';

const projects = [
  {
    id: 1,
    title: 'Babysita API',
    techStack: ['#Java Spring boot', '#MySQL', '#CI/CD'],
    description:
      'The Babysita API serves as the backbone for the Babysita Web platform. Developed during my third semester at Fontys, this project is written in Java and leverages the Spring Boot framework.Throughout the development process, I immersed myself in mastering both the intricacies of the Java language syntax and the Spring Boot framework. Notably, I implemented Object-Relational Mapping (ORM) using JPA to seamlessly interact with the MySQL database.The project is hosted on GitLab, where a robust CI/CD pipeline is in place. This pipeline ensures code quality through automated checks using SonarQube. Finally, a Docker image is generated and stored on Docker Hub, streamlining deployment processes. For further insights and instructions, please refer to the README file within the source code repository.',
    video: '',
    sourceCodeURL: 'https://git.fhict.nl/I500872/babysita',
  },
  {
    id: 2,
    title: 'Babysita Web',
    techStack: ['#React + Vite', '#CSS', '#JavaScript'],
    description:
      'This Frontend section complements the Babysita API, forming a key part of my first full-stack project undertaken during my third semester at Fontys. Built with React + Vite, it reflects my journey into full-stack development. I chose JSX files over pure JS for their readability and ease of maintenance, aligning with my coding preferences. The project aimed to seamlessly integrate a custom API with a user-friendly website. For further insights and instructions, please refer to the README file within the source code repository.',
    video: '',
    sourceCodeURL: 'https://git.fhict.nl/I500872/babysita-web',
  },
  {
    id: 3,
    title: 'Ordina Office',
    techStack: ['#TailwindCSS', '#React', '#NodeJs', '#MSAL'],
    description:
      'Ordina Office marked my debut in working with a real client, Ordina company, during my third semester at Fontys. As a full-stack platform, it allowed Ordina employees to manage office check-ins/outs and schedule meetings with colleagues. We adopted SCRUM methodology for development, with me serving as the SCRUM master. While the process had its challenges, we successfully delivered the Minimum Viable Product (MVP) on schedule. The project provided invaluable experience in fostering a productive work environment and engaging with clients directly. Contributing to both the API server and the website allowed me to hone my leadership and teamwork skills significantly.',
    video: OrdinaVideo,
    sourceCodeURL: 'https://www.ordina.com/',
  },
  {
    id: 4,
    title: 'BCU Website',
    techStack: ['#JavaScript', '#CSS', '#HTML'],
    description:
      'I was entrusted with designing the website for the Bulgarian Cheer Union. It serves as a static platform offering information about the union and a membership application. Future plans involve expanding its functionality to include a newsletter, distributing the latest news to subscribers. This project was particularly rewarding as it involved collaborating with a real client, representing my home country. Successfully completing the task resulted in the creation of the official website, accessible by clicking the button above.',
    video: '',
    sourceCodeURL: 'https://www.bulcu.eu/',
  },
  {
    id: 5,
    title: 'Study Fitness',
    techStack: ['#C#', '#Razor pages', '#MSSQL', '#Win Forms'],
    description:
      'Study Fitness stands as my inaugural significant project, crafted during my second semester at Fontys. Built with Razor pages and C#, it is a straightforward website boasting essential features like appointment scheduling with trainers and exercise sorting algorithms. One of its highlights is a quiz that provides personalized trainer recommendations upon completion. While the code may not be flawless, it marks the beginning of my coding journey, and I take pride in what I achieved with my initial knowledge. For further insights and instructions, please refer to the README file within the source code repository.',
    video: '',
    sourceCodeURL: 'https://git.fhict.nl/I500872/study-fitness',
  },
];

export default projects;
