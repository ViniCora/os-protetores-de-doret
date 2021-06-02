import React, {useEffect} from 'react';

function CardPersonagem({Atributes}){

    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', backgroundColor: '#363636', width: '180px', height: '400px', cursor: 'pointer'}}>  
        
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{paddingTop: '20px',cursor: 'pointer'}}>
                    <img style={{width: '110px', height: '120px', paddingTop: '0px', paddingBottom: '0px', borderRadius: '50%'}}
                    src={`https://rpg-image-api.herokuapp.com/${Atributes.imagePath}`} 
                    alt={Atributes.name} />
                </div>
                <label style={{fontSize: '25px', color: '#ffffff', paddingTop: '20px', fontFamily: 'Baskerville', cursor: 'pointer'}}>{Atributes.nome}</label>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                <label style={{fontSize: '25px', color: '#ffffff', paddingTop: '20px', fontFamily: 'Baskerville', cursor: 'pointer'}}>Vida:</label>
                <label style={{fontSize: '25px', color: '#DA3E52', paddingTop: '10px', fontFamily: 'Baskerville', cursor: 'pointer'}}>{`${Atributes.vida}/${Atributes.vida_total}`}</label>
                <label style={{fontSize: '25px', color: '#ffffff', paddingTop: '10px', fontFamily: 'Baskerville', cursor: 'pointer'}}>Sanidade:</label>
                <label style={{fontSize: '25px', color: '#A3D9FF', paddingTop: '10px', cursor: 'pointer',
                paddingBottom: '20px', fontFamily: 'Baskerville'}}>{`${Atributes.sanidade}/${Atributes.sanidade_maxima}`}</label>
            </div>

        </div>
    )
}

export default CardPersonagem;