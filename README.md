# Parking Challenge 🚗
Teste prático feito pela Parafuzo. A aplicação consiste em uma web app para registro e visualização de entradas e saídas de veículos de um estacionamento. Utilizei ReactJS e algumas libs como react-modal, react-router-dom, styled-components, react-testing-library e axios. Foi interessante fazer esse desafio pois revisitei o ReactJS e o conceito de componentização que é muito produtivo.

Link do deploy (para visualização): https://parking-challenge.netlify.app/

## Imagens do projeto: 💻
<div>
  <img src="https://i.imgur.com/U0oNpLG.png">
  <img src="https://i.imgur.com/dS2OeSb.png">
  <img src="https://i.imgur.com/jQIbPa1.png">
  <img src="https://i.imgur.com/vCdKjye.png">
</div>

## Dificuldades
Tive dificuldades em relação aos testes dos componentes, pois não havia estudado sobre nos cursos que realizei até então. Um outro ponto é de que, em alguns casos, a propriedade "reservation" na API pode se repetir durante a entrada de uma placa, percebi isso naquela placa que usaram no documento do teste, como exemplo. Percebi também que o mesmo erro ocorre se registrarmos entradas em um curto intervalo. Isso acaba gerando um conflito na página "DataDetail", pois como o "reservation" deveria ser um dado único, ele acaba mostrando a tela com dados duplicados. Utilizei essa propriedade "reservation" pois era a que mais se assemelhava a um ID. Acredito que a API deveria retornar um erro se uma placa fizesse uma requisição de entrada em um curto intervalo, onde ela já tivesse saido e feito o pagamento, para não gerar esse conflito de reservas com a propriedade "reservation" duplicada. Um exemplo é as reservas com o mesmo valor: "607b5e", da placa aaa-4444.

## Clonando o repositório :rocket:
```bash
# Clone este repositório
$ git clone https://github.com/rafaellore/parking-challenge.git

# Acesse a pasta do projeto no terminal/cmd
$ cd parking-challenge

# Instale as dependências
$ yarn install

# Execute os testes
$ yarn test

# Execute o projeto
$ yarn start

```
