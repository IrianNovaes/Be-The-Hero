import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api.js';

import './style.css';

import logoImg from '../../assets/logo.svg';
import { FiPower , FiTrash2 } from 'react-icons/fi';


export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    
    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
          await api.delete(`incidents/${id}`, {
            headers: {
              Authorization: ongId,
            }
          });
    
          setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
          alert('Error, We were not able to delete this incident.');
        }
      }

      function handleLogout () {
        localStorage.clear();
    
        history.push('/');
      }
    
      
    return(
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be The Hero"/>
                <span> Welcome, {ongName} </span>
                
                <Link to="/incident/new" className="button">
                        Log a new incident
                </Link>

                <button onClick={handleLogout} type="button">
                    <FiPower/>
                </button>
            </header>

            <h1> Your logged incidents </h1>

            <ul>
                 
            { incidents.map(incident => (
              <li key={incident.id}>
                    <strong>Incident:</strong>
                        <p>{incident.title}</p>
        
                    <strong>Description:</strong>
                        <p>{incident.description}</p>
        
                    <strong>Value:</strong>
                        <p>{incident.value}</p>
        
                    <button onClick={() => handleDeleteIncident(incident.id)}type="button">
                    <FiTrash2 />
                    </button>
              </li> 
            )) }
               
            </ul>
        </div>
    ); 
}
