import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import AChaveDosGrandesMisterios from '../ImagensSessão08/AChaveDosGrandesMisterios.png'
import casaSeuPassarinho from '../ImagensSessão08/casaSeuPassarinho.png'
import poema from '../ImagensSessão08/Poema.png'
import LivroProtetores from '../ImagensSessão08/LivroProtetores.png'
import interior from '../ImagensSessão08/Interior.jpg'

import ItensSessao08DataService from '../Services/ItensSessao08Service.js';

function ImagensItensSessao09(){

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
        ItensSessao08DataService.getItens()
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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 09:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
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
                { !itens.mansão ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Casa: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={casaSeuPassarinho} alt="test" style={{width:'100%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.interior ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Interior: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={interior} alt="test" style={{width:'100%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.poema ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Poema: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={poema} alt="test" style={{width:'100%'}} />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                { !itens.livro_protetores ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Livro na cabana: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={LivroProtetores} alt="test" style={{width:'75%'}} />
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

export default ImagensItensSessao09;