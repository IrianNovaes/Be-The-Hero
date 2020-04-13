//react
import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

//icon
import { FiLogIn } from 'react-icons/fi';

//styles
import './styles.css';

//images
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

//login
export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory(); 
    
        async function handleLogin(e){
            e.preventDefault();
    
    
            try{
                const response = await api.post('sessions', {id});
                
                localStorage.setItem('ongId', id);
                localStorage.setItem('ongName', response.data.name);
                history.push('/profile');
        }catch (err){
           alert('Error, please try again');
        }    
        }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input 
                        placeholder="Your ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Login</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041"/>
                        Sign up
                    </Link>
                </form>



            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}