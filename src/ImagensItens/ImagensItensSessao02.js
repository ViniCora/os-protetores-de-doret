import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import DiarioDanielPg1 from '../ImagensSessão02/Diário Daniel Parte 01.png'
import DiarioDanielPg2 from '../ImagensSessão02/Diário Daniel Parte 02.png'
import DiarioDanielPg2_5 from '../ImagensSessão02/Diário Daniel Parte 02_5.png'
import DiarioMarcio00 from '../ImagensSessão02/Diário Parte 00.png'
import DiarioMarcio01 from '../ImagensSessão02/Diário Parte 01.png'
import DiarioMarcio02 from '../ImagensSessão02/Diário Parte 02.png'
import DiarioMarcio03 from '../ImagensSessão02/Diário Parte 03.png'
import DiarioMarcio04 from '../ImagensSessão02/Diário Parte 04.png'
import DiarioMarcio05 from '../ImagensSessão02/Diário Parte 05.png'
import FolhaAnexada from '../ImagensSessão02/FolhaAnexada.png'
import OssosHomemVitruviano from '../ImagensSessão02/Ossos Homem Vitruviano.png'
import Tarot from '../ImagensSessão02/Tarot.png'
import LivroDosVitruvianos from '../ImagensSessão02/LivroDosVitruvianos.png'
import LivroDosVitruvianosDaniel from '../ImagensSessão02/LivroDosVitruvianosDaniel.png'
import Senha from '../ImagensSessão02/senha.jpg'
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
                   
                </div>

            }
        </div>
    );
}

export default ImagensItensSessao01;