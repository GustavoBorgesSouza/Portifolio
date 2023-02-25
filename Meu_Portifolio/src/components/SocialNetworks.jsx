import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import '../assets/styles/components/socialNetworks.sass';

const socialNetworks = [
    {name: 'github', icon: <FaGithub/>, link: 'oi'},
    {name: 'linkedin', icon: <FaLinkedinIn/>, link: 'olá'},
]

export default function SocialNetworks(){

    return(
        <section id='social-networks'>
            {
                socialNetworks.map((network)=>(
                    <a href='#' className='social-btn' id={network.name} key={network.name}>
                        {network.icon}
                    </a>
                ))
            }
        </section>
    )
}