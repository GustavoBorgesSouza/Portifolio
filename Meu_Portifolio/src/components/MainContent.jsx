import '../assets/styles/components/mainContent.sass'

import TechnologiesContainer from './TechnologiesContainer'

export default function MainContent() {

    return (
        <main id='main-content'>
            <section className='about-container'>
                <h2>Sobre</h2>
                <p>texto sobre mim.</p>
            </section>

            <TechnologiesContainer />

            <section className='projects-container'>
                <h2>Projetos</h2>
                <a href='#' className='btn'>Projetos</a>
            </section>
        </main>
    )
}