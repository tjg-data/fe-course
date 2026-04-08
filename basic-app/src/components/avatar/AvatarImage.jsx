import style from './Avatar.module.css';

export default function AvatarImage({img}) {
    return (
        <img src={img} className={style.avatar_img} alt="photo" />
    )
}