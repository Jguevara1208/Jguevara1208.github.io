import './AboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const AboutMe = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div data-aos='fade-up-left' className='about-me center' id='about'>
            <h2>About Me</h2>
            <div className='about-me__content'>
                <div className='bio'>
                    <div className=''>
                        <p>
                        <span className='span-color'>Software Engineer</span>  based in the Bay Area. I have a found passion and dedicated enthusiasm for all things programming and learning. Simply put, I love coding. The unending stream of  <span className='span-color'>innovative technologies and information</span> . The exitement after finding the source of that pesky error you've been staring at <span className='span-color'>for just the right amount of time</span>. The creativity and balance of refactoring unpolished code to something informative, readable, and clever.
                        </p>
                        <p>
                            Formerly I was an <span className='span-color'>award winning Chef with over 13 years of experience in the industry</span>. I've managed some of the most renowned restaurants in California, and was an integral part of <span className='span-color'>Team USA for the 2019 Bocuse d'Or</span> .
                        </p>
                        <p>
                            I pride myself on being prompt, organized, quality question asking, and working well with a team. I have pronounced experience with <span className='span-color'>Javascript, React, Redux, Node.js, Python, and Flask</span> .
                        </p>
                    </div>
                </div>
                <img className='avatar' src="https://cdn.discordapp.com/attachments/906292935765667874/906301075903119370/IMG_4244.jpeg" alt="" />
            </div>
        </div>
    );
};

export default AboutMe