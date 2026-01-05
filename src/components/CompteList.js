import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteList() {
  const [comptes, setComptes] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/banque/comptes`)
      .then(response => {
        console.log("Données reçues :", response.data);
        setComptes(response.data);
      })
      .catch(error => console.error("Erreur GET :", error));
  }, []);


}

export default CompteList;
