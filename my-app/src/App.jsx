/**
 * 부모 컴포넌트 : 최상위 컴포넌트
 */
import './App.css'
import Button from './components/Button.jsx';
import Content from './components/Content.jsx';

export default function App() {

  return (  
    <>
      <h1>Welcome to React World!!</h1>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Content />
    </>
  )
}

