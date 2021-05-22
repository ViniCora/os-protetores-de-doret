import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import RenatoAlencar from '../NPC/RenatoAlencar.jpg'
import SrRodrigues from '../NPC/Sr. Rodrigues.png'
import RobertoPinheiro from '../NPC/Roberto Pinheiro.jpg'
import GeraldoBonfim from '../NPC/Geraldo Bonfim.jpg'
import AmeliaLeitao  from '../NPC/AmeliaLeitao.png'
import VandaLeitao from '../NPC/Vanda Leitão.jpg'
import PersonagensDataService from '../Services/PersonagensService.js';

function PersonagensNPC(){

    useEffect(()=> {
        getPersonagens();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            getPersonagens();
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    function getPersonagens(){
        PersonagensDataService.getPersonagens()
        .then((response) => {
            var personagens = response.data[0];
            setPersonagens(personagens);
        })
        .catch((e) => {
        console.log(e);
        });
    }

    const [personagens, setPersonagens] = useState(null);

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Personagens:</h1>
            </div>
            {
                personagens == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                    {
                        !personagens.renato_alencar ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Renato Alencar:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={RenatoAlencar} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.sr_rodrigues ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Sr. Rodrigues:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={SrRodrigues} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.beto_pinheiro ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Beto Pinheiro:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={RobertoPinheiro} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.geraldo_bonfim ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Geraldo Bonfim:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={GeraldoBonfim} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.amelia_leitao ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Amélia Leitão:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={AmeliaLeitao} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.vanda_leitao ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Vanda Leitão:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={VandaLeitao} alt="test" />
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

export default PersonagensNPC;