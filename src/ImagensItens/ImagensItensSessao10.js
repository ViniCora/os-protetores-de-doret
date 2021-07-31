import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import LivroProtetores from '../ImagensSessão10/LivroProtetores.png'
import PaginaDoret from '../ImagensSessão10/PaginaDoret.png'
import Cabana from '../ImagensSessão10/cabana.jpg'

import ItensSessao10DataService from '../Services/ItensSessao10Service.js';

function ImagensItensSessao10(){

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
        ItensSessao10DataService.getItens()
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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 10:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                { !itens.cabana ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Cabana: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={Cabana} alt="test" style={{width:'75%'}} />
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
                { !itens.pagina ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Pagina: </h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={PaginaDoret} alt="test" style={{width:'75%'}} />
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

export default ImagensItensSessao10;