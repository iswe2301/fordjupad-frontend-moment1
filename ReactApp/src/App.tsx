import Header from "./components/Header"; // Importera header-komponenten
import Footer from "./components/Footer"; // Importera footer-komponenten

function App() {
  return (
    <>
    {/* Använd header och footer, sätt titel som prop */}
      <Header title="Mina resor"/>
      <main style={{ padding: "20px" }}>
        <p>Lite text här...</p>
      </main>
      <Footer />
    </>
  )
}

export default App
