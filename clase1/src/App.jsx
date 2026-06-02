import './App.css'

// Componentes para la Tarea 
function Header() {
  return (
    <header className="header">
      <h1>Pagina</h1>
      <p>Estudiante de Fronted - SENA</p>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Sebastian Pachon - SENA</p>
    </footer>
  )
}

// Componente Tarjeta Personal 

function TarjetaPersonal() {
  return (
    <div className="tarjeta">
      <p style={{ fontStyle: 'italic', color: '#888' }}>
         No tengo fotos mías subidas a internet🥀
      </p>
      <h2>Sebastián Pachon</h2>
      <p><strong>Edad:</strong> 19 años</p>
      <p><strong>Carrera:</strong> Desarrollo de Software</p>
      <p><strong>Color favorito:</strong>Blanco</p>
      <button>Contactar</button>
    </div>
  )
}

// App Principal 

function App() {
  return (
    <div>

      {/* Tarea: Header */}
      <Header />

      {/* Taller guiado: Perfil básico */}
      <div className="seccion">
        <h1>Mi Perfil</h1>
        <p style={{ fontStyle: 'italic', color: '#888' }}>
           No tengo fotos mías subidas a internet 🥀
        </p>
        <p>Hola, estoy aprendiendo React</p>
        <button>Ver más</button>
      </div>

      {/* Tarea: Información personal y hobbies */}
      <div className="seccion">
        <h2>Sobre mí</h2>
        <p>Me llamo Sebastian Pachon y estudio en el SENA.</p>
        <h3>Mis hobbies</h3>
        <ul>
          <li>Programar</li>
          <li>Escuchar música</li>
          <li>Jugar videojuegos</li>
        </ul>
      </div>

      {/* Ejercicio individual: Tarjeta personal con componente */}
      <TarjetaPersonal />

      {/* Tarea: Footer */}
      <Footer />

    </div>
  )
}

export default App
