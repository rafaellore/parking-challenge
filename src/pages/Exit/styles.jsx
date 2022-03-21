import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 41px;
  background-color: #fff;
 

 
`

export const Toggle = styled.div`
  display: flex;
  background: #F2F2F2;
 
`

export const LinkStyle = {
  textDecoration: "none",
  color: '#4dd0e1',
  flex: '1'
};

export const ToggleItem = styled.div`
  background: ${({ ativo }) => (ativo ? '#fff' : 'none')} ;
  border-bottom: 3px solid transparent;
  border-color: ${({ ativo }) => (ativo ? '#4dd0e1' : 'none')};
  padding: 13px 30px;
  text-align: center;
  font-size: 1rem;
  width: 100%;
  flex: 1;
`

export const ContainerInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;  
  gap: 13px;
  padding: 7px 16px;
  
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #9B9B9B;
  padding: 0px 16px;
  margin-top: 38px;
`

export const Input = styled.input`
  text-align: center;
  background: #FFFBE6;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  padding: 17px;
  color: #9B9B9B;
  height: 67px;
  width: 100%;

`

export const ButtonPayment = styled.button`
  background: ${({ ativo }) => (ativo ? '#A769B2' : '#DADADA')} ;
  color: ${({ ativo }) => (ativo ? '#fff' : '#9B9B9B')};
  border-radius: 4px;
  border: none;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  font-weight: 500;
  height: 67px;
  cursor: pointer;
  transition: 0.4s;
  text-transform: uppercase;
`

export const ButtonOut = styled.button`
background: none;
  border-color: ${({ ativo }) => (ativo ? 'red' : '#DADADA')} ;
  color: ${({ ativo }) => (ativo ? '#A769B2' : '#9B9B9B')};
  border-radius: 4px;
  border: 2px solid;
  font-family: 'Open Sans';
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  font-weight: 500;
  height: 67px;
  cursor: pointer;
  transition: 0.4s;
`

export const Error = styled.div`
  display: ${({ ativo }) => (ativo ? 'flex' : 'none')};
  background: rgba(255, 23, 68, 0.15);
  color: rgba(255, 23, 68, 1);
  border-radius: 4px;
  padding: 12px 6px;
  font-size: 14px;
  align-items: center;
  gap: 20px;
`

export const History = styled.div`
  display: block;
  text-align: center;
  padding: 12px 6px;
  font-size: 1rem;
  color: #00BCD4;
  cursor: pointer;
  margin-top: 24px;
`


export const ModalStyle = {
  content: {
    backgroundColor: '#fff',
    maxWidth: '360px',
    height: '300px',
    margin: '120px auto auto auto',
    display: 'grid',
  },
  overlay: {
    background: 'rgba(0,0,0,0.5)',
  }
}

export const ModalText = styled.p`
  font-size: 1rem;
  color: #4A4A4A;
  text-transform: 'uppercase';
  text-align: center;
  max-width: 192px;
  margin: 0 auto;

`

export const Back = styled.a`
  font-size: 1rem;
  color: #00BCD4;
  text-transform: uppercase;
  text-align: center;
  padding:  24px;
  cursor: pointer;
`

export const ModalTitle = styled.h1`
  font-size: 36px;
  color: #00BCD4;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  margin-bottom: 24px;
  font-weight: 400;
`

export const ImageModal = styled.img`
  src: src;
  margin: 0 auto;
  margin-top: 70px;
`

export const SuccessText = styled.p`
  font-size: 1rem;
  color: #4A4A4A;
  text-transform: 'uppercase';
  text-align: center;
  max-width: 192px;
  margin: 0 auto;
  margin-top: -40px;
`