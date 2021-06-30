# Quote

#### This code randomly changes the background color, font color, and buttons color according to the click of the button after receiving quoteList/colorList

```js
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

const colorList = {             // 원래는 배열안에 key를 color value에 색상값을 가지고있는 오브젝트를 4개를 넣었었다. 
  yellow: '#f39c12',            // 배열안에 4개의 오브젝트를 넣어서 랜덤으로 돌리고 배열 index 값의 속성을 가져오는 느낌

  red: 'rgb(251, 105, 100)',

  green: 'rgb(115, 168, 87)',

  brown: '#472e32'
};
```
