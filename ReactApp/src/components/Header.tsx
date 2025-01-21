import headerImage from "../assets/header.jpg"; // Importera bild för sidhuvudet

// Interface för att definiera vilka props som ska skickas till komponenten
interface HeaderProps {
    title: string; // Titel för sidan
}

// Funktion för att visa sidhuvudet med en bild
function Header({ title }: HeaderProps) {
    return (
        <header>
            {/* Banner med titel, jsx-inline styling */}
            <div style={{ backgroundColor: "#222021", padding: "1.5rem", textAlign: "center" }}>
                <h1 style={{color: "#ffffff", margin: "0"}}>{title}</h1>
            </div>

            {/* Headerbild */}
            <div style={{ width: "100%" }}>
                <img
                    src={headerImage}
                    alt="Headerbild"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        maxHeight: "600px",
                        objectFit: "cover"
                    }}
                />
            </div>
        </header>
    );
}

export default Header; // Exportera header-komponenten
