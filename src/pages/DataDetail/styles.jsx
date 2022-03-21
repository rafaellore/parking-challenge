import styled from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding-bottom: 60px;
`


export const Main = styled.div`
  background-color: #fff;
  margin-top: 25px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 20px;
  border-radius: 4px;
`

export const Plate = styled.h1`
  font-size: 36px;
  color: #00BCD4;
  text-transform: uppercase;
  font-weight: 400;
`

export const BackDetail = styled.img`
  src: src;
  cursor: pointer;
`

export const SpanDetail = styled.span`
  display: block;
  font-size: 0.75rem;
  text-transform:uppercase ;
  color: rgba(155, 155, 155, 1);
  margin-top: 25px;
  font-weight: 500;
`;  

export const DataText = styled.p`
  font-size: 1.5rem;
  color: #0A261D;
  font-weight: 500;
`;  

export const Loading = styled.div`
  max-width: 360px;
  height: 100vh;
  gap: 23px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p`
  color: #4A4A4A;
  font-size: 1rem;
`;
