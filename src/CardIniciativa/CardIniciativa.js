import React, {useState, useEffect} from 'react';
import lixo from '../Icons/lixo.png'
import IniciativaDataService from '../Services/IniciativaService.js';


function CardIniciativa({Atributes, index}){

    const [color, setColor] = useState("#363636");

    useEffect(() => {
        if(Atributes.vez){
            setColor("#DA3E52");
        }else{
            setColor("#363636");
        }
      });

    function deletarIniciativa(id){

        console.log(id);

        IniciativaDataService.deleteOne(id)
        .then((response) => {
           console.log("Iniciativa deletada com sucesso")
        })
        .catch((e) => {
        console.log(e);
        });
    }

    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: color, height: '300', width: '1000px'}}>  

            <div style={{display: 'flex', flexDirection: 'row', paddingTop: '20px'}}>
                <h1 style={{  margin: '0px', color: '#fff'}}>{`${index + 1}°`}</h1>
                <div style={{paddingLeft: '30px', paddingBottom: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '75px', height: '75px', borderRadius: '50%'}}
                    src={`https://rpg-image-api.herokuapp.com/${Atributes.imagePath}`} 
                    alt={Atributes.name} />
                </div>
            </div>


            <div style={{ paddingTop: '20px'}}>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px', color: '#fff'}}>{Atributes.name}</h1>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'row', paddingTop: '20px'}}>
            <div style={{ paddingRight: '30px'}}>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px', color: '#fff'}}>{`Iniciativa: ` + 
                Atributes.tipoSucesso === 1 ? 'Falha Crítica' :
                Atributes.tipoSucesso === 2 ? 'Falha normal' : 
                Atributes.tipoSucesso === 3 ? 'Sucesso normal' :
                Atributes.tipoSucesso === 4 ? 'Sucesso Bom' :
                Atributes.tipoSucesso === 5 ? 'Sucesso Extremo' :
                 'Sucesso Crítico'
                }
                
                </h1>
            </div>
                <input type='image' src={lixo} alt='row' width="40px" height="40px" onClick={()=>{
                    deletarIniciativa(Atributes._id);
                }
                }/> 
            </div>

        </div>
    )
}

export default CardIniciativa;