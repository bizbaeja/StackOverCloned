/*eslint-disable*/
import { Reset } from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import QuestionsPage from './QuestionsPage';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400&family=Gaegu&family=Noto+Serif+KR:wght@300&display=swap');

  body{
    background: #2d2d2d;
    color:#fff;
    font-family:Roboto, sans-serif;
  }

`;


function App() {
  return (
    <div>
     <Reset />
      <GlobalStyles />
      <Header />
      <QuestionsPage />
    </div>
      );
    }

export default App;
