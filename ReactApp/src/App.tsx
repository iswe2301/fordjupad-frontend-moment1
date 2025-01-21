import Header from "./components/Header"; // Importera header-komponenten
import Footer from "./components/Footer"; // Importera footer-komponenten
import TravelCard from "./components/TravelCard"; // Importera TravelCard-komponenten

// Array med resor
const travels = [
  {
    country: "Italien",
    place: "Dolomiterna",
    visited: true,
    year: 2023,
    rating: 5
  },
  {
    country: "Lofoten",
    place: "Norge",
    visited: true,
    year: 2021,
    rating: 5
  },
  {
    country: "Norge",
    place: "Geiranger",
    visited: true,
    year: 2021,
    rating: 4
  },
  {
    country: "Bayern",
    place: "Tyskland",
    visited: true,
    year: 2023,
    rating: 3
  },
  {
    country: "Sverige",
    place: "Mölle",
    visited: true,
    year: 2020,
    rating: 3
  },
  {
    country: "Frankrike",
    place: "Verdon",
    visited: false,
    year: 0,
    rating: 0
  }
]

function App() {
  return (
    <>
      {/* Använd header och footer, sätt titel som prop */}
      <Header title="Mina resor" />
      <main>
        {/* Loopa igenom resor och visa en instans av TravelCard för varje resa */}
        {travels.map((travel, index) => (
          <TravelCard key={index} country={travel.country} place={travel.place} visited={travel.visited} year={travel.year} rating={travel.rating} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
