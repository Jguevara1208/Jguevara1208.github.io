import { useEffect } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { FaAngellist } from 'react-icons/fa'
import { about } from '../../portfolio'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div data-aos='fade-up' className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}


      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact center'>
        {resume && (
          <a href='/Guevara_Jordan_Resume.pdf' target='_blank'>
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
              target='_blank'
              rel='noreferrer'
              aria-label='github'
              className='link link--icon first--link'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
              href={social.linkedin}
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
              className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.angellist && (
              <a
              href={social.angellist}
              target='_blank'
              rel='noreferrer'
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
