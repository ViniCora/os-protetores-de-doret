import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.js';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import VitruvianoAntigo from '../Monstros/VitruvianoAntigo.png'
import MonstrosDataService from '../Services/MonstrosService.js';


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
                            <h1 style ={{paddingBottom:'30px', paddingTop:'30px', color: '#fff'}}>Vitruviano 01:</h1>
                            <div>
                                <TransformWrapper defaultScale={1}>
                                    <TransformComponent>
                                        <img src={VitruvianoAntigo} alt="test" style={{width: '500px'}} />
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