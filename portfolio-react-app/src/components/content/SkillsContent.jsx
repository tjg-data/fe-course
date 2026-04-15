import React from 'react';
import Article from './Article.jsx';
import SkillsTitle from './SkillsTitle.jsx';
import SkillsCoding from './SkillsCoding.jsx';
import SkillsTools from './SkillsTools.jsx';

export default function SkillsContent() {
    const tools=[
        "Visual Studio Code",
        "IntelliJ",
        "Android Studio",
        "Eclipse",
        "MySQL Workbench"
    ]
    const etc = [ "Git", "Scrum Master", "SVN"]
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills" />                 
                <SkillsCoding />
            </Article>
            <Article style="skills-tools">
                <SkillsTitle title="Tools" />                 
                <SkillsTools list={tools} />
            </Article>
            <Article style="skills-etc">
                <SkillsTitle title="Etc" />                 
                <SkillsTools list={etc} />
            </Article>
        </div>
    );
}

