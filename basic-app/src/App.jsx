import './App.css';
import style from './App.module.css'  //전역 CSS
import Body from './components/Body.jsx';
import Parent from './components/Parent.jsx';

function App() {

  return ( 
    <>
      <h1>Hello~ React!!</h1>
      <button className={style.button}>App::클릭하세요</button>
      <Body />
      <Parent name="홍길동 아버지" />
    </>
  )
}

export default App
