import AvatarImage from "../commons/AvatarImage.jsx"
import Menu from "../commons/Menu.jsx"

export default function Home() {
    return (
        <section id="home">
            <AvatarImage img="images/favicon.ico"
                            alt="photo"
                            style="home-avatar" />
            <h2 className="home-title">
                Hello<br/>
                I'm <strong className="home-title-strong">Junior Developer</strong>,
                Judy
            </h2>
            <p className="home-description">A software engineer currently residing in Seoul, South Korea</p>
            <Menu   href="#"
                    style="home-contact"
                    name="contact me" />
        </section>
    )
}