import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
AOS.init({
  duration: 1000,
});
const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' data-aos="fade-up-right">
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
