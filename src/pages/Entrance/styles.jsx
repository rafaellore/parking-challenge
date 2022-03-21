import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 41px;
  background-color: #fff;
  position: relative;
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
  color:  ${({ ativo }) => (ativo ? '#FF0068' : '#0A261D')};
  height: 67px;
  width: 100%;
`

export const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#28DD91' : '#DADADA')} ;
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

  @media (max-width: 400px) {
      height: 67px;
  }
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

export const ModalStyle = {
  content: {
    backgroundColor: '#fff',
    maxWidth: '360px',
    height: '279px',
    margin: '120px auto auto auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '23px'
  }
}

export const ModalText = styled.p`
  font-size: 1rem;
  color: #4A4A4A;
  text-transform: 'uppercase';
`