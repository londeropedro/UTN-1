import './App.css';

function App() {
  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default App;
