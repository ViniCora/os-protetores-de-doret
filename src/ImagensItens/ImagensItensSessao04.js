import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AVerdadeOculta from '../ImagensSessão04/AVerdadeOculta.png'
import Igreja from '../ImagensSessão04/Igreja.jpg'
import Pedras from '../ImagensSessão04/Pedras.jpg'
import SãoCipriano from '../ImagensSessão04/SãoCipriano.jpg'
import AChaveDeSalomao from '../ImagensSessão04/AChaveDeSalomao.jpg'
import Sabedoria from '../ImagensSessão04/Sabedoria.png'
import Coragem from '../ImagensSessão04/Coragem.png'
import Morte from '../ImagensSessão04/Morte.png'
import Vontade from '../ImagensSessão04/Vontade.png'
import Elementos from '../ImagensSessão04/Elementos.png'
import TempoEspaço from '../ImagensSessão04/Tempo-Espaço.png'
import AVerdadeOcultaCp01 from '../ImagensSessão04/AVerdadeOcultaCp01.png'
import Averdadeirachave from '../ImagensSessão04/A verdadeira chave de Salomão.png';
import PassagemBiblia from '../ImagensSessão04/PassagemBiblia.png'
import OsCaminhosDaSabedoriaECoragem from '../ImagensSessão04/OsCaminhosDaSabedoriaECoragem.png'
import Dica01 from '../ImagensSessão04/Dica01.png'
import Dica02 from '../ImagensSessão04/Dica02.png'
import Dica03 from '../ImagensSessão04/Dica03.png'
import Servo from '../ImagensSessão04/Servo.png'

import ItensSessao04DataService from '../Services/ItensSessao04Service.js';

function ImagensItensSessao04(){

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
        ItensSessao04DataService.getItens()
        .then((response) => {
            var itens = response.data[0];
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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 04:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
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
                { !itens.passagem_biblia ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Passagem Bíblica: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={PassagemBiblia} alt="test" style={{width:'75%'}} />
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
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Simbolos pedras direita: </h1>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                        { !itens.sabedoria ? '' :
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Sabedoria: </h1>
                            </div>
                        }
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Sabedoria} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                        { !itens.coragem ? '' :
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Coragem: </h1>
                            </div>
                        }
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
                        { !itens.morte ? '' :
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Morte: </h1>
                            </div>
                        }
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Morte} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                        { !itens.vontade ? '' :
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Vontade: </h1>
                            </div>
                        }
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Vontade} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Simbolos pedras esquerda: </h1>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                        { !itens.elementos ? '' :
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Elementos: </h1>
                            </div>
                        }
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Elementos} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        <div style={{paddingBottom: '20px'}}>
                        { !itens.tempo_espaciais ? '' :
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Tempo-Espaço: </h1>
                            </div>
                        }
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={TempoEspaço} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.servo ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Simbolo testa: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Servo} alt="test" style={{width:'75%'}} />
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
                                            <img src={AVerdadeOculta} alt="test" style={{width:'100%'}} />
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
                            <div>
                                { !itens.a_verdadeira_chave_cp_01 ? '' :
                                    <div>
                                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Capítulo 01: </h1>
                                        </div>
                                        <div>
                                            <TransformWrapper>
                                                <TransformComponent>
                                                    <img src={OsCaminhosDaSabedoriaECoragem} alt="test" />
                                                </TransformComponent>
                                            </TransformWrapper>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        
                }
                { !itens.a_chave_de_salomão ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>A Chave De Salomão: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={AChaveDeSalomao} alt="test" style={{width:'50%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.dica_01 ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Folha de papel: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Dica01} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.dica_02 ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Dica: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Dica02} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.dica_03 ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Dica: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Dica03} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                </div>

            }
        </div>
    );
}

export default ImagensItensSessao04;