import { Title, SubTitle, TitleDescription } from "../commons/Titles.jsx"

export default function Skills() {
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

    return (
        <section id="skills" className="section container">
            <Title title="My Skills" />
            <SubTitle subTitle="Skills & Attributes" />
            <TitleDescription titleDescription={description} />
            <div class="skills">
                <article class="skills-coding">
                    <h3 class="skills-title">Coding Skills</h3>
                    <ul>
                        <li class="bar">
                            <div class="bar-title"><span>HTML</span><span>98%</span></div>
                            <div class="bar-bg"><div class="bar-value" style={{width:"98%"}}></div></div>
                        </li>
                        <li class="bar">
                            <div class="bar-title"><span>CSS</span><span>90%</span></div>
                            <div class="bar-bg"><div class="bar-value css"></div></div>
                        </li>
                        <li class="bar">
                            <div class="bar-title"><span>JavaScript</span><span>90%</span></div>
                            <div class="bar-bg"><div class="bar-value javascript"></div></div>
                        </li>
                        <li class="bar">
                            <div class="bar-title"><span>TypeScript</span><span>80%</span></div>
                            <div class="bar-bg"><div class="bar-value typescript"></div></div>
                        </li>
                        <li class="bar">
                            <div class="bar-title"><span>React</span><span>79%</span></div>
                            <div class="bar-bg"><div class="bar-value react"></div></div>
                        </li>
                        <li class="bar">
                            <div class="bar-title"><span>NodeJS</span><span>68%</span></div>
                            <div class="bar-bg"><div class="bar-value nodejs"></div></div>
                        </li>
                    </ul>
                </article>
                <article class="skills-tools">
                    <h3 class="skills-title">Tools</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>IntelliJ</li>
                        <li>Android Studio</li>
                        <li>Eclipse</li>
                        <li>MySQL Workbench</li>
                    </ul>
                </article>

                <article class="skills-etc">
                    <h3 class="skills-title">Etc</h3>
                    <ul>
                        <li>Git</li>
                        <li>Scrum Master</li>
                        <li>SVN</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}