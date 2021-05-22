import React from 'react';

function Itens(){
    return(
        <div>
            <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                        width: '150px', height: '150px', marginRight: '30px'}}>
                <img src="image.jpg" alt="test" style={{width: '150px', height: '150px',}} />

            </div>
        </div>
    );
}

export default Itens;