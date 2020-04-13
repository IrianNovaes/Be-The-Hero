import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

//icon
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
       
        const data = ({
            name, 
            email,
            whatsapp,
            city,
            uf,
        });


        try{
            const response = await api.post('ongs', data);
        alert(`Your access ID is: ${response.data.id}`);
            history.push('/');
    }catch (err){
        alert('Error, Please try again.');
    }    
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Sign Up</h1>

                    <p> Sign up and let us help you to help others.</p>

                    <Link to="/" className="back-link">
                        < FiArrowLeft size={16} color="#e02041"/>
                        Login
                    </Link>
               
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="ONG's Name"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={ e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={ e => setCity(e.target.value)} 
                        /> 
                        <input 
                            placeholder="FU"
                            value={uf}
                            onChange={ e => setUf(e.target.value)}
                        /> 
                    </div>
                    
                    <button className="button"> Sign Up </button>
                </form>
            </div>
        </div>
    )
}