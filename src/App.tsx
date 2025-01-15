import React from 'react';
import { 
  Calendar, 
  Award,
  MessageSquare,
  DollarSign,
  PhoneCall,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Camera,
  Shield,
  Star,
  MapPin,
  Home,
  Cat,
  Bone,
  Users
} from 'lucide-react';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full px-4 top-4 z-50">
        <div className="container mx-auto">
          <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full py-4 px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Logo className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Petnessa</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center gap-2">
                <Bone className="w-4 h-4" />
                Serviços
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center gap-2">
                <Award className="w-4 h-4" />
                Benefícios
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Feedback
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Preços
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 font-medium transition-colors flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Contacto
              </a>
            </nav>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-700 transition-colors hidden md:flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Marcar Visita
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Cuidamos do seu pet como se fosse nosso
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Serviço profissional de pet sitting com todo amor e dedicação que seu amigo merece
              </p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agende uma visita gratuita
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80" 
                alt="Cachorro feliz sendo cuidado"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Day Care",
                description: "Cuidados durante o dia todo com atividades e muito carinho"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Hospedagem",
                description: "Estadia completa com supervisão 24 horas por dia"
              },
              {
                icon: <Cat className="w-8 h-8" />,
                title: "Passeios",
                description: "Caminhadas monitoradas em horários flexíveis"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que nos escolher</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Experiência",
                description: "Profissionais experientes com diferentes tipos de pets"
              },
              {
                icon: <Camera className="w-6 h-6" />,
                title: "Monitoramento",
                description: "Acompanhamento com fotos e vídeos diários"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Ambiente Seguro",
                description: "Espaço preparado e adaptado para pets"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Certificação",
                description: "Equipe certificada e em constante atualização"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem sobre nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=200&q=80",
                name: "Max",
                owner: "Ana Silva",
                text: "Melhor serviço de pet sitting que já utilizei. Meu Max volta sempre feliz!"
              },
              {
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80",
                name: "Luna",
                owner: "Pedro Santos",
                text: "Profissionais muito atenciosos e dedicados. Recomendo!"
              },
              {
                image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=200&q=80",
                name: "Thor",
                owner: "Maria Oliveira",
                text: "Ambiente seguro e acolhedor. Meu pet adora passar o dia lá!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 text-center mb-4">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">Tutor: {testimonial.owner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em contacto</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nome</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent" rows={4}></textarea>
              </div>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-8 h-8" />
                <span className="text-xl font-semibold">Petnessa</span>
              </div>
              <p className="text-gray-400">
                Cuidando do seu melhor amigo com amor e dedicação
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Localização</h3>
              <p className="text-gray-400">
                Rua dos Pets, 123<br />
                Bairro Jardim<br />
                São Paulo - SP
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}