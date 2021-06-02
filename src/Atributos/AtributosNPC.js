import React from 'react'
import CardAtributosNPC from '../CardAtributos/CardAtributosNPC';

function AtributosNPC({id, Força, Destreza, Carisma, Inteligencia, Constituicao, Poder, Sorte, Sanidade,
    Mira, Oficio, Percepcao, Lutar, PrimeirosSocorros, Vida, Adicionar, setAdicionar, nome, imagePath, vidaTotal, sanidadeMaxima}){
    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Atributos:</h1>
            </div>
            <CardAtributosNPC Atributo="Vida" Banco="vida" Value={Vida} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Sanidade" Banco="sanidade" Value={sanidadeMaxima} id={id} Adicionar={Adicionar} 
            setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal} sanidadeAtual={Sanidade}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Iniciativa" Banco="" Value={Destreza} id={id} Adicionar={Adicionar}
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Carisma" Banco="carisma" Value={Carisma} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Constituição" Banco="constituicao" Value={Constituicao} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Destreza" Banco="destreza" Value={Destreza} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Força" Banco="força" Value={Força} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Inteligência" Banco="inteligencia" Value={Inteligencia} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Poder" Banco="poder" Value={Poder} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Sorte" Banco="sorte" Value={Sorte} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style ={{paddingBottom:'20px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Perícias:</h1>
            </div>
            <CardAtributosNPC Atributo="Lutar/Briga" Banco="lutar" Value={Lutar} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Mira" Banco="mira" Value={Mira} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Ofício" Banco="oficio" Value={Oficio} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Percepção" Banco="percepcao" Value={Percepcao} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Primeiros Socorros" Banco="primeiros_socorros" Value={PrimeirosSocorros} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributosNPC>
        </div>
    );
}

export default AtributosNPC;