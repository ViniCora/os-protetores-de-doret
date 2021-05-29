import React from 'react'
import CardAtributos from '../CardAtributos/CardAtributos';

function Atributos({id, Força, Destreza, Carisma, Inteligencia, Constituicao, Poder, Sorte, Sanidade,
    Mira, Oficio, Percepcao, Lutar, PrimeirosSocorros, Vida, Adicionar, setAdicionar, nome, imagePath, vidaTotal, sanidadeMaxima}){
    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Atributos:</h1>
            </div>
            <CardAtributos Atributo="Vida" Banco="vida" Value={Vida} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Sanidade" Banco="sanidade" Value={sanidadeMaxima} id={id} Adicionar={Adicionar} 
            setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal} sanidadeAtual={Sanidade}></CardAtributos>
            <CardAtributos Atributo="Iniciativa" Banco="" Value={Destreza} id={id} Adicionar={Adicionar}
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Carisma" Banco="carisma" Value={Carisma} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Constituição" Banco="constituicao" Value={Constituicao} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Destreza" Banco="destreza" Value={Destreza} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Força" Banco="força" Value={Força} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Inteligência" Banco="inteligencia" Value={Inteligencia} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Poder" Banco="poder" Value={Poder} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Sorte" Banco="sorte" Value={Sorte} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style ={{paddingBottom:'20px', color: '#fff'}}>Perícias:</h1>
            </div>
            <CardAtributos Atributo="Lutar/Briga" Banco="lutar" Value={Lutar} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Mira" Banco="mira" Value={Mira} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Ofício" Banco="oficio" Value={Oficio} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Percepção" Banco="percepcao" Value={Percepcao} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
            <CardAtributos Atributo="Primeiros Socorros" Banco="primeiros_socorros" Value={PrimeirosSocorros} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath} vidaTotal={vidaTotal}></CardAtributos>
        </div>
    );
}

export default Atributos;