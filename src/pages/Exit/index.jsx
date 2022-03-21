import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate  } from "react-router-dom";

import Modal from 'react-modal';
import { Main, Toggle, ToggleItem, LinkStyle, ContainerInput, Label, Input, ButtonOut ,ButtonPayment, Error, ModalStyle, ModalText, History, Back, ModalTitle, ImageModal, SuccessText } from "./styles";
import Header from "../../components/Header";
import Success from "../../assets/round-done-button.svg";
import Alert from "../../assets/ic_alert.svg";



export default function Entrance() {

  const [plate, setPlate] = useState('');
  const [ativo, setAtivo] = useState(false);
  const [error, setError] = useState(false);
  const [outlIsOpen, setOutIsOpen] = useState(false);
  const [paymentIsOpen, setPaymentIsOpen] = useState(false);
  let navigate = useNavigate();
  const [success, setSuccessIsOpen] = useState(false);
  const [successText, setSuccessText] = useState('');



  function handleInput(event) {
    let plateText = event.target.value;
    setPlate(plateText);

    let plateLength = plate.length + 1;

    if(plateLength >= 3) {
      setAtivo(true)
    }
    else if (plateLength < 3) {
      setAtivo(false)
    }  
  }

  async function handleOut() {
    if (ativo === false) {
      return;
    } else {
        await axios
        .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/out`)
        .then(() => {
          setError(false);
          setSuccessText('SAÍDA LIBERADA')
          setSuccessIsOpen(true)
        })
        .catch((err) => {
          setError(true);
          handleCloseModal() 
          console.error("ops! ocorreu um erro" + err);
        });
    }
  }

  async function handlePayment() {
    if (ativo === false) {
      return;
    } else {
       await axios
        .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/pay`)
        .then(() => {
          setError(false);
          setSuccessText('PAGO!')
          setSuccessIsOpen(true)
        })
        .catch((err) => {
          setError(true);
          handleCloseModal() 
          console.error("ops! ocorreu um erro" + err);
        });
    }
  }

  async function handleHistory() {
    if (ativo === false) {
      setError(true);
      return;
    } else {
       await axios
        .get(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}`)
        .then((res) => {
          setError(false);
          navigate(`/data?plate=${plate}`);
          
        })
        .catch((err) => {
          setError(true);
          console.error("ops! ocorreu um erro" + err);
        });
      }
   }
  
  function handleOpenPayModal() {
      if (ativo === false) {
      return;
    } 
    setPaymentIsOpen(true)
  }

  function handleOpenOutModal() {
      if (ativo === false) {
      return;
    } 
    setOutIsOpen(true)
  }

  function handleCloseModal() {
    setOutIsOpen(false)
    setPaymentIsOpen(false)
    setSuccessIsOpen(false)
  }

  return (
    <div className="container">
      <Header/>
      <Main>
        <Toggle>
          <Link to="/" style={LinkStyle}>
            <ToggleItem ativo={false}>Entrada</ToggleItem>
          </Link>
          <Link to="/exit" style={LinkStyle}>
            <ToggleItem ativo={true}>Saída</ToggleItem>
          </Link>
        </Toggle>
       
          <Label>Número da placa:</Label>
          <ContainerInput>
            <Input maxLength={8} placeholder="AAA-000" value={plate} onChange={(event) => handleInput(event)}/>
            <Error ativo={error}> <img src={Alert} alt="" width={20}/>Um erro ocorreu, insira uma placa válida </Error>

            <ButtonPayment ativo={ativo} onClick={handleOpenPayModal}>PAGAMENTO</ButtonPayment>
            <ButtonOut ativo={ativo} onClick={handleOpenOutModal}>SAÍDA</ButtonOut>
            <History onClick={handleHistory}>VER HISTORICO</History>

            {/* Pagamento */}
            <Modal
              isOpen={paymentIsOpen}
              style={ModalStyle}
              onRequestClose={handleCloseModal}
            >
              <ModalText>Confirma o pagamento da placa abaixo?</ModalText>
              <ModalTitle>{plate}</ModalTitle>
              <ButtonPayment ativo={ativo} onClick={handlePayment}>PAGAMENTO</ButtonPayment>
             <Back onClick={handleCloseModal}>Voltar</Back>
             
            </Modal>

            {/* Saida */}
            <Modal
              isOpen={outlIsOpen}
              style={ModalStyle}
              onRequestClose={handleCloseModal}
    
            >
           
              <ModalText>Confirma a saída do veiculo da placa abaixo?</ModalText>
              <ModalTitle>{plate}</ModalTitle>
              <ButtonPayment ativo={ativo} onClick={handleOut}>Liberar Saída</ButtonPayment>
             <Back onClick={handleCloseModal}>Voltar</Back>
             
            </Modal>

            {/* Sucesso */}
            <Modal
              isOpen={success}
              style={ModalStyle}
              onRequestClose={handleCloseModal}
            >
           
            <ImageModal src={Success} alt="" />
            <SuccessText>{successText}</SuccessText>
             
            </Modal>

            
          </ContainerInput>
        
      </Main>
    </div>
    // <div className="container">
    //
    //   <main className="main">
    //     <div className="toggle">
    //       <Link to="/" className="toggle-item toggle-active">
    //         Entrada
    //       </Link>
    //       <Link to="/exit" className="toggle-item">
    //         Saída
    //       </Link>
    //     </div>
    //     <div className="container-input">
    //       <label className="input-title">Número da placa:</label>
    //       <input type="text"  placeholder="AAA-000" className="input"/>
    //       <button className="button">Confirmar Entrada</button>
    //     </div>
    //   </main>
    // </div>
  );
}
