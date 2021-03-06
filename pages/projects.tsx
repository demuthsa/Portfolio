import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height:'65vh'}}>
      

      <div className='relative grid grid-cols-12 gap-4 my-3'>
        {projects.map((project) => (
          <div className='col-span-12 p-2 bg-gray-200 rounded sm:col-span-6 lg:col-span-4 dark:bg-dark-200-lg'>
            <ProjectCard project={project} key={`${project.name}`} />
          </div>
        ))}
      </div>
    </div>
  ); 
};

export default Projects