import AvatarImage from "./components/avatar/AvatarImage.jsx"
import AvatarImageList from "./components/avatar/AvatarImageList.jsx"
import Avatar from "./components/avatar/Avatar.jsx"
import AvatarList from "./components/avatar/AvatarList.jsx"
import Menu from './components/menu/Menu.jsx';
import style from './components/menu/Menu.module.css';
import people1 from './assets/people1.webp';
import people2 from './assets/people2.webp';
import people3 from './assets/people3.webp';

export default function App() {
  const list = [
    {img: people1},
    {img: people2},
    {img: people3},
    {img: people3}
  ]
  const alist = [
    {img: people1, name: "Smith"},
    {img: people2, name: "James"},
    {img: people3, name: "Anne"},
    {img: people3, name: "Anne"}
  ]
  return ( 
    <>
      <AvatarImage img={people1} />
      <Avatar name="Anne" img={people3} />
      <AvatarImageList imgList={list} />
      <AvatarList list={alist} />
    </>
  )
}


