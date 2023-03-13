import '../assets/styles/components/mainContent.sass'

import TechnologiesContainer from './TechnologiesContainer'

export default function MainContent() {

    return (
        <main id='main-content'>
            <section className='about-container'>
                <h2>Sobre</h2>
                <p>Formado em Técnico em Desenvolvimento de Sistemas no SENAI Informática, com meu entusiasmo por tecnologia e motivação a resolver desafios sigo em busca dos próximos níveis desenvolvendo Aplicações web, Aplicativos Mobile, Bancos de dados e APIs REST.</p>
                <br />
                <p>Ofereço com excelência e disciplina meus conhecimentos, sempre estudando e aprendendo, proativo com foco e bom relacionamento de equipe.</p>
                <q>Quem sabe sabe, quem não sabe aprende!</q>

            </section>

            <TechnologiesContainer />

            <section className='projects-container'>
                <h2>Projetos</h2>
                <a href='#' className='btn'>Projetos</a>
            </section>
        </main>
    )
}