import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

//icon
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './style.css';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        
        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data,{
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');

        } catch(err){
            alert('Error, Please try again.')
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Log a New Incident</h1>

                    <p> Detail your incident in order to locate a hero to help you.</p>

                    <Link to="/profile" className="back-link">
                        < FiArrowLeft size={16} color="#e02041"/>
                        Go Back
                    </Link>
               
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Title"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    />
                        
                    <textarea 
                        placeholder="Description"
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Amount USD"
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                    />

                                       
                    <button className="button" type="submit"> Log It </button>
                </form>
            </div>
        </div>
    );
} 