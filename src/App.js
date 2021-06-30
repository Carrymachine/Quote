import QuoteView from './component/QuoteView'
import Card from './component/Card'
import styled, { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import { useState, useCallback, useEffect } from 'react'

const quoteList = [
  {
      id : 0,
      value : "I never dreamed about success, I worked for it.",
      author : "- Estee Lauder",
      
  },
  {
      id : 1,
      value : "Do not try to be orivinal, Just try to be good.",
      author : "- Paul Rand"
  },
  {
      id : 2,
      value : "The only thing worse than starting and failing is not starting something.",
      author : "- Seth Godin"
  },
  {
      id : 3,
      value : "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
      author : "- Jim Rohn"
  }
];

const colorList = {
  yellow: '#f39c12',

  red: 'rgb(251, 105, 100)',

  green: 'rgb(115, 168, 87)',

  brown: '#472e32'
};

const defaultColor = colorList.yellow;

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
    background: ${defaultColor};
`;



function App() {
  const [quote, setQuote] = useState(quoteList[0]);
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    document.body.style.color = color; //이거 왜 되는거임?
    document.body.style.background = color;
  }, [color]);


  const handleChange = useCallback(() => {
    const randomIndexs = ['',''].map(() => Math.floor(Math.random()*quoteList.length));
    setQuote(quoteList[randomIndexs[0]]);
    setColor(Object.values(colorList)[randomIndexs[1]]);
  },[]);

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
