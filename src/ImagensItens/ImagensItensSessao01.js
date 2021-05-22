import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import LeonardoPg01 from '../ImagensSessão01/LeonardoPg01.jpg'
import LeonardoPg02 from '../ImagensSessão01/LeonardoPg02.jpg'
import ThiagoPg01 from '../ImagensSessão01/ThiagoPg01.jpg'
import ThiagoPg02 from '../ImagensSessão01/ThiagoPg02.jpg'
import ThiagoPg03 from '../ImagensSessão01/ThiagoPg03.jpg'
import ThiagoPg04 from '../ImagensSessão01/ThiagoPg04.jpg'
import CasaThiago from '../ImagensSessão01/PrimeiraCasa-Thiago.png'
import CasaLeonardo from '../ImagensSessão01/SegundaCasa-Leonardo.png'
import Jornal from '../ImagensSessão01/JornalFolhaDeParanagua.png'
import QuadroTexto from '../ImagensSessão01/QuadroTexto.png'
import Quadro from '../ImagensSessão01/Quadro.png'
import AlfaiateriaDoretCartão from '../ImagensSessão01/AlfaiateriaDoretCartão.png'
import AtaReuniao from '../ImagensSessão01/AtaReuniao.png'
import SimboloVitruviano from '../ImagensSessão01/SimboloVitruviano.jpg'
import ItensSessao01DataService from '../Services/ItensSessao01Service.js';


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
        ItensSessao01DataService.getItens()
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
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Sessão 01:</h1>
            </div>
            {
                itens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                {
                    !itens.cartao_alfaiateria ? '' :
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Cartão Alfaiateria Doret:</h1>
                        </div>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={AlfaiateriaDoretCartão} alt="test" />
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                    </div>
                }
                {
                    !itens.itens_casa_thiago ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens casa Thiago Gouveia da Fonseca:</h1>
                            </div>
                            {
                                !itens.mapa_casa_thiago ? '' :
                                <div>
                                    <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Mapa Casa Thiago:</h1>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={CasaThiago} alt="test" style={{width:'75%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                            {
                                !itens.diario_thiago ? '' :
                                <div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Diário Thiago:</h1>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página 01: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={ThiagoPg01} alt="test" style={{width:'50%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página 02: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={ThiagoPg02} alt="test" style={{width:'50%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página 03: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={ThiagoPg03} alt="test" style={{width:'50%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página 04: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={ThiagoPg04} alt="test" style={{width:'50%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                            {
                                !itens.quadros_thiago ? '' : 
                                <div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Quadros Thiago: </h1>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Quadros 01: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={Quadro} alt="test"  />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Quadros 02: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={QuadroTexto} alt="test" />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {
                        !itens.itens_casa_leonardo ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens casa Leonardo Braga Brito:</h1>
                            </div>
                            {
                                !itens.mapa_casa_leonardo ? '' :
                                <div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Mapa Casa Leonardo:</h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={CasaLeonardo} alt="test" style={{width:'75%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                            {
                                !itens.diario_leonardo ? '' : 
                                <div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Diário Leonardo:</h1>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página 01: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={LeonardoPg01} alt="test" style={{width:'50%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Página 02: </h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={LeonardoPg02} alt="test" style={{width:'50%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                            {
                                !itens.simbolo_vitruvianos ? '' :
                                <div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Folha de papel Homem Vitruviano:</h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={SimboloVitruviano} alt="test" style={{width:'75%'}} />
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {
                        !itens.jornal ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Jornal Folha de Paranaguá:</h1>
                            </div>
                            <div>
                                <TransformWrapper>
                                    <TransformComponent>
                                        <img src={Jornal} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !itens.itens_hospital ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            {
                                !itens.ata_reuniao ? '' :
                                <div>
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Itens Hospital:</h1>
                                        <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>Ata Reunião 1999:</h1>
                                    </div>
                                    <div>
                                        <TransformWrapper>
                                            <TransformComponent>
                                                <img src={AtaReuniao} alt="test" style={{width:'50%'}}/>
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default ImagensItensSessao01;