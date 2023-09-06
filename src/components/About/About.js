import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import profileImg from '../../images/vismay.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
AOS.init({
  duration: 1200,
});

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center' data-aos="fade-up">
      <div> 
      <img src={profileImg} alt="Avatar" style={{width:"150px", borderRadius:"50%"}}/>
      </div>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} download={resume} target="_blank">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
