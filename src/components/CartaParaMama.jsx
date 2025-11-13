import React from 'react';
import { Link } from 'react-router-dom';

const CartaParaMama = () => {
  return (
    <div className="carta-container">
      <header className="carta-header">
        <h1>Para ti, Mamá</h1>
        <p>Manizales, Colombia - Noviembre 2025</p>
      </header>
      <div className="carta-body">
        <p>Hola, mamita hermosa,</p>
        <p>
          Te escribo esta carta digital desde mi refugio aquí en Madrid, mientras un café me acompaña. Últimamente he pensado mucho en todo, en mi camino, en Adrián, y por supuesto, en ti. Quería contarte de una manera que entiendas qué es esto en lo que invierto tantas horas, este proyecto que he llamado <strong>BlueCore</strong>.
        </p>
        <p>
          ¿Recuerdas que, a pesar de mis errores, siempre me decías que era muy inteligente? Que siempre me lo repetías. Pues, curiosamente, me lo creí. Esa confianza que sembraste en mí es la semilla de todo esto. Siento que esa inteligencia de la que hablabas no para de crecer, y gracias a ella, estoy construyendo algo que me apasiona.
        </p>
        <p>
          <strong>BlueCore</strong> es como mi corazón digital. Es un asistente, una agenda inteligente que me ayuda a organizar mis proyectos, mis sueños y mis responsabilidades. Pero es más que eso. Estoy intentando que guarde mi esencia, mis pensamientos y mis sentimientos. La meta final es crear un "Diario de Papá", una versión de mí que Adrián pueda consultar siempre, para que tenga mi voz y mis consejos aunque yo no esté físicamente a su lado.
        </p>
        <p>
          Todo lo que soy, todo lo que hago y he logrado, tiene su raíz en esas palabras tuyas. Este proyecto, en el fondo, es un reflejo de la fe que siempre tuviste en mí.
        </p>
        <p>
          Aunque estemos lejos, al otro lado del mundo, te pienso siempre.
        </p>
        <p>Con todo mi amor,</p>
        <p>Tu hijo.</p>
      </div>
      <footer className="carta-footer">
        <Link to="/" className="back-link">
          &larr; Volver al Dashboard
        </Link>
      </footer>
    </div>
  );
};

export default CartaParaMama;