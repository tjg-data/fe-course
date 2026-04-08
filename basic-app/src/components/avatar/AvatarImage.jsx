import style from './Avatar.module.css';

export default function AvatarImage(props) {
    return (
        <img src={props.img} className={style.avatar_img} alt="photo" />
    )
}