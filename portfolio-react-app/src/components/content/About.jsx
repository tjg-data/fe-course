import { Title, Description } from "../commons/Titles.jsx"
import Majors from "./Majors.jsx";
import Jobs from "./Jobs.jsx";

export default function About() {
    const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Placeat odio dicta necessitatibus libero magnam est alias nisi 
                laborum nesciunt! Quam possimus accusantium, provident fugiat 
                accusamus amet dicta fuga voluptate quo.`;
    return (
        <section id="about" className="section container">
            <Title title="About me" />
            <Description description={lorem} />
            <Majors />
            <Jobs />            
        </section>
    )
}