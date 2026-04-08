/**
 * Avatar.jsx - 아바타이미지 + 이름
 */
import AvatarImage from "./AvatarImage.jsx"

export default function Avatar({name, img}) {
    return (
        <div>
            <AvatarImage img={img}/>
            <p>{name}</p>
        </div>
    )
}