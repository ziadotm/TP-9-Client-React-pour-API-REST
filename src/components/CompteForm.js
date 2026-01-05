import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm() {

  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: '' });


  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post(`${API_BASE_URL}/banque/comptes`, compte) 
      .then(response => {
        alert('Compte ajouté avec succès !');
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du compte :', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Type</label>
          <select
            name="type"
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">-- Choisir un type --</option>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;
