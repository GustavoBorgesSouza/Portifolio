import FotoPerfil from '../assets/img/GustavoBorgesFoto.jpg';
import '../assets/styles/components/sidebar.sass';

import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

export default function Sidebar(){

    return(
        <aside id="sidebar">
            <img src={FotoPerfil} alt="Foto do gustavo borges" />
            <p className="title">Desenvolvedor Fullstack</p>
            <SocialNetworks />
            <InformationContainer/>
            <a href="" className="btn" >
                Download Currículo
            </a>
        </aside>
    )
}