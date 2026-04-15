import { Title, Description } from "../commons/Titles.jsx"
import Majors from "./Majors.jsx";

export default function About() {
    const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Placeat odio dicta necessitatibus libero magnam est alias nisi 
                laborum nesciunt! Quam possimus accusantium, provident fugiat 
                accusamus amet dicta fuga voluptate quo.`;
    return (
        <section id="about" class="section container">
            <Title title="About me" />
            <Description description={lorem} />
            <Majors />
            <ul class="jobs">
                <li class="job">
                    <img src="images/jobs/google.png" alt="google" />
                    <div>
                        <p class="job-name">Google as Junior Software Engineer</p>
                        <p class="job-period">2019 Oct - Until now</p>
                    </div>
                </li>
                <li class="job">
                    <img src="images/jobs/samsung.png" alt="samsung" />
                    <div>
                        <p class="job-name">Samsung as Junior Software Engineer</p>
                        <p class="job-period">2010 Oct - 2019 Oct</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}