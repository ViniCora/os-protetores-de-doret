import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import VitruvianoAntigo from '../Monstros/VitruvianoAntigo.png';
import VitruvianoNovo from '../Monstros/VitruvianoNovo.png';
import Acorrentado from '../Monstros/Acorrentado.jpg';
import MonstroSalomonis from '../Monstros/MonstroSalomonis.png';
import DevoradorDasSombras from '../Monstros/DevoradorDasSombras.jpg';
import MonstrosDataService from '../Services/MonstrosService.js';
import Silencio from '../Monstros/Silencio.png';
import almas from '../Monstros/almas.png';
import RenatoAtemporal from '../Monstros/RenatoAtemporal.png';

function Monstros(){

    useEffect(()=> {
        getMonstros();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            getMonstros();
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    function getMonstros(){
        MonstrosDataService.getMonstros()
        .then((response) => {
            var monstros = response.data[0];
            setMonstros(monstros);
        })
        .catch((e) => {
        console.log(e);
        });
    }

    const [monstros, setMonstros] = useState(null);

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Monstros:</h1>
            </div>
            {
                monstros == null ? '' : 
                <div style={{paddingBottom: '200px'}}>
                    {
                        !monstros.vitruviano_antigo ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Vitruviano:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={VitruvianoAntigo} alt="test" style={{width: '500px'}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                     {
                        !monstros.acorrentado ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Vitruviano Acorrentado:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={Acorrentado} alt="test" style={{width: '500px'}} />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !monstros.vitruviano_novo ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Vitruviano Perfeito:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={VitruvianoNovo} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !monstros.falha_salomao ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Salomão Falso:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={MonstroSalomonis} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !monstros.devorador_das_sombras ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Devorador das Sombras:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={DevoradorDasSombras} alt="test" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !monstros.silencio ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}></h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={Silencio} alt="test" style={{width: '75%'}}/>
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !monstros.almas ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Almas</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={almas} alt="test"/>
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>
                        </div>
                    }
                    {
                        !monstros.homem_atemporal ? '' :
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Homem Atemporal</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={RenatoAtemporal} alt="test"/>
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

export default Monstros;