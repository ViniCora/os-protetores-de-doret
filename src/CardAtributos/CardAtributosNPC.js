import {React, useState} from 'react';
import dados from '../Icons/Dados.png'
import forçaImg from '../Icons/Arm.png'
import destrezaImg from '../Icons/Run.png'
import carismaImg from '../Icons/Happy.png'
import inteligenciaImg from '../Icons/Brain.png'
import resistenciaImg from '../Icons/Strong.png'
import miraImg from '../Icons/Gun.png'
import oficioImg from '../Icons/Wrench.png'
import vidaImg from '../Icons/heart.png'
import editarImg from '../Icons/pencil.png'
import confirmar from '../Icons/right.png'
import cancenlar from '../Icons/wrong.png'
import iniciativaImg from '../Icons/podium.png'
import percepcaoImg from '../Icons/Binoculars.png'
import plus from '../Icons/plus.png'
import minus from '../Icons/minus.png'
import sanidadeIcon from '../Icons/sanidade.png'
import poderImg from '../Icons/power.png'
import sorteImg from '../Icons/lucky.png'
import lutaImg from '../Icons/fight.png'
import primeirosSocorrosImg from '../Icons/first_aid.png'
import Modal from 'react-modal';
import NPCDaraService from '../Services/NpcService.js';
import IniciativaDataService from '../Services/IniciativaService.js';
import RollsDataService from '../Services/RollsService.js';
import './CardAtributos.css'

function CardAtributos({Atributo, Banco, Value, id, Adicionar, setAdicionar, nome, imagePath, vidaTotal, sanidadeAtual}){
    const customStyles = {
        content : {
          top                   : '25%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '50%',
          backgroundColor       : '#363636',
          borderColor           : '#1C1C1C', 
          borderRadius          : '8px', 
          borderStyle           : 'solid', 
          borderWidth           : '2px',
        }
      };

    const [sanidadeAt, setSanidadeAt] = useState(sanidadeAtual)
    const [vidaTot, setVidaTot] = useState(vidaTotal)
    const umQuinto = (Value/5).toFixed();
    const meio = (Value/2).toFixed();
    const [valor, setValor] = useState(Value);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [hasRoll,setHasRoll] = useState(false);
    const [modifier,setModifier] = useState(0);
    const [roll, setRoll] = useState(0);
    const [rollSemMod, setRollSemMod] = useState(0);
    const [contestacao, setContestacao] = useState(0);
    const valorMinimo = valor;
    const [isEditar, setIsEditar] = useState(false);
    const [valorPreEdicao, setValorPreEdicao] = useState(valor);
    const [valorGarantido, setValorGarantido] = useState(0);
    const [iniciativa, setIniciativa] = useState(0);

    function alterarPontosAdicionar(newValue){
        NPCDaraService.updatePontosAdicionar(id, {value: newValue})
                .then((response) => {
                    console.log("Pontos à adicionar alterados com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
    }

    function salvarRoll(valorRodado, tipoDeSucesso){
        
        console.log('nome: ' + nome);

        var data = {
            nome: nome,
            imagePath: imagePath,
            atributo: Atributo,
            valorRodado: valorRodado,
            tipoDeSucesso: tipoDeSucesso
        }

        RollsDataService.newRoll(data)
        .then((response) => {
            console.log("Roll adicionado com sucesso");
        })
        .catch((e) => {
        console.log(e);
        });
    }

    function addIniciativa(tipoSucesso){

        IniciativaDataService.newIniciativa({name: nome, imagePath: imagePath, tipoSucesso: tipoSucesso, value: Value})
                .then((response) => {
                    console.log("Iniciativa adicionada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
    }

    function alterarValorBanco(newValue){
        switch (Banco) {
             case 'vida':
                NPCDaraService.updateVidaTotal(id, {value: newValue})
                .then((response) => {
                    console.log("Vida Total alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'força':
                NPCDaraService.updateForca(id, {value: newValue})
                .then((response) => {
                    console.log("Força alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'destreza':
                NPCDaraService.updateDestreza(id, {value: newValue})
                .then((response) => {
                    console.log("Destreza alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'carisma':
                NPCDaraService.updateCarisma(id, {value: newValue})
                .then((response) => {
                    console.log("Carisma alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'inteligencia':
                NPCDaraService.updateInteligencia(id, {value: newValue})
                .then((response) => {
                    console.log("Inteligencia alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'constituicao':
                NPCDaraService.updateConstituicao(id, {value: newValue})
                .then((response) => {
                    console.log("Resistencia alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'mira':
                NPCDaraService.updateMira(id, {value: newValue})
                .then((response) => {
                    console.log("Mira alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'oficio':
                NPCDaraService.updateOficio(id, {value: newValue})
                .then((response) => {
                    console.log("Oficio alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'percepcao':
                NPCDaraService.updatePercepcao(id, {value: newValue})
                .then((response) => {
                    console.log("Percepção alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'poder':
                NPCDaraService.updatePoder(id, {value: newValue})
                .then((response) => {
                    console.log("Poder alterado com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'sorte':
                NPCDaraService.updateSorte(id, {value: newValue})
                .then((response) => {
                    console.log("Sorte alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'lutar':
                NPCDaraService.updateLutar(id, {value: newValue})
                .then((response) => {
                    console.log("Lutar alterado com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'primeiros_socorros':
                NPCDaraService.updatePrimeirosSocorros(id, {value: newValue})
                .then((response) => {
                    console.log("Primeiros Socorros alterado com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
            default:
              console.log(`Sorry, we are out of ${Banco}.`);
          }
    }
 
    return(
        
        <div style={{width:'750px', borderColor: '#1C1C1C', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', 
        marginBottom: '50px', padding: '10px', maxHeight: '50px', backgroundColor:'#363636', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={()=>{setIsOpen(false); setHasRoll(false); setModifier(0);}}
              style={customStyles}
              contentLabel="Example Modal"
            >
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                    <h2 style={{fontSize:'30px', color: '#fff', fontFamily: 'Baskerville'}}>Teste de {Atributo}</h2>
                </div>
                {hasRoll ? 
                            <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px'}}>
                                    <div style={{width: '75%', height: '200px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <h2 style={{ fontSize: '20px', marginTop: '20px', color: '#fff', fontFamily: 'Baskerville'}}>{
                                                roll === 1 ? 'Sucesso Crítico, rodou: ' + roll :  
                                                roll === 100 ? 'Falha Crítica, rodou: ' + roll :
                                                (roll > 1 && roll <= umQuinto) ? 'Sucesso Extremo, rodou: ' + roll + '.' : 
                                                (roll > umQuinto && roll <= meio) ? 'Sucesso Bom, rodou: ' + roll +'.' : 
                                                (roll > meio && roll <= valorMinimo) ? 'Sucesso Normal, rodou: ' + roll +'.' : 
                                                'Falhou, rodou: ' + roll + '.'
                                            }</h2>
                                            <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#fff', fontFamily: 'Baskerville'}}>
                                                {`Valor minimo para sucesso era: ${valorMinimo}.`}</h2>
                                    </div>
                                </div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                                    {Atributo === 'Iniciativa' ? 
                                        <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                            window.open('https://os-protetores-de-doret.herokuapp.com/iniciativa');
                                            setIsOpen(false); setHasRoll(false); setModifier(0);
                                        }
                                        }>Ir para iniciativa</button>
                                    :
                                        ''
                                    }

                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                            setIsOpen(false); setHasRoll(false); setModifier(0);
                                        }
                                        }>Fechar</button>

                                </div>
                            </div> 
                        :
                        <div>
                            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                                <div style={{width: '50%', height: '200px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                    flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between'}}>
                                        <h2 style={{ fontSize: '20px', marginTop: '10px'}}>Qual o modifier a ser adicionado?</h2>
                                        <input value={modifier} maxLength='3'
                                        style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                                        borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} type='number' onChange={(event)=>{
                                        
                                            var value = event.target.value;
                                            
                                            if(value <= 100 && value >= -100){
                                                setModifier(value);
                                            }
                                        }}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                            var mod = modifier;
                                            if(modifier == ''){
                                                setModifier(0);
                                                mod = 0;
                                            }
                                            setHasRoll(true);
                                            var newRoll = (Math.floor(Math.random() * 100) + 1);
                                            setRollSemMod(newRoll);
                                            newRoll += parseInt(mod);
                                            if(newRoll > 100){
                                                newRoll = 100;
                                            }
                                            if(newRoll <= 0){
                                                newRoll = 1;
                                            }
                                            setRoll(newRoll);
                                            var cont = Math.ceil((valor * newRoll)/100);
                                            setContestacao(cont);
                                            var valorGar = valor + parseInt(mod);
                                            setValorGarantido(valorGar);
                                            setHasRoll(true);
                                        }
                                    }>Rodar</button>
                            </div>
                        </div>
                }
            </Modal>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
                <div>
                    <img style ={{maxWidth: '40px', paddingRight: '10px'}} 
                    src={Atributo === 'Força' ? forçaImg : 
                         Atributo === 'Destreza' ?  destrezaImg :
                         Atributo === 'Carisma' ? carismaImg :
                         Atributo === 'Inteligência' ? inteligenciaImg :
                         Atributo === 'Constituição' ? resistenciaImg : 
                         Atributo === 'Mira' ? miraImg : 
                         Atributo === 'Poder' ? poderImg :
                         Atributo === 'Sorte' ? sorteImg :
                         Atributo === 'Lutar/Briga' ? lutaImg :
                         Atributo === 'Primeiros Socorros' ? primeirosSocorrosImg :
                         Atributo === 'Ofício' ? oficioImg : 
                         Atributo === 'Percepção' ? percepcaoImg :
                         Atributo === 'Sanidade' ? sanidadeIcon : 
                         Atributo === 'Vida' ? vidaImg : iniciativaImg} alt="Força" />
                </div>
                {
                    isEditar ? 
                        <div>
                            <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff', fontFamily: 'Baskerville'}}>{Atributo}: </label>
                                <input value={Atributo == 'Vida'? valor : sanidadeAt} maxLength='3'
                                style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                                borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} 
                                type='number' onChange={(event)=>{
                                    var value = event.target.value;

                                    if(value <= 100 && value >= -100 && Atributo === 'Vida'){
                                        setValor(value);
                                    }else{
                                        if(value <= 100 && value >= -100){
                                            setSanidadeAt(value);
                                        }
                                    }

                                }}></input>
                            
                        </div>
                    : 
                        Atributo === 'Vida' ? 
                        <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff', fontFamily: 'Baskerville'}}>{`Vida: ${valor}/${vidaTot}`}</label>
                        : 
                        Atributo === 'Sanidade' ?
                        <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff', fontFamily: 'Baskerville'}}>{`Sanidade: ${sanidadeAt}/${valor}`}</label>
                        :
                            <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff', fontFamily: 'Baskerville'}}>
                            {Atributo === 'Iniciativa' ? `Iniciativa` : `${Atributo}:`} { 
                            Atributo === 'Iniciativa' ? '' : valor}</label>
                        
                }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {(isEditar) ? '' : 
                
                    (Atributo === 'Vida') ? '' : 
                
                    <div style={{paddingRight: '10px'}}>
                        <input type='image' src={ (dados)} alt='row' width="40px" height="40px" onClick={()=>{
                 
                                setIsEditar(false);
                                if(Atributo === 'Iniciativa'){
                                    setHasRoll(true);
                                    var newRoll = (Math.floor(Math.random() * 100) + 1);
                                    setRoll(newRoll);
                                    var tipoDeSucesso;
                                    if(newRoll === 1){
                                        tipoDeSucesso = 6;
                                    }else
                                    if(newRoll === 100){
                                        tipoDeSucesso = 1;
                                    }else
                                    if(newRoll > 1 && newRoll <= umQuinto){
                                        tipoDeSucesso = 5;
                                    }else
                                    if(newRoll > umQuinto && newRoll <= meio){
                                        tipoDeSucesso = 4;
                                    }else
                                    if(newRoll > meio && newRoll <= valorMinimo){
                                        tipoDeSucesso = 3;
                                    }else{
                                        tipoDeSucesso = 2;
                                    }
                                    addIniciativa(tipoDeSucesso);
                                }else{
                                    setHasRoll(true);
                                    var newRoll = (Math.floor(Math.random() * 100) + 1);
                                    setRoll(newRoll);
                                    var tipoDeSucesso;
                                    if(newRoll === 1){
                                        tipoDeSucesso = "Sucesso Crítico"
                                    }else
                                    if(newRoll === 100){
                                        tipoDeSucesso = "Falha Crítica"
                                    }else
                                    if(newRoll > 1 && newRoll <= umQuinto){
                                        tipoDeSucesso = "Sucesso Extremo";
                                    }else
                                    if(newRoll > umQuinto && newRoll <= meio){
                                        tipoDeSucesso = "Sucesso Bom";
                                    }else
                                    if(newRoll > meio && newRoll <= valorMinimo){
                                        tipoDeSucesso = "Sucesso Normal";
                                    }else{
                                        tipoDeSucesso = "Falha Normal";
                                    }

                                    salvarRoll(newRoll, tipoDeSucesso);
                                }
                                setIsOpen(true);
                            
                        
                            }
                        }/> 
                    </div>
                
                }
            
                 {
                     Atributo === 'Iniciativa' ? '' : 
                     Atributo !== "Vida" ? '' :
                     <div style={{paddingRight: '10px'}}>
                         <input type='image' src={isEditar ? cancenlar : editarImg} alt='row' width="40px" height="40px" onClick={()=>{
                 
                            if(isEditar){
                                setValor(valorPreEdicao);
                                setIsEditar(false);
                            }else{
                                setValorPreEdicao(valor);
                                setIsEditar(true);
                            }
                        }
                        }/> 
                     </div>
                 }

                {
                     Atributo === 'Iniciativa' ? '' : 
                     Atributo !== "Sanidade" ? '' :
                     <div style={{paddingRight: '10px'}}>
                         <input type='image' src={isEditar ? cancenlar : editarImg} alt='row' width="40px" height="40px" onClick={()=>{
                 
                            if(isEditar){
                                setValor(valorPreEdicao);
                                setIsEditar(false);
                            }else{
                                setValorPreEdicao(valor);
                                setIsEditar(true);
                            }
                        }
                        }/> 
                     </div>
                 }

                {isEditar ? 
                <input type='image' src={confirmar} alt='row' width="40px" height="40px" onClick={()=>{

                        if(Atributo === 'Vida'){
                            NPCDaraService.updateVida(id, {value: valor})
                            .then((response) => {
                                console.log("Vida alterada com sucesso");
                            })
                            .catch((e) => {
                            console.log(e);
                            });
                        }else{
                            NPCDaraService.updateSanidade(id, {value: sanidadeAt})
                            .then((response) => {
                                console.log("Sanidade alterada com sucesso");
                            })
                            .catch((e) => {
                            console.log(e);
                            });
                        }

                        setIsEditar(false);
                        
                    }
                }/> 
                :

                ''
                }

                {
                    (( Atributo === 'Iniciativa' || Atributo === 'Sanidade')) ? '' :
                    (isEditar && Atributo === 'Vida') ? '' :
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{paddingRight: '10px'}}>
                         <input type='image' src={minus} alt='row' width="40px" height="40px" onClick={()=>{
                                if(Atributo === 'Vida'){
                                    var newValue = vidaTot - 1;
                                    setVidaTot(newValue);
                                    alterarValorBanco(newValue);
                                }else{
                                    var newValue = valor - 1;
                                    setValor(newValue);
                                    alterarValorBanco(newValue);
                                    var newAdicionar = Adicionar + 1;
                                    setAdicionar(newAdicionar);
                                    alterarPontosAdicionar(newAdicionar);
                                }
                            }
                            }/> 
                        </div>
                        <div style={{paddingRight: '10px'}}>
                            <input type='image' src={plus} alt='row' width="40px" height="40px" onClick={()=>{
                                if(Atributo === 'Vida'){
                                    var newValue = vidaTot + 1;
                                    setVidaTot(newValue);
                                    alterarValorBanco(newValue);
                                }else{
                                    if(Adicionar > 0){
                                        var newValue = valor + 1;
                                        setValor(newValue);
                                        alterarValorBanco(newValue);
                                        var newAdicionar = Adicionar - 1;
                                        setAdicionar(newAdicionar);
                                        alterarPontosAdicionar(newAdicionar);
                                    } 
                                }    
                            }
                            }/> 
                        </div>
                    </div>
                 }
            
            </div>
         </div>
    );
}

export default CardAtributos;