import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiSass,
    DiNodejsSmall,
    DiDotnet,
    DiMsqlServer
} from 'react-icons/di'

import '../assets/styles/components/technologiesContainer.sass'

export default function TechnologiesContainer(){

    const technologies = [
        {id: 'html', name: 'HTML5', icon: <DiHtml5/>},
        {id: 'css', name: 'CSS3', icon: <DiCss3/>},
        {id: 'js', name: 'Javascript', icon: <DiJsBadge/>},
        {id: 'react', name: 'React.js', icon: <DiReact/>},
        {id: 'sass', name: 'Sass', icon: <DiSass/>},
        {id: 'node', name: 'Node.js', icon: <DiNodejsSmall/>},
        {id: 'dotnet', name: '.Net', icon: <DiDotnet/>},
        {id: 'sqlserver', name: 'SQLSERVER', icon: <DiMsqlServer/>},
    ]

    return(
        <section id='' className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {
                    technologies.map((tech) =>(
                        <div className="technology-card" id={tech.id} key={tech.id}>
                            {tech.icon}
                            <div className="technology-info">
                                <h3>{tech.name}</h3>
                                <p>oi</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}