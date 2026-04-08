import Child from "./Child.jsx"

export default function Parent(props) {
    let info = {
        name: "홍길동",
        age: "20"
    }
    return (
        <>
            <h1>Parent:: {props.name} </h1>
            <Child name="홍길동" age="20" info={info} />            
        </>
    )
}