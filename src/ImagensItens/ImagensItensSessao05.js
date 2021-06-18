import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AVerdadeOculta from '../ImagensSessão04/AVerdadeOculta.png'
import SãoCipriano from '../ImagensSessão04/SãoCipriano.jpg'
import AChaveDeSalomao from '../ImagensSessão04/AChaveDeSalomao.jpg'
import AVerdadeOcultaCp01 from '../ImagensSessão04/AVerdadeOcultaCp01.png'
import Averdadeirachave from '../ImagensSessão04/A verdadeira chave de Salomão.png';
import OsCaminhosDaSabedoriaECoragem from '../ImagensSessão04/OsCaminhosDaSabedoriaECoragem.png'
import OsCaminhosElementalETemporal from '../ImagensSessão04/OsCaminhosElementalETemporal.png'
import Dica01 from '../ImagensSessão04/Dica01.png'
import Dica02 from '../ImagensSessão04/Dica02.png'
import Dica03 from '../ImagensSessão04/Dica03.png'

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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 05:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
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
                                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Paginas Liberadas: </h1>
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
                                { !itens.a_verdadeira_chave_cp_02 ? '' :
                                    <div>
                                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Paginas Liberadas: </h1>
                                        </div>
                                        <div>
                                            <TransformWrapper>
                                                <TransformComponent>
                                                    <img src={OsCaminhosElementalETemporal} alt="test" />
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