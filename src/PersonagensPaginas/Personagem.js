import React, {useState, useEffect} from 'react';
import Atributos from '../Atributos/Atributos';
import Header from '../Header/Header';
import AtributesDataService from '../Services/AtributesService.js';
import d4 from '../Icons/d4.png'
import d6 from '../Icons/d6.png'
import d8 from '../Icons/d8.png'
import d10 from '../Icons/d10.png'
import d12 from '../Icons/d12.png'
import d20 from '../Icons/d20.png'
import Modal from 'react-modal';

function Personagem({Nome}){
    const customStyles = {
        content : {
          top                   : '25%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '50%',
          backgroundColor       : '#696969',
          borderColor           : '#000', 
          borderRadius          : '8px', 
          borderStyle           : 'solid', 
          borderWidth           : '2px',
        }
      };

    const [atributes, setAtributes] = useState(null);
    const [mostrarTela, setMostrarTela] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [tipoDeDado, setTipoDeDado] = useState(0);
    const [numeroDeDados, setNumeroDeDados] = useState(1);
    const [hasRoll, setHasRoll] = useState(false);
    const [rolls, setRolls] = useState('');
    const [rollValueTotal, setRollValueTotal] = useState(0);
    
    useEffect(() => {
        retrieveAtributes();
      }, []);


    const retrieveAtributes = () => {
        AtributesDataService.getAtributes(Nome)
        .then((response) => {
        console.log(response.data[0]);
        setAtributes(response.data[0]);
        setMostrarTela(response.data[0].mostrar_tela);
        setValueadd(response.data[0].pontos_adicionar);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    const [valueAdd, setValueadd] = useState(0);

    return(
        <div>
            <div>
                <Header></Header>
            </div>
            {
                atributes == null ? <h2>Carregando Página</h2> : 

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
                paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: '#696969'}}>  
                        
                        <img style={{maxWidth: '200px', paddingLeft: '0px', paddingTop: '50px', paddingBottom: '50px'}} 
                        src={`https://rpg-image-api.herokuapp.com/${atributes.imagePath}`} 
                        alt={Nome} />
                        
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h1 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px'}}>{Nome}</h1>
                            <h1 style={{paddingLeft: '20px', paddingTop: '0px', margin: '0px'}}>{`Jogador: ${atributes.jogador}`}</h1>
                            <h2 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px'}}>{`Data de nascimento: ${atributes.nascimento}`}</h2>
                            <h2 style={{paddingLeft: '20px', paddingTop: '10px', margin: '0px'}}>{`Ofício: ${atributes.oficio_personagem}`}</h2>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'20px'}}>
                    <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Mostrar na tela inicial?</label>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px', paddingTop: '20px'}}>
                        <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Não</label>
                        <label class="switch"> 
                            <input type="checkbox" checked={mostrarTela ? true : false} onClick={()=>{
                                var valueMostrar = false;
                                if(mostrarTela){
                                    valueMostrar = false;
                                    setMostrarTela(false)
                                }else{
                                    valueMostrar = true;
                                    setMostrarTela(true);
                                }

                                AtributesDataService.updateMostrarTela(atributes._id, {value: valueMostrar})
                                .then((response) => {
                                    console.log("Mostrar na tela inicial alterado com sucesso");
                                })
                                .catch((e) => {
                                console.log(e);
                                });
                            }} />
                            <span class="slider round"></span>
                        </label>
                        <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff'}}>Sim</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'20px'}}>
                        <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Novos pontos a serem distribuidos: {valueAdd}</label>
                    </div>
                    </div>

                    <Modal isOpen={modalIsOpen}
                    onRequestClose={()=>{setIsOpen(false); setNumeroDeDados(1);setHasRoll(false); setRolls('');}}
                    style={customStyles}
                    contentLabel="Example Modal">
                        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                            <h2 style={{fontSize:'30px'}}>{`Roll do dado de ${tipoDeDado}`}</h2>
                        </div>

                       {
                           !hasRoll ?
                           <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                                    <div style={{width: '50%', height: '175px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between'}}>
                                            <h2 style={{ fontSize: '20px', marginTop: '10px'}}>Quantas vezes quer rolar o dado?</h2>
                                            <input value={numeroDeDados} maxLength='3'
                                            style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '30px', marginBottom: '50px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} type='number' onChange={(event)=>{
                                            
                                                var value = event.target.value;

                                                if(value >= 0 && value < 10){
                                                    setNumeroDeDados(value);
                                                }else{
                                                    setNumeroDeDados(1);
                                                }
                                                
                                                
                                            }}></input>
                                    </div>
                                </div>
                                <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                                var nDeDados = numeroDeDados;
                                                if(nDeDados == ''){
                                                    setNumeroDeDados(1);
                                                    nDeDados = 1;
                                                }
                                                setHasRoll(true);
                                                
                                                var somaDados = 0;
                                                var todosRolls = '( ';
                                                for(var i = 0; i < nDeDados; i++){
                                                    var newRoll = (Math.floor(Math.random() * tipoDeDado) + 1);
                                                    somaDados+= newRoll;
                                                    
                                                    if(i === 0){
                                                        todosRolls+= newRoll; 
                                                    }else{
                                                        todosRolls+= ` + ${newRoll}`; 
                                                    }
                                                }

                                                todosRolls+= ' ).'

                                                setRollValueTotal(somaDados);
                                                if(nDeDados > 1){
                                                    setRolls(todosRolls);
                                                }
                                                console.log(todosRolls);
                                                
                                            }
                                        }>Rodar</button>
                                </div>
                            </div> 
                            :
                            <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px'}}>
                                    <div style={{width: '80%', height: '200px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <h2 style={{ fontSize: '20px', marginTop: '20px'}}>{
                                                `Valor total do roll: ${rollValueTotal} ${rolls}`
                                            }</h2>
                                            
                                    </div>
                                </div>
                            </div>
                       }
                        
                        <div> 
                             <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                    setIsOpen(false);
                                    setNumeroDeDados(1);
                                    setHasRoll(false);
                                    setRolls('');
                                }
                                }>Fechar</button>
                            </div>
                        </div>
                        

                    </Modal>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h1 style ={{paddingBottom:'20px', color: '#fff'}}>Rolls d4 até d20:</h1>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d4} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(4);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d6} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(6);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d8} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(8);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d10} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(10);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d12} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(12);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#696969',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d20} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(20);
                            }}/>

                        </div>
                    </div>

                    <Atributos id={atributes._id} Força={atributes.força} Destreza={atributes.destreza} Carisma={atributes.carisma} Inteligencia={atributes.inteligencia} 
                        Constituicao={atributes.constituicao} Poder={atributes.poder} Sorte={atributes.sorte} Sanidade={atributes.sanidade} Mira={atributes.mira} 
                        Oficio={atributes.oficio} Percepcao={atributes.percepcao} Lutar={atributes.lutar} PrimeirosSocorros={atributes.primeiros_socorros}
                        Vida={atributes.vida} Adicionar={valueAdd} setAdicionar={setValueadd} nome={atributes.nome} imagePath={atributes.imagePath} 
                        vidaTotal={atributes.vida_total} sanidadeMaxima={atributes.poder}></Atributos>
                </div>
            }
        </div>
    );
}

export default Personagem;