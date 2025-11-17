import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      alert('Debes aceptar la política de privacidad');
      return;
    }

    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    
    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      privacy: false
    });
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              ¿Necesitas más información?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Contáctanos a través de nuestro teléfono, email o completando nuestro el siguiente formulario de contacto.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700 font-medium">942633807</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700 font-medium">admind@gmail.com</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-300">
              <p className="text-lg font-semibold text-gray-800 italic">
                Devolvemos la sonrisa a nuestros clientes
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              ¡Consúltanos!
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu teléfono *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none transition-all"
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-600 underline">
                    Política de privacidad
                  </a>
                </label>
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
  );
};

export default Contact;