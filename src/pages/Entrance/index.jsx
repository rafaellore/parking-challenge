import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Modal from 'react-modal';
import { Main, Toggle, ToggleItem, LinkStyle, ContainerInput, Label, Input, Button, Error, ModalStyle, ModalText } from "./styles";
import Header from "../../components/Header";
import Success from "../../assets/round-done-button.svg";
import Alert from "../../assets/ic_alert.svg";


export default function Entrance() {

  const [plate, setPlate] = useState('');
  const [ativo, setAtivo] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);


  function handleInput(event) {
    let plateText = event.target.value;
    setPlate(plateText);

    let plateLength = plate.length + 1;

    if(plateLength >= 3) {
      setAtivo(true)
      setError(false);
    }
    else if (plateLength < 3) {
      setAtivo(false)
    }  
  }

  async function handleSubmit() {
    if (ativo === false) {
      return;
    } else {
      await axios
        .post("https://parking-lot-to-pfz.herokuapp.com/parking", {
          plate: plate,
        })
        .then(() => {
          handleOpenModal();
          setError(false);
        })
        .catch((err) => {
          setError(true);
          console.error("ops! ocorreu um erro" + err);
        });
    }
  }
  
  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <div className="container">
      <Header/>
      <Main>
        <Toggle>
          <Link to="/" style={LinkStyle}>
            <ToggleItem ativo={true}>Entrada</ToggleItem>
          </Link>
          <Link to="/exit" style={LinkStyle}>
            <ToggleItem ativo={false}>Saída</ToggleItem>
          </Link>
        </Toggle>
       
          <Label>Número da placa:</Label>
          <ContainerInput>
            <Input maxLength={8} placeholder="AAA-000" ativo={error} value={plate} onChange={(event) => handleInput(event)}/>
            <Error ativo={error}> <img src={Alert} alt="" width={20}/>Um erro ocorreu, insira uma placa válida </Error>
            <Button ativo={ativo} onClick={handleSubmit}>CONFIRMAR ENTRADA</Button>
            <Modal
              isOpen={modalIsOpen}
              style={ModalStyle}
              onRequestClose={handleCloseModal}
            >
              <img src={Success} alt=""  width={60}/>
              <ModalText>Registrado!</ModalText>
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
