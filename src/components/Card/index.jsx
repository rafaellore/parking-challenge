import React from "react";
import { Link } from "react-router-dom";

import { CardContainer, CardData, CardTitle, LinkStyle } from "./styles";

export default function Card( {plate, paid, time, reservation} ) {

    if(paid === true) {
      return (
        <Link to={`/data-detail?plate=${plate}&reservation=${reservation}`} style={LinkStyle}>
          <CardContainer      
            id="card"
          >
            <div>
              <CardTitle>Tempo Atual</CardTitle>
              <CardData>{time}</CardData>
            </div>
            <div>
              <CardTitle>Pagamento</CardTitle>
              <CardData>Pago</CardData>
            </div>
          </CardContainer>
        </Link>
      );
    } else if (paid === false ) {
       return (
          <Link to={`/data-detail?plate=${plate}&reservation=${reservation}`} style={LinkStyle}>
          <CardContainer      
            data-testid="card"
          >
            <div>
              <CardTitle>Tempo Atual</CardTitle>
              <CardData>{time}</CardData>
            </div>
            <div>
              <CardTitle>Pagamento</CardTitle>
              <CardData>-</CardData>
            </div>
          </CardContainer>
        </Link>
      );
    } else {
      return (
        <h1 data-testid="error">Um erro ocorreu, por favor tente novamente mais tarde</h1>
      );
    }
 ;
}
