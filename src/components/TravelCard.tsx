import './TravelCard.css'; // Importera CSS-fil för komponenten

// Interface för att definiera en resa
interface TravelProps {
    country: string;
    place: string;
    visited: boolean;
    year: number;
    rating: number;
}

// Funktion för att visa en resa
function TravelCard({ country, place, visited, year, rating }: TravelProps) {
    return (
        <div className="travel-card">
            <h2>{place} - {country}</h2>
            {/* Om resan är besökt, visa "Ja", om inte, visa "Nej" */}
            <p><strong>Besökt:</strong> {visited ? "Ja" : "Nej"}</p>
            {/* Om resan är besökt, visa år, om inte, visa "Inte besökt" */}
            <p><strong>År:</strong> {visited ? year : "Inte besökt"}</p>
            {/* Om betyg är 0, visa "Inte betygsatt", annars visa betyg */}
            <p><strong>Betyg:</strong> {rating > 0 ? `${rating}/5` : "Inte betygsatt"}</p>
        </div>
    );
}

export default TravelCard; // Exportera TravelCard-komponenten
