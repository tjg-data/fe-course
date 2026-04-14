import Logo from "./header/Logo.jsx";

export default function Header() {
    return (
        <header class="header">
            <Logo   img="/images/favicon.ico"
                    alt="header-logo"
                    style="header-logo-img"
                    title="Judy"
            />
            <nav>
                <ul class="header-menu open">
                    <li><a href="#home" class="header-menu-item active">Home</a></li>
                    <li><a href="#about" class="header-menu-item">About</a></li>
                    <li><a href="#skills" class="header-menu-item">Skills</a></li>
                    <li><a href="#work" class="header-menu-item">My Work</a></li>
                    <li><a href="#testimonial" class="header-menu-item">Testimonial</a></li>
                    <li><a href="#contact" class="header-menu-item">Contact</a></li>
                </ul>
            </nav>
            <button class="header-toggle" id="menu-toggle"><i class="fa-solid fa-bars"></i></button>
        </header>
    )
}