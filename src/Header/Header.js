import React, {useState, useEffect} from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ConstanteDataService from '../Services/ConstantesService.js';

function Header(){

  const [totalArco1, setTotalArco1] = useState(0);

  useEffect(() => {
    retrieveTotalArco1();
  }, []);

  const retrieveTotalArco1 = () => {
    ConstanteDataService.getConstante("arco1_total")
    .then((response) => {
      setTotalArco1(response.data[0]);
    })
    .catch((e) => {
    console.log(e);
    });
  };

    return(
        <header className="Header">
          <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
          <Link style={{textDecoration: 'none'}} to="/">
            <p style ={{color: '#fff', marginBottom: '10px'}}>{`OS PROTETORES DE DORET`}</p>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/">
            <p style ={{color: '#fff',  marginBottom: '10px'}}>{`ARCO 1: SESSÃO ${totalArco1.value}`}</p>
          </Link>
          </div>
        </header>
    );
}

export default Header;