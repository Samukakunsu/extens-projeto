import "./App.css";

export function App() {
  return (
    <>
      {/* Header */}
      <header className="header-container">
        <h1 className="logo">TECPIXEL</h1>
        <div className="botoesMenu">
  <button><i className="fa fa-home"></i><span className="texto">Home</span></button>
  <button><i className="fa fa-users"></i><span className="texto">Quem somos</span></button>
  <button><i className="fa fa-envelope"></i><span className="texto">Contato</span></button>
</div>
        <button className="botaobranco">Iniciar avaliação</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="content">
          <div className="text-content">
            <h2>
              <span className="gradiente">Nos conheça <br/>
              melhor!</span>
            </h2>
            <p>
              Somos uma equipe independente, originada <br />
              por meio acadêmico a fins de ajudar a <br/>comunidade diretamente.
            </p>
            <button>Saber mais</button>
          </div>

          <div className="image-content">
            <img src="8591225.png" alt="Imagem do cara de fone" />
          </div>
        </div>
      </section>

      {/* Análise Técnica */}
      <section className="anatec">
        <h2>
          <span className="gradiente">Análise Técnica</span>
        </h2>
        <p>
          Responda as perguntas para que nossa análise <br />
          seja feita da melhor forma.
        </p>
        <p>Fique tranquilo, vamos resolver seu problema <br/>junto a você!</p>
        <button>Começar</button>
      </section>

      {/* Mockup */}
      <section className="mockup-section">
        <img src="mockup de celular.png" alt="Mockup de celular" />
      </section>

      {/* Background decorativo */}
      <div className="background-decor">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </>
  );
}

export default App;
