import AvatarList from '../avatar/AvatarList.jsx';
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';

export default function EffectFetch() {
    // const alist = [
    // {img: "/people1.webp", name: "James" },
    // {img: "/people2.webp", name: "김철수"},
    // {img: "/people3.webp", name: "최영희"},
    // ]
    const url = "http://localhost:5173/data/alist.json";
    fetch(url)
        .then((response) => response.json())
        .then((jsonData) => console.log(jsonData) )
        .catch((error) => console.log(error) );
     

    return(
        <>
            {/* <AvatarList list={alist} /> */}
        </>
    )
}