
export default function TextInput({ item, value, handleChange }) {
    const { type, name } = item;
    return (
        <input  type={type}
                id={name} 
                name={name}
                value={value}
                onChange={(e)=>{ handleChange(e)}}
                // ref={refs.addressRef}
            />
    )
}