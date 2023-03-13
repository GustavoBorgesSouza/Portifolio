import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import '../assets/styles/components/socialNetworks.sass';

const socialNetworks = [
    {name: 'github', icon: <FaGithub/>, link: 'https://github.com/GustavoBorgesSouza'},
    {name: 'linkedin', icon: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/gustavoborgessouza/'},
]

export default function SocialNetworks(){

    return(
        <section id='social-networks'>
            {
                socialNetworks.map((network)=>(
                    <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                        {network.icon}
                    </a>
                ))
            }
        </section>
    )
}