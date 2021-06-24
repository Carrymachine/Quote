import QuoteView from './component/QuoteView'
import Card from './component/Card'
import styled, { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import { useState, useCallback, useEffect } from 'react'

const quoteList = [
  {
      id : 0,
      value : "불편해? 불편하면 자세를 고쳐앉아. 보는 자세가 잘못된거 아니예요.",
      author : "- Ralo the man of Gimhae",
      
  },
  {
      id : 1,
      value : "못생긴년이 담배피는거만큼 꼴보기 싫은게 없어",
      author : "- Ralo the man of Gimhae"
  },
  {
      id : 2,
      value : "내가 누군가를 좋아한다는 사실이 그 사람에게는..",
      author : "- Ralo the man of Gimhae"
  },
  {
      id : 3,
      value : "컽",
      author : "- Ralo the man of Gimhae"
  }
];

const colorList = [
  {
    color: '#f39c12'
  },
  {
    color: 'rgb(251, 105, 100)'
  },
  {
    color: 'rgb(115, 168, 87)'
  },
  {
    color: '#472e32'
  }
];

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    ${props => {
      const color = colorList[0].color;
      return css`
        background: ${color};
      `;
    }};
`;



function App() {
  const [quote, setQuote] = useState(quoteList[0]);
  const [color, setColor] = useState(colorList[0].color);


  const handleChange = useCallback(() => {
    const randomIndex = Math.floor(Math.random()*quoteList.length);
    setQuote(quoteList[randomIndex]);
    setColor(colorList[randomIndex].color);
    document.body.style.color = color; //이거 왜 되는거임?
    document.body.style.background = color;
    

  });

  return (
    <>
      <GlobalStyle body />
        <Card quoteData={quote} colorData={color} onChange={handleChange}>
          <QuoteView cardData={quote}/>
        </Card>
    </>
  );
}

export default App;
