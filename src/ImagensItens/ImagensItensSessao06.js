import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Averdadeirachave from '../ImagensSessão06/A verdadeira chave de Salomão.png';
import OsCaminhosDaSabedoriaECoragem from '../ImagensSessão06/OsCaminhosDaSabedoriaECoragem.png'
import OsCaminhosElementalETemporal from '../ImagensSessão06/OsCaminhosElementalETemporal.png'
import Dica01 from '../ImagensSessão06/Dica01.png'
import Dica02 from '../ImagensSessão06/Dica02.png'
import Dica03 from '../ImagensSessão06/Dica03.png'
import OsCaminhosMorteEVontade from '../ImagensSessão06/OsCaminhosMorteEVontade.png'
import NovaRatio from '../ImagensSessão06/NovaRatio.jpg'
import TunelVontade from '../ImagensSessão06/TunelVontade.png'
import FinalTunel from '../ImagensSessão06/FinalTunel.png'
import PapelSalomonis from '../ImagensSessão06/PapelSalomonis.jpg'
import SimboloCostasSeuRodrigues from '../ImagensSessão06/SimboloCostasRodrigues.png'

import ItensSessao06DataService from '../Services/ItensSessao06Service.js';

function ImagensItensSessao06(){

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
        ItensSessao06DataService.getItens()
        .then((response) => {
            var itens = response.data[0];
            setItens(itens);
            console.log(itens);
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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 06:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                {
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
                                { !itens.a_verdadeira_chave_cp_03 ? '' :
                                    <div>
                                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Paginas Liberadas: </h1>
                                        </div>
                                        <div>
                                            <TransformWrapper>
                                                <TransformComponent>
                                                    <img src={OsCaminhosMorteEVontade} alt="test" />
                                                </TransformComponent>
                                            </TransformWrapper>
                                        </div>
                                    </div>
                                }
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
                { !itens.nova_ratio ? '' :
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Folha de papel: </h1>
                    </div>
                    <div>
                        <TransformWrapper>
                            <TransformComponent>
                                <img src={NovaRatio} alt="test" style={{width:'75%'}} />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>
                }
                { !itens.papel_salomonis ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Plano Salomonis: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={PapelSalomonis} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.tunel_vontade ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Entrada caminho: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={TunelVontade} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.final_tunel ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Sala final do caminho: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={FinalTunel} alt="test" style={{width:'75%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.simbolo_rodrigues ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Símbolo nas costas do Sr. Rodrigues: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={SimboloCostasSeuRodrigues} alt="test" style={{width:'100%'}} />
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

export default ImagensItensSessao06;