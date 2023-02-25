import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

import '../assets/styles/components/informationContainer.sass';

export default function InformationContainer() {

    return (
        <section id='information'>

            <div className='info-card'>
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(11)954680453</p>
                </div>
            </div>

            <div className='info-card'>
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>Email</h3>
                    <p>sgustavo.borges10@gmail.com</p>
                </div>
            </div>
            
        </section>
    )
}