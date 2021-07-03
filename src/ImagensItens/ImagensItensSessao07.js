import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import SimboloCostasSeuRodrigues from '../ImagensSessão06/SimboloCostasRodrigues.png'
import AChaveDosGrandesMisterios from '../ImagensSessão06/AChaveDosGrandesMisterios.png'
import OMundo from '../ImagensSessão06/OMundo.png'

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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 07:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                { !itens.o_mundo ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Carta de Tarot: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={OMundo} alt="test" style={{width:'100%'}} />
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
                { !itens.pagina_liberada_eliphas ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página nova livro A Chave Dos Grandes Mistérios: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={AChaveDosGrandesMisterios} alt="test" style={{width:'100%'}} />
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