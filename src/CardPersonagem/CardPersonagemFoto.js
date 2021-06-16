import React, {useEffect} from 'react';

function CardPersonagemFoto({Atributes}){

    return(
        <div>
            <label style={{color: '#fff', fontSize: '15px', marginBottom: '30px'}}>{Atributes.nome}</label>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: '#c89754', borderRadius: '0px', borderStyle: 'solid', borderWidth: '4px',
                paddingLeft: '10px', paddingRight: '10px', backgroundColor: '#ebd8ad', width: '130px', height: '160px', cursor: 'pointer', marginTop : '30px'}}>  
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                    <label style={{fontSize: '27px', color: '#000000', paddingTop: '5px', fontFamily: 'Baskerville', cursor: 'pointer'}}>Vida:</label>
                    <label style={{fontSize: '35px', color: '#D00000', paddingTop: '2px', fontFamily: 'Baskerville', cursor: 'pointer', fontStyle: 'bold'}}>
                        {`${Atributes.vida}/${Atributes.vida_total}`}</label>
                    <label style={{fontSize: '27px', color: '#000000', paddingTop: '5px', fontFamily: 'Baskerville', cursor: 'pointer'}}>Sanidade:</label>
                    <label style={{fontSize: '35px', color: '#4059AD', fontStyle: 'bold', paddingTop: '2px', cursor: 'pointer',
                    paddingBottom: '20px', fontFamily: 'Baskerville'}}>{`${Atributes.sanidade}/${Atributes.sanidade_maxima}`}</label>
                </div>

            </div>
        </div>
    )
}

export default CardPersonagemFoto;