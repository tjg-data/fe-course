
export default function Button({type, name, styles}) {
    let { w, h, bg, color } = styles; 
    return (        
        <button type={type}
                name={name}
                style={{width: w, 
                        height: h,
                        backgroundColor: bg,
                        color: color}}>{name}</button>        
    )
}