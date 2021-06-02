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
import Arma from '../Icons/Arma.png'
import revolver from '../Icons/revolver.png'
import Faca from '../Icons/knife.png'
import Soqueira from '../Icons/soqueira.png'
import Bastao from '../Icons/bastão.png'
import Bala from '../Icons/Bullet.png'
import plus from '../Icons/plus.png'
import minus from '../Icons/minus.png'
import lixo from '../Icons/lixo.png'
import dados from '../Icons/Dados.png'
import Punch from '../Icons/punch.png'
import Mochila from '../Icons/mochila.png'

function Personagem({Nome}){
    const customStyles = {
        content : {
          top                   : '25%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '50%',
          backgroundColor       : '#363636',
          borderColor           : '#000', 
          borderRadius          : '8px', 
          borderStyle           : 'solid', 
          borderWidth           : '2px',
        }
      };

      const customStylesCadastroArma = {
        content : {
          top                   : '15%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '64%',
          backgroundColor       : '#363636',
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
    const [armas, setArmas] = useState(null);
    const [modalCadastroArmaIsOpen, setModalCadastroArmaIsOpen] = useState(false);
    const [cadastroArmaDeFogo, setCadastroArmaDeFogo] = useState(false);
    const [cadastroArmaBranca, setCadastroArmaBranca] = useState(false);
    const [armaDeFogoCadastro, setArmaDeFogoCadastro] = useState('');
    const [dadosArmaDeFogoCadastro, setDadosArmaDeFogoCadastro] = useState('');
    const [armaBrancaCadastro, setArmaBrancaCadastro] = useState('');
    const [dadosArmaBrancaCadastro, setDadosArmaBrancaCadastro] = useState('');
    const [muniçãoMaximaCadastro, setMuniçãoMaximaCadastro] = useState(0);
    const [muniçãoAtualCadastro, setMuniçãoAtualCadastro] = useState(0);
    const [inventarioIsOpen, setInventarioIsOpen] = useState(0);
    const [inventario, setInventario] = useState('');

    useEffect(() => {
        retrieveAtributes();
      }, []);


    const retrieveAtributes = () => {
        AtributesDataService.getAtributes(Nome)
        .then((response) => {
        console.log(response.data[0]);
        setArmas(response.data[0].armas)
        setInventario(response.data[0].inventario);
        setAtributes(response.data[0]);
        setMostrarTela(response.data[0].mostrar_tela);
        setValueadd(response.data[0].pontos_adicionar);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    function atualizarInventario(){
        AtributesDataService.updateInventario(atributes._id, {value: inventario})
        .then((response) => {
            console.log("Inventário atualizado com sucesso!")
        })
        .catch((e) => {
        console.log(e);
        });
    }

    function alteraValorArmas(){
        console.log(atributes._id);
        AtributesDataService.updateArmas(atributes._id, {value: armas})
        .then((response) => {
        
        })
        .catch((e) => {
        console.log(e);
        });
    }

    function cadastraNovaArmaValorArmas(armas){
        console.log(atributes._id);
        AtributesDataService.updateArmas(atributes._id, {value: armas})
        .then((response) => {
        
        })
        .catch((e) => {
        console.log(e);
        });
    }

    const [valueAdd, setValueadd] = useState(0);

    return(
        <div>
            <div>
                <Header></Header>
            </div>
            {
                atributes == null ? <h2>Carregando Página</h2> : 

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
                paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: '#363636'}}>  
                        
                        <img style={{maxWidth: '200px', paddingLeft: '0px', paddingTop: '50px', paddingBottom: '50px'}} 
                        src={`https://rpg-image-api.herokuapp.com/${atributes.imagePath}`} 
                        alt={Nome} />
                        
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h1 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px', color: '#fff', fontFamily: 'Baskerville'}}>{Nome}</h1>
                            <h1 style={{paddingLeft: '20px', paddingTop: '0px', margin: '0px', color: '#fff', fontFamily: 'Baskerville'}}>{`Jogador: ${atributes.jogador}`}</h1>
                            <h2 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px', color: '#fff', fontFamily: 'Baskerville'}}>{`Data de nascimento: ${atributes.nascimento}`}</h2>
                            <h2 style={{paddingLeft: '20px', paddingTop: '10px', margin: '0px', color: '#fff', fontFamily: 'Baskerville'}}>{`Ofício: ${atributes.oficio_personagem}`}</h2>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'20px'}}>
                    <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Mostrar na tela inicial?</label>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px', paddingTop: '20px'}}>
                        <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Não</label>
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
                        <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Sim</label>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'20px'}}>
                        <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Novos pontos a serem distribuidos: {valueAdd}</label>
                    </div>
                    </div>

                    <Modal isOpen={modalIsOpen}
                    onRequestClose={()=>{setIsOpen(false); setNumeroDeDados(1);setHasRoll(false); setRolls('');}}
                    style={customStyles}
                    contentLabel="Example Modal">
                        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                            <h2 style={{fontSize:'30px', color: '#fff', fontFamily: 'Baskerville'}}>{`Roll do dado de ${tipoDeDado}`}</h2>
                        </div>

                       {
                           !hasRoll ?
                           <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                                    <div style={{width: '50%', height: '175px', borderColor: '#1C1C1C', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between'}}>
                                            <h2 style={{ fontSize: '20px', marginTop: '10px', color: '#fff', fontFamily: 'Baskerville'}}>Quantas vezes quer rolar o dado?</h2>
                                            <input value={numeroDeDados} maxLength='3'
                                            style={{backgroundColor: '#363636', fontSize: '30px', maxWidth: '70px', maxHeight: '30px', marginBottom: '50px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#363636'}} type='number' onChange={(event)=>{
                                            
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
                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#1C1C1C', 
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
                                    <div style={{width: '80%', height: '200px', borderColor: '#1C1C1C', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <h2 style={{ fontSize: '20px', marginTop: '20px', color: '#fff', fontFamily: 'Baskerville'}}>{
                                                `Valor total do roll: ${rollValueTotal} ${rolls}`
                                            }</h2>
                                            
                                    </div>
                                </div>
                            </div>
                       }
                        
                        <div> 
                             <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#1C1C1C', 
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

                    <Modal isOpen={modalCadastroArmaIsOpen}
                    onRequestClose={()=>{setModalCadastroArmaIsOpen(false); setCadastroArmaBranca(false); setCadastroArmaDeFogo(false);}}
                    style={customStylesCadastroArma}
                    contentLabel="Example Modal">
                        {
                            !cadastroArmaBranca && !cadastroArmaDeFogo ?
                            <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                    <h2 style={{fontSize:'30px', color: '#fff', fontFamily: 'Baskerville'}}>{`Cadastro de nova arma`}</h2>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: '75px'}}>
                                    <div style={{ borderColor: '#000', borderRadius: '50%', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                                width: '300px', height: '300px', marginTop: '20px'}}>
                                        <input type='image' src={Arma} alt='row' width="200px" height="200px" onClick={()=>{
                                            setCadastroArmaDeFogo(true);
                                        }}/>
                                    </div>
                                    <div style={{ borderColor: '#000', borderRadius: '50%', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                            width: '300px', height: '300px', marginTop: '20px'}}>
                                        <input type='image' src={Faca} alt='row' width="200px" height="200px" onClick={()=>{
                                            setCadastroArmaBranca(true);
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            :
                            cadastroArmaBranca && !cadastroArmaDeFogo ?
                                <div>
                                    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                        <h2 style={{fontSize:'30px', color: '#fff', fontFamily: 'Baskerville'}}>{`Cadastro de Arma Branca`}</h2>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                            <h2 style={{ fontSize: '30px', marginTop: '70px', color: '#fff', fontFamily: 'Baskerville'}}>Qual é a arma?</h2>
                                            <input value={armaBrancaCadastro} placeholder='Digite a arma aqui' 
                                            style={{backgroundColor: '#363636', fontSize: '20px', maxWidth: '200px', maxHeight: '30px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', 
                                            boxShadow: '#363636'}} type='text' onChange={(event)=>{
                                            
                                                var value = event.target.value;
                                                setArmaBrancaCadastro(value);
                                                
                                            }}></input>

                                            <h2 style={{ fontSize: '30px', marginTop: '30px', color: '#fff', fontFamily: 'Baskerville'}}>Quantos Dados?</h2>
                                            <input value={dadosArmaBrancaCadastro} placeholder='Digite os dados' 
                                            style={{backgroundColor: '#363636', fontSize: '20px', maxWidth: '200px', maxHeight: '30px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', 
                                            boxShadow: '#363636'}} type='text' onChange={(event)=>{
                                            
                                                var value = event.target.value;
                                                setDadosArmaBrancaCadastro(value);
                                                
                                            }}></input>
                                            <div> 
                                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#1C1C1C', 
                                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                                        
                                                        let obj = armas;    //creating copy of object
                                                        let armaNova = {
                                                            nome: armaBrancaCadastro,
                                                            dados: dadosArmaBrancaCadastro
                                                        }
                                                        obj.push(armaNova);
                                                        setArmas(obj);    //updating value
                                                        cadastraNovaArmaValorArmas(obj);

                                                        setArmaBrancaCadastro('');
                                                        setDadosArmaBrancaCadastro('');
                                                        setModalCadastroArmaIsOpen(false);
                                                        setCadastroArmaBranca(false); 
                                                        setCadastroArmaDeFogo(false);
                                                        
                                                    }
                                                    }>Cadastrar</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            :
                            !cadastroArmaBranca && cadastroArmaDeFogo ?
                                <div>
                                    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                        <h2 style={{fontSize:'30px', color: '#fff', fontFamily: 'Baskerville'}}>{`Cadastro de Arma De Fogo`}</h2>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                            <h2 style={{ fontSize: '25px', marginTop: '30px', color: '#fff', fontFamily: 'Baskerville'}}>Qual é a arma?</h2>
                                            <input value={armaDeFogoCadastro} placeholder='Digite a arma aqui' 
                                            style={{backgroundColor: '#363636', fontSize: '20px', maxWidth: '200px', maxHeight: '30px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', 
                                            boxShadow: '#363636'}} type='text' onChange={(event)=>{
                                            
                                                var value = event.target.value;
                                                setArmaDeFogoCadastro(value);
                                                
                                            }}></input>

                                            <h2 style={{ fontSize: '25px', marginTop: '30px', color: '#fff', fontFamily: 'Baskerville'}}>Quantos Dados?</h2>
                                            <input value={dadosArmaDeFogoCadastro} placeholder='Digite os dados' 
                                            style={{backgroundColor: '#363636', fontSize: '20px', maxWidth: '200px', maxHeight: '30px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', 
                                            boxShadow: '#363636'}} type='text' onChange={(event)=>{
                                            
                                                var value = event.target.value;
                                                setDadosArmaDeFogoCadastro(value);
                                                
                                            }}></input>

                                            <h2 style={{ fontSize: '25px', marginTop: '30px', color: '#fff', fontFamily: 'Baskerville'}}>Quantidade munição atual da arma?</h2>
                                            <input value={muniçãoAtualCadastro} 
                                            style={{backgroundColor: '#363636', fontSize: '20px', maxWidth: '70px', maxHeight: '30px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', 
                                            boxShadow: '#363636'}} type='number' onChange={(event)=>{
                                            
                                                var value = event.target.value;
                                                setMuniçãoAtualCadastro(value);
                                                
                                            }}></input>
                                            <h2 style={{ fontSize: '25px', marginTop: '30px', color: '#fff', fontFamily: 'Baskerville'}}>Quantidade munição máxima da arma?</h2>
                                            <input value={muniçãoMaximaCadastro} 
                                            style={{backgroundColor: '#363636', fontSize: '20px', maxWidth: '70px', maxHeight: '30px', borderStyle: 'none', 
                                            borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', 
                                            boxShadow: '#363636'}} type='number' onChange={(event)=>{
                                            
                                                var value = event.target.value;
                                                setMuniçãoMaximaCadastro(value);
                                                
                                            }}></input>
                                            <div> 
                                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#1C1C1C', 
                                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                                        
                                                        let obj = armas;    //creating copy of object
                                                        let armaNova = {
                                                            nome: armaDeFogoCadastro,
                                                            dados: dadosArmaDeFogoCadastro,
                                                            munição: muniçãoAtualCadastro,
                                                            munição_maxima: muniçãoMaximaCadastro 
                                                        }
                                                        obj.push(armaNova);
                                                        setArmas(obj);    //updating value
                                                        cadastraNovaArmaValorArmas(obj);

                                                        setArmaDeFogoCadastro('');
                                                        setDadosArmaDeFogoCadastro('');
                                                        setMuniçãoAtualCadastro(0);
                                                        setMuniçãoMaximaCadastro(0);
                                                        setModalCadastroArmaIsOpen(false);
                                                        setCadastroArmaBranca(false); 
                                                        setCadastroArmaDeFogo(false);
                                                        
                                                    }
                                                    }>Cadastrar</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            : 
                            ''
                        }
                    </Modal>

                    <Modal isOpen={inventarioIsOpen}
                    onRequestClose={()=>{setInventarioIsOpen(false);}}
                    style={customStylesCadastroArma}
                    contentLabel="Example Modal">
                        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                            <h2 style={{fontSize:'30px', color: '#fff', fontFamily: 'Baskerville'}}>{`Inventário`}</h2>
                        </div>
                        <div style={{width: '100%', height: '70%', paddingTop: '10px'}}>
                            <textarea  value={inventario} placeholder='Seu Inventário' 
                            style={{backgroundColor: '#363636', fontSize: '20px', borderRadius: '8px',
                            borderColor: '#000', borderWidth: '2px', borderStyle: 'solid', width: '100%', height: '100%',
                            boxShadow: '#363636'}}  onChange={(event)=>{
                                var value = event.target.value;
                                setInventario(value);
                                
                            }}></textarea >
                        </div>
                        <div> 
                            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#1C1C1C', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                    
                                        atualizarInventario();
                                        setInventarioIsOpen(false);
                                }
                                }>Atualizar</button>
                            </div>
                        </div>
                    </Modal>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h1 style ={{paddingBottom:'20px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Rolls d4 até d20:</h1>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d4} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(4);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d6} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(6);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d8} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(8);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d10} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(10);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d12} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(12);
                            }}/>

                        </div>
                        <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px', marginRight: '30px'}}>
                            <input type='image' src={d20} alt='row' width="100px" height="100px" onClick={()=>{
                                setIsOpen(true);
                                setTipoDeDado(20);
                            }}/>

                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h1 style ={{paddingBottom:'0px', paddingTop: '40px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Armas:</h1>
                    </div>

                    {armas == null ? '' :  atributes.armas.map((arma, index) => {
                        return (
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItens: 'center', borderColor: '#1C1C1C', borderRadius: '8px', 
                            borderStyle: 'solid', borderWidth: '2px', paddingLeft: '10px', paddingRight: '10px', marginTop: '30px', marginBottom: '10px', 
                            backgroundColor: '#363636', height: '200', width: '500px'}}>  
        
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <div style={{display: 'flex', flexDirection: 'row'}}> 
                                        <div style={{display: 'flex', flexDirection: 'row', paddingTop: '10px'}}>
                                            <div style={{paddingLeft: '30px', paddingBottom: '10px'}}>
                                                <img style={{width: '75px', height: '75px'}}
                                                src={arma.nome === 'Faca' ? Faca :
                                                arma.nome === 'Soqueira' ? Soqueira : 
                                                arma.nome === 'Bastão' ? Bastao : 
                                                arma.nome === 'Soco/Chute' ? Punch :  
                                                arma.nome === '.38' ? revolver: Arma}
                                                alt='Arma' />
                                            </div>
                                        </div>
                
                
                                        <div style={{ paddingTop: '20px', paddingLeft: '30px'}}>
                                            <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px', color: '#fff', 
                                            fontFamily: 'Baskerville'}}>{`${arma.nome}: ${arma.dados}`}</h1>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row'}}> 
                                        <div style={{ paddingTop: '22px'}}>
                                                <input type='image' src={dados} alt='row' width="40px" height="40px" onClick={()=>{
                                                    setIsOpen(true);
                                                    
                                                    setHasRoll(true);
                                                    
                                                    var quantidades = arma.dados.trim().split('d');
                                                    var nDeDados = parseInt(quantidades[0]);
                                                    var quantidades2 = quantidades[1].split('+');
                                                    var tipoDeDado = quantidades2[0];
                                                    var somaFinal = parseInt(quantidades2[1]);
                                                    console.log(somaFinal);
                                                    console.log(quantidades2);

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

                                                    if(somaFinal > 0){
                                                        somaDados += somaFinal;
                                                        todosRolls += ` + ${somaFinal}`;
                                                    }

                                                    todosRolls+= ' ).'

                                                    setRollValueTotal(somaDados);
                                                    if(nDeDados > 1 || somaFinal > 0){
                                                        setRolls(todosRolls);
                                                    }

                                                }
                                                }/> 
                                        </div>
                                        <div style={{ paddingTop: '22px', paddingLeft: '20px'}}>
                                            <input type='image' src={lixo} alt='row' width="40px" height="40px" onClick={()=>{
                                                let obj = armas;    //creating copy of object
                                                obj.splice(index, 1);     //updating value
                                                console.log(obj);
                                                setArmas([...obj]);    
                                                cadastraNovaArmaValorArmas(obj);
                                            }
                                            }/> 
                                        </div>
                                    </div>
                                </div>
                                {
                                    (arma.hasOwnProperty('munição')) ? 
                                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <div style={{display: 'flex', flexDirection: 'row', paddingTop: '20px'}}>
                                            <div style={{paddingLeft: '30px'}}>
                                                <img style={{width: '40px', height: '40px'}}
                                                src={Bala} 
                                                alt='Arma' />
                                            </div>
                                        </div>
            
            
                                        <div style={{ paddingTop: '20px', paddingLeft: '15px'}}>
                                            <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px', color: '#fff', 
                                            fontFamily: 'Baskerville'}}>{`${armas[index].munição}/${armas[index].munição_maxima}`}</h1>
                                        </div>

                                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '22px', paddingLeft: '20px'}}>
                                            <div style={{paddingRight: '10px'}}>
                                                <input type='image' src={minus} alt='row' width="40px" height="40px" onClick={()=>{
                                                        if(arma.munição !== 1){
                                                            let obj = [...armas];    //creating copy of object
                                                            obj[index].munição -= 1 ;                        //updating value
                                                            setArmas(obj);
                                                            console.log(obj);
                                                            alteraValorArmas(obj);
                                                        }
                                                }
                                                }/> 
                                            </div>
                                            <div style={{paddingRight: '10px'}}>
                                                <input type='image' src={plus} alt='row' width="40px" height="40px" onClick={()=>{
                                                    if(arma.munição !== (arma.munição_maxima)){
                                                        let obj = [...armas];    //creating copy of object
                                                        obj[index].munição += 1 ;                        //updating value
                                                        setArmas(obj);
                                                        alteraValorArmas(obj);
                                                    }
                                                }
                                                }/> 
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''
                                }
        
                            </div>
                        );
                    })}
                    <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '75px', height: '75px', marginTop: '20px'}}>
                            <input type='image' src={plus} alt='row' width="75px" height="75px" onClick={()=>{
                                setModalCadastroArmaIsOpen(true);
                            }}/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <h1 style ={{paddingBottom:'0px', paddingTop: '40px', color: '#fff', color: '#fff', fontFamily: 'Baskerville'}}>Inventário:</h1>
                    </div>

                    <div style={{ borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', backgroundColor:'#363636',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    width: '150px', height: '150px'}}>
                            <input type='image' src={Mochila} alt='row' width="100px" height="100px" onClick={()=>{
                                setInventarioIsOpen(true);
                            }}/>
                    </div>

                    <Atributos id={atributes._id} Força={atributes.força} Destreza={atributes.destreza} Carisma={atributes.carisma} Inteligencia={atributes.inteligencia} 
                        Constituicao={atributes.constituicao} Poder={atributes.poder} Sorte={atributes.sorte} Sanidade={atributes.sanidade} Mira={atributes.mira} 
                        Oficio={atributes.oficio} Percepcao={atributes.percepcao} Lutar={atributes.lutar} PrimeirosSocorros={atributes.primeiros_socorros}
                        Vida={atributes.vida} Adicionar={valueAdd} setAdicionar={setValueadd} nome={atributes.nome} imagePath={atributes.imagePath} 
                        vidaTotal={atributes.vida_total} sanidadeMaxima={atributes.sanidade_maxima}></Atributos>
                </div>
            }
        </div>
    );
}

export default Personagem;