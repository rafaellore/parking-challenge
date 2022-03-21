import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoImage from "../../assets/avatar_parking.svg";
import MenuImage from "../../assets/menu.svg";
import CloseImage from "../../assets/close.svg";

import { HeaderContainer, NavMenu, Close, Logo, Menu, Link } from "./styles";

export default function Header() {
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);
  let navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  function handleEntrance() {
    navigate('/');
  }

  function handleExit() {
    navigate('/exit');
  }
  return (
    <HeaderContainer>
      <Logo src={LogoImage} onClick={handleBack} alt="Logo Parking"/>
      <Menu src={MenuImage} onClick={showSidebar}  ativo={Sidebar} width={36}/>
      <Close src={CloseImage} onClick={showSidebar} ativo={Sidebar}  width={36}/>
      <NavMenu ativo={Sidebar}>
       <ul>
         <Link onClick={handleEntrance}>Entrada</Link>
         <Link onClick={handleExit}>Saída</Link>
       </ul>
      </NavMenu>
    </HeaderContainer>
  );
}
