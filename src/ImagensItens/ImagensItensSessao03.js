import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DiarioDanielPg1 from '../ImagensSessão03/Diário Daniel Parte 01.png'
import DiarioDanielPg2 from '../ImagensSessão03/Diário Daniel Parte 02.png'
import DiarioDanielPg2_5 from '../ImagensSessão03/Diário Daniel Parte 02_5.png'
import DiarioMarcio00 from '../ImagensSessão03/Diário Parte 00.png'
import DiarioMarcio01 from '../ImagensSessão03/Diário Parte 01.png'
import DiarioMarcio02 from '../ImagensSessão03/Diário Parte 02.png'
import DiarioMarcio03 from '../ImagensSessão03/Diário Parte 03.png'
import DiarioMarcio04 from '../ImagensSessão03/Diário Parte 04.png'
import DiarioMarcio05 from '../ImagensSessão03/Diário Parte 05.png'
import FolhaAnexada from '../ImagensSessão03/FolhaAnexada.png'
import OssosHomemVitruviano from '../ImagensSessão03/Ossos Homem Vitruviano.png'
import Tarot from '../ImagensSessão03/Tarot.png'
import LivroDosVitruvianos from '../ImagensSessão03/LivroDosVitruvianos.png'
import LivroDosVitruvianosDaniel from '../ImagensSessão03/LivroDosVitruvianosDaniel.png'
import Senha from '../ImagensSessão03/senha.jpg'
import AVerdadeOculta from '../ImagensSessão03/AVerdadeOculta.png'
import Igreja from '../ImagensSessão03/Igreja.jpg'
import Pedras from '../ImagensSessão03/Pedras.jpg'
import SãoCipriano from '../ImagensSessão03/SãoCipriano.jpg'
import Sabedoria from '../ImagensSessão03/Sabedoria.png'
import Coragem from '../ImagensSessão03/Coragem.png'
import Morte from '../ImagensSessão03/Morte.png'
import Vontade from '../ImagensSessão03/Vontade.png'
import Elementos from '../ImagensSessão03/Elementos.png'
import TempoEspaço from '../ImagensSessão03/Tempo-Espaço.png'
import AVerdadeOcultaCp01 from '../ImagensSessão03/AVerdadeOcultaCp01.png'
import Averdadeirachave from '../ImagensSessão03/A verdadeira chave de Salomão.png';
import ItensSessao02DataService from '../Services/ItensSessao02Service.js';

function ImagensItensSessao01(){

    useEffect(()=> {
        getItens();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            getItens();
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    function getItens(){
        ItensSessao02DataService.getItens()
        .then((response) => {
            var itens = response.data[0];
            console.log(itens);
            setItens(itens);
        })
        .catch((e) => {
        console.log(e);
        });
    }

    const [itens, setItens] = useState(null);

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 02:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                {
                    !itens.diario_marcio_neves ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Diário Marcio Neves:</h1>
                                <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={LivroDosVitruvianos} alt="test" style={{width:'75%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                            </div>
                                <div>
                                    {
                                    !itens.diario_marcio_00 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioMarcio00} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    {
                                    !itens.diario_marcio_01 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioMarcio01} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    {
                                    !itens.diario_marcio_02 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioMarcio02} alt="test"  />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    {
                                    !itens.diario_marcio_03 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioMarcio03} alt="test"  />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    {
                                    !itens.diario_marcio_04 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioMarcio04} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    {
                                    !itens.diario_marcio_05 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioMarcio05} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                </div>
                        </div>
                }
                {
                    !itens.osso_parede ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Figura Parede Gruta:</h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={OssosHomemVitruviano} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                {
                    !itens.senha ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Papel com senha:</h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Senha} alt="test" style={{width:'50%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                {
                    !itens.diario_daniel ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Diário Daniel Sanches:</h1>
                                <div>
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <img src={LivroDosVitruvianosDaniel} alt="test" style={{width:'50%'}} />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </div>
                            </div>
                                <div>
                                    { !itens.diario_daniel_01 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioDanielPg1} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    { !itens.diario_daniel_02 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioDanielPg2} alt="test"  />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                </div>
                        </div>
                }
                {
                    !itens.itens_corpo_daniel ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens no corpo de Daniel Sanches:</h1>
                            </div>
                                <div>
                                    { !itens.diario_daniel_02_5 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página do diário: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={DiarioDanielPg2_5} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    { !itens.folha_anexada ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Folha Anexada: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={FolhaAnexada} alt="test" style={{width:'75%'}} />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                    { !itens.carta_tarot ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Carta Tarot: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={Tarot} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                </div>
                        </div>
                }
                { !itens.igreja ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Igreja: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Igreja} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.pedras ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Pedras centrais: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Pedras} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Simbolos pedras esquerda: </h1>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Sabedoria} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Coragem} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Simbolos pedras meio: </h1>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Morte} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Vontade} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Simbolos pedras direita: </h1>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Elementos} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={TempoEspaço} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                {
                    !itens.livro_a_verdade_oculta ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Livro de São Cipriano:</h1>
                                <div>
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <img src={SãoCipriano} alt="test" style={{width:'75%'}} />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </div>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Livro A Verdade Oculta de São Cipriano:</h1>
                                <div>
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <img src={AVerdadeOculta} alt="test" style={{width:'75%'}} />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </div>
                            </div>
                                <div>
                                    { !itens.livro_a_verdade_oculta_cp_01 ? '' :
                                        <div>
                                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Capítulo 01: </h1>
                                            </div>
                                            <div>
                                                <TransformWrapper>
                                                    <TransformComponent>
                                                        <img src={AVerdadeOcultaCp01} alt="test" />
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </div>
                                        </div>
                                    }
                                </div>
                        </div>
                }
                {
                    !itens.livro_a_verdadeira_chave ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Livro A Verdaderdeira Chave de Salomão:</h1>
                                <div>
                                    <TransformWrapper>
                                        <TransformComponent>
                                            <img src={Averdadeirachave} alt="test" />
                                        </TransformComponent>
                                    </TransformWrapper>
                                </div>
                            </div>
                        </div>
                }
                   
                </div>

            }
        </div>
    );
}

export default ImagensItensSessao01;