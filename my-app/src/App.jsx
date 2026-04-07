/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
import './App.css'
import Header from './components/Header.jsx';

export default function App() {

  return (  
    <>
      <h1 style={{color:'blue'}}>Welcome to React World!!</h1>
      <Header />
    </>
  )
}

