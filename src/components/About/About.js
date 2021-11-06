import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { FaAngellist } from 'react-icons/fa'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}


      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <img className='avatar' src="https://cdn.discordapp.com/attachments/906292935765667874/906301075903119370/IMG_4244.jpeg" alt="jordan guevara avatar" />
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
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
              className='link link--icon first--link'
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

            {social.angellist && (
              <a
              href={social.angellist}
              aria-label='angellist'
              className='link link--icon'
              >
                <FaAngellist />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
