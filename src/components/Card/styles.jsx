import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px 17px;
  gap: 60px;
  background-color: #fff;
  margin: 17px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const CardTitle = styled.span`
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #9b9b9b;
 
`;

export const CardData = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #0A261D;
`

export const LinkStyle = {
  textDecoration: 'none'
}