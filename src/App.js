import './App.css';
import './TelaAcesso/TelaAcesso.js'

import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import React, {useState, useEffect} from 'react';
import AtributesDataService from './Services/AtributesService.js';
import ConstanteDataService from './Services/ConstantesService.js';
import CardPersonagem from './CardPersonagem/CardPersonagem';


function App() {
  const [playersAtribute, setPlayersAtribute] = useState([]);
  const [value, setValue] = useState(0);
  const [tamanhoPagina, setTamanhoPagina] = useState(0);
  
  useEffect(() => {
    retrievePoints();
  }, []);

  useEffect(() => {
    retrieveAtributes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      retrieveAtributes();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const retrievePoints = () => {
    ConstanteDataService.getConstante("tamanhoPagina")
    .then((response) => {
      setTamanhoPagina(response.data[0].value);
    })
    .catch((e) => {
    console.log(e);
    });
};

  useEffect(() => {
    const interval = setInterval(() => {
      retrieveAtributes();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const retrieveAtributes = () => {
    AtributesDataService.getPlayers()
    .then((response) => {

    var data = response.data.sort((a,b) => {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    setPlayersAtribute(data);
    })
    .catch((e) => {
    console.log(e);
    });
};

  return (
    <div className="App">
      <Header></Header>
      <body>
        <div>
          <h1 style ={{paddingTop:'20px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Personagens:</h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px'}}>
          <div style={{display: 'block' ,justifyContent: 'space-between', maxWidth: `${tamanhoPagina}%`}}>
              {playersAtribute == null ? 'Carregando' :  playersAtribute.map((player, index) => {
                if(!player.mostrar_tela){
                  return;
                }
                return (
                  <div style={{display: 'inline-flex', paddingLeft: '30px', marginBottom: '50px'}}>
                    <Link style={{textDecoration: 'none',  color: 'inherit' }} to={`/personagens/${player.nome.replace(/\s/g, '')}`}>
                      <CardPersonagem Atributes={player}></CardPersonagem>    
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
