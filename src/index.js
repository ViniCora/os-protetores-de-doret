import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Personagem from './PersonagensPaginas/Personagem';
import NPC from './PersonagensPaginas/NPC';
import AtributesDataService from './Services/AtributesService.js';
import NPCDataService from './Services/NpcService.js';
import CadPlayer from './CadPersonagem/CadPlayer.js';
import CadNPC from './CadPersonagem/CadNPC.js';
import DistribuirPontos from './DistribuirPontos/DistribuirPontos';
import Iniciativa from './Iniciativa/Iniciativa';
import TelaRolls from './TelaRolls/TelaRolls.js';
import Mestre from './Mestre/Mestre';
import Monstros from './MonstrosPagina/Monstros.js';
import Tarot from './TarotPagina/Tarot.js';
import PersonagensNPC from './PersonagensNPC/PersonagensNPC.js';
import TierList from './TierList/TierList';
import ImagensItensSessao01 from './ImagensItens/ImagensItensSessao01';
import ImagensItensSessao02 from './ImagensItens/ImagensItensSessao02';
import ImagensItensSessao03 from './ImagensItens/ImagensItensSessao03';

window.onload = function(){
  AtributesDataService.getPlayers()
        .then((response) => {
        const dataPlayer = response.data;
        NPCDataService.getNPC()
        .then((response) => {
          const dataNPC = response.data;
          
        ReactDOM.render(
          <BrowserRouter>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/cadastrarPersonagem" component={CadPlayer} exact />
            <Route path="/cadastrarNPC" component={CadNPC} exact />
            <Route path="/distribuirPontos" component={DistribuirPontos} exact />
            <Route path="/iniciativa" component={Iniciativa} exact />
            <Route path="/rolls" component={TelaRolls} exact />
            <Route path="/Mestre" component={Mestre} exact />
            <Route path="/Monstros" component={Monstros} exact />
            <Route path="/Personagens" component={PersonagensNPC} exact />
            <Route path="/Tarot" component={Tarot} exact />
            <Route path="/ItensSessao01" component={ImagensItensSessao01} exact />
            <Route path="/ItensSessao02" component={ImagensItensSessao02} exact />
            <Route path="/ItensSessao03" component={ImagensItensSessao03} exact />
            {dataPlayer == null ? '' :  dataPlayer.map((d, index) => {

              return (
                <Route path={dataPlayer == null ? '' : `/personagens/${d.nome.replace(/\s/g, '')}`}>
                  <Personagem Nome={dataPlayer == null ? 'Luis Garcia Do Nascimento' : `${d.nome}`}></Personagem></Route>
              );
              })}
            {dataNPC == null ? '' :  dataNPC.map((dn, index) => {

              return (
                <Route path={dataNPC == null ? '' : `/npc/${dn.nome.replace(/\s/g, '')}`}>
                  <NPC Nome={dataNPC == null ? 'Luis Garcia Do Nascimento' : `${dn.nome}`}></NPC></Route>
              );
              })}
          </Switch>
        </BrowserRouter>,
          document.getElementById('root')
        );
        }).catch((e) => {
          console.log(e);
          });
        })
        .catch((e) => {
        console.log(e);
        });
}