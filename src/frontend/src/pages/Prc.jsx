import "../App.css";
import dentalMoldImage from "../../image/dental mold.png";
import logo from '../assets/logo.png';
import Hand from "../../image/hand.jpg";
import trasprente from "../../image/trasfarente.png";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Prc() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header></Header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>DENTAL ALFADEN</h1>
          <p>Técnicas innovadoras de diseño
            <a>digital combinadas con el arte</a> 
            <a>manual de nuestros acabados</a> 
            </p>
          <button className="btn">CONSULTANOS</button>
        </div>
        <div className="hero-background-image">
          {/* Background image of the dental mold */}
          <img src={dentalMoldImage} alt="Dental mold" /> {/* Replace with your image path */}
        </div>
      </section>

      {/* Shape of Nature Section */}
      <section className="shape-of-nature">
        <div className="container">
          <div className="shape-of-nature-text">
            <h2>Shape of <br /> nature</h2>
            <p>En la nueva era del laboratorio dental basamos nuestras creaciones en darle vida, imitando la naturaleza del ser humano e Integrando en la cavidad bucal un material inerte. De este modo destacamos la creatividad protésica, la personalidad y el diseño de cada detalle de nuestros trabajos.</p>
          </div>
          <div className="shape-of-nature-image">
            <img src={Hand} alt="Hand working" /> {/* Replace with your image path */}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="differentiators">
        <div className="container">
          <h2>¿Qué nos diferencia?</h2>
          <h3>Elige Dental Designer</h3>
          <div className="differentiators-grid">
            <div className="differentiator-item">
              <img src="path/to/your/icon-vanguardia.png" alt="Laboratorio de vanguardia icon" /> {/* Replace with your icon path */}
              <p>Laboratorio de vanguardia</p>
            </div>
            <div className="differentiator-item">
              <img src="path/to/your/icon-experiencia.png" alt="Experiencia icon" /> {/* Replace with your icon path */}
              <p>Experiencia de más de 15 años</p>
            </div>
            <div className="differentiator-item dental-root-image">
              <img src={trasprente} alt="Dental root" /> {/* Replace with your image path */}
            </div>
            <div className="differentiator-item">
              <img src="path/to/your/icon-adaptada.png" alt="Estética adaptada icon" /> {/* Replace with your icon path */}
              <p>Estética adaptada a cada paciente</p>
            </div>
            <div className="differentiator-item">
              <img src="path/to/your/icon-espana.png" alt="España icon" /> {/* Replace with your icon path */}
              <p>Trabajamos para toda España</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digitize your clinic Section */}
      <section className="digitize-clinic">
        <div className="container">
          <div className="digitize-clinic-content">
            <h2>¿Quieres digitalizar tu clínica?</h2>
            <p>Somos especialistas en <strong>flujo digital</strong>.<br /> Más de 15 años de experiencia nos avalan.</p>
            <div className="digitize-clinic-buttons">
              <button className="btn">CONTACTA</button>
              <span>942633807</span>
            </div>
          </div>
          <div className="digitize-clinic-image">
            <img src="path/to/your/working-on-model.jpg" alt="Working on dental model" /> {/* Replace with your image path */}
          </div>
        </div>
      </section>

      {/* Dental Alfaden Description Section */}
      <section className="dental-alfaden-description">
        <div className="container description-container">
          <div className="description-text">
            <h2>Dental Alfaden</h2>
            <p>Somos un laboratorio dental dedicado al flujo digital, en el cual fusionamos las innovadoras técnicas de diseño digital con el arte manual de nuestros acabados generando piezas únicas y personalizadas.</p>
            <p>En nuestro laboratorio creamos las piezas en base a un meticuloso análisis previo, que es esencial para diseñar una pieza estéticamente adaptada a cada paciente. Trabajamos con la última tecnología protésica como impresora 3D para imprimir modelos digitales, el CAD para poder diseñar las piezas dentales necesarias y el CAM donde serán fabricadas dichas piezas. Después procederemos a la terminación de la prótesis dando un resultado más realista, generando pequeños detalles que la hacen única y especial.</p>
          </div>
          <div className="description-image">
            <img src="path/to/your/neon-tooth.png" alt="Neon tooth icon" /> {/* Replace with your image path */}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="works" id="works">
        <div className="container works-container">
          <h2>Works</h2>
          <p>Somos profesionales en darle vida y naturalidad a materiales inertes.</p>
          <div className="works-grid">
            <div className="works-label">DENTAL</div>
            <div className="works-item"><img src="path/to/your/works-1.jpg" alt="Work image 1" /></div>
            <div className="works-item"><img src="path/to/your/works-2.jpg" alt="Work image 2" /></div>
            <div className="works-item"><img src="path/to/your/works-3.jpg" alt="Work image 3" /></div>
            <div className="works-item"><img src="path/to/your/works-4.jpg" alt="Work image 4" /></div>
            <div className="works-item"><img src="path/to/your/works-5.jpg" alt="Work image 5" /></div>
            <div className="works-item"><img src="path/to/your/works-6.jpg" alt="Work image 6" /></div>
          </div>
        </div>
      </section>

      {/* Dental Laboratory Banner */}
      <section className="dental-lab-banner">
        <div className="container">
          <img src={logo}  className="h-10 object-contain"/> {/* Replace with your image path */}
          <h2>LABORATORIO DENTAL</h2>
          <img src={logo} className="h-10 object-contain" /> {/* Replace with your image path */}
        </div>
      </section>

      {/* Contact Section */}
      <Contact></Contact>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
}

export default Prc;