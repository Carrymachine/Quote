import QuoteView from './component/QuoteView'
import Card from './component/Card'
import styled, { createGlobalStyle } from 'styled-components'
import { useState, useCallback } from 'react'

const quoteList = [
  {
      id : 0,
      value : "불편해? 불편하면 자세를 고쳐앉아. 보는 자세가 잘못된거 아니예요.",
      author : "- Ralo the man of Gimhae"
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

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: var(--brown);
  }
  :root {
    --yellow: rgb(243, 156, 18);
    --red: rgb(251, 105, 100);
    --green: rgb(115, 168, 87);
    --brown: rgb(52, 34, 36);
  }
`;



function App() {
  const [quote, setQuote] = useState("");

  const handleChange = useCallback(() => {
    const randomQuoteIndex = Math.floor(Math.random()*quoteList.length);
    setQuote(quoteList[randomQuoteIndex].value);
  });

  return (
    <>
    <GlobalStyle />
    <Card quoteData={quote} onChange={handleChange}>
        <QuoteView cardData={quote}/>
    </Card>
    </>
  );
}

export default App;
