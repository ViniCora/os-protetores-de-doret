import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import RenatoAlencar from '../NPC/RenatoAlencar.jpg'
import SrRodrigues from '../NPC/Sr. Rodrigues.png'
import RobertoPinheiro from '../NPC/Roberto Pinheiro.jpg'
import GeraldoBonfim from '../NPC/Geraldo Bonfim.jpg'
import AmeliaLeitao  from '../NPC/AmeliaLeitao.png'
import VandaLeitao from '../NPC/Vanda Leitão.jpg'
import DanielSanches  from '../NPC/DanielSanches.png'
import Carmen from '../NPC/Carmen.jpg';
import EduardoAlencar from '../NPC/Eduardo Alencar.jpg';
import JorgeGarcia from '../NPC/Jorge Garcia.jpg';
import Nelton from '../NPC/Nelton.jpg';
import PadreRicardo from '../NPC/PadreRicardo.jpg';
import Violinista from '../NPC/Violinista.jpg';
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
                    {
                        !personagens.daniel_sanches ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Daniel Sanches:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={DanielSanches} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.violinista ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Violinista:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={Violinista} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.padre_ricardo ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Padre Ricardo:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={PadreRicardo} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.eduardo_alencar ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Eduardo Alencar:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={EduardoAlencar} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.jorge_garcia ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Jorge Garcia:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={JorgeGarcia} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.nelton ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Nelton Nowak:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={Nelton} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !personagens.carmen ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Carmen Ramirez Porto:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={Carmen} alt="test" />
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