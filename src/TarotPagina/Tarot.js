import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import OLouco from '../TarotImagens/O Louco.png'
import OMago from '../TarotImagens/O Mago.png'
import ASacerdotista from '../TarotImagens/A Suma Sacerdotisa.png'
import AImperatriz from '../TarotImagens/A Imperatriz.png'
import OSacerdote from '../TarotImagens/O Sumo Sacerdote.png'
import OsEnamorados from '../TarotImagens/Os Enamorados.png'
import OEnforcado from '../TarotImagens/O Enforcado.png'
import ODiabo from '../TarotImagens/O Diabo.png'
import TarotDataService from '../Services/TarotService.js';


function Tarot(){

    useEffect(()=> {
        getTarot();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            getTarot();
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    function getTarot(){
        TarotDataService.getTarot()
        .then((response) => {
            var tarot = response.data[0];
            console.log('Tarot: ' + tarot);
            setTarot(tarot);
        })
        .catch((e) => {
        console.log(e);
        });
    }

    const [tarot, setTarot] = useState(null);

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Cartas De Tarot:</h1>
            </div>
            {
                tarot == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                    {
                        !tarot.clarice ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'10px', paddingTop:'30px', color: '#fff'}}>Clarice Collalto:</h1>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'10px', color: '#fff'}}>O Louco:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={OLouco} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !tarot.juan ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'10px', paddingTop:'100px', color: '#fff'}}>Juan Pablo Ramirez Porto:</h1>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'10px', color: '#fff'}}>O Mago:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={OMago} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !tarot.eli ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'10px', paddingTop:'100px', color: '#fff'}}>Eli Friedberg:</h1>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'10px', color: '#fff'}}>A Suma Sacerdotista:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={ASacerdotista} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>O Sumo Sacerdote:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={OSacerdote} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !tarot.spike ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'10px', paddingTop:'100px', color: '#fff'}}>Spike Hartwell:</h1>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'10px', color: '#fff'}}>A Imperatriz:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={AImperatriz} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !tarot.samuel ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'10px', paddingTop:'100px', color: '#fff'}}>Samuel Badeaux:</h1>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'10px', color: '#fff'}}>Os Enamorados:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={OsEnamorados} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !tarot.samuel ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'10px', paddingTop:'100px', color: '#fff'}}>Francisco Carlos de Campo:</h1>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'10px', color: '#fff'}}>O Enforcado:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={OEnforcado} alt="test" style={{}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                            <h1 style ={{paddingBottom:'20px', paddingTop:'20px', color: '#fff'}}>O Diabo:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={ODiabo} alt="test" style={{}} />
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

export default Tarot;