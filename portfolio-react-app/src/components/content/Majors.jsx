import Major from "./Major.jsx";

export default function Majors() {
    const majors = [
        {"icon": "html", "title": "Front-end", "subjects": "HTML, CSS, JavaScript, TypeScript, React, WebAPIs"},
        {"icon": "mobile", "title": "Mobile", "subjects": "Android Studio, React Native, iOS, Swift, Java, Kotlin"},
        {"icon": "server", "title": "Back-end", "subjects": "Java, JavaScript, Go, Kotlin, Spring, Spring Boot"}
    ]

    return (
        <ul className="majors">
            { majors.map((item, idx) =>  
                <li className="major" key={idx}>
                    <Major  title={item.title}
                            subjects={item.subjects}
                            icon={item.icon}  />
                </li>            
            ) }
        </ul>
    )
}