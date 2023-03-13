import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

import '../assets/styles/components/informationContainer.sass';

export default function InformationContainer() {

    return (
        <section id='information'>

            <div className='info-card'>
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <a href="tel:(11)954680453">(11) 954680453</a>
                </div>
            </div>

            <div className='info-card'>
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>Email</h3>
                    <a href="mailto:sgustavo.borges10@gmail.com">sgustavo.borges10@gmail.com</a>
                </div>
            </div>
            
        </section>
    )
}