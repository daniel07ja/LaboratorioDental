import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Works = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    
    // Resetear formulario
    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header />

      {/* TÍTULO */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-800">TRABAJOS </span>
            <span className="text-cyan-400">REALIZADOS</span>
          </h2>
        </div>
      </section>

      {/* GRID DE TRABAJOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606813903291-5b8fdeb8e3a0"
                  alt="Modelo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">
                  MODELADO DE MODELOS
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trabajo realizado con impresoras 3D para modelos dentales de alta
                  precisión.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1c136528ce1f"
                  alt="Modelado"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">
                  MODELADO DE IMPRESIÓN 3D
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Impresiones eficientes con calidad superior para trabajos
                  odontológicos.
                </p>
              </div>
            </div>

            {/* PLACEHOLDERS */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg h-96 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                <p className="text-gray-500 font-medium">Próximamente</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg h-96 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                <p className="text-gray-500 font-medium">Próximamente</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg h-96 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                <p className="text-gray-500 font-medium">Próximamente</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg h-96 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                <p className="text-gray-500 font-medium">Próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INFORMACIÓN Y FORMULARIO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* INFORMACIÓN */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                ¿Necesitas más información?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Contáctanos para informarte sobre nuestros trabajos,
                envía el formulario o escribe al siguiente correo:
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-gray-700 font-medium">963252987</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <a 
                    href="mailto:acmedina@gmail.com"
                    className="text-gray-700 font-medium hover:text-cyan-400 transition-colors"
                  >
                    acmedina@gmail.com
                  </a>
                </div>
              </div>

              <p className="text-gray-700 italic pt-4">
                Descubramos lo acorde a nuestros clientes
              </p>
            </div>

            {/* FORMULARIO */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                ¡Consúltanos!
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="Correo*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Mensaje*"
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-400 text-white font-semibold py-3 px-6 rounded-md hover:bg-cyan-500 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Works;