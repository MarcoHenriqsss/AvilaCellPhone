import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Instagram, Smartphone, Headphones, Battery, Monitor, Settings, Wrench, Shield, Zap, Cpu, Wifi, HardDrive } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Smartphone className="h-10 w-10 text-cyan-400" />
                <div className="absolute inset-0 h-10 w-10 bg-cyan-400/20 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AVILA CELL PHONE
                </h1>
                <div className="text-xs text-cyan-300/60 font-mono">TECH.SOLUTIONS.2024</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#produtos" className="nav-link">PRODUTOS</a>
              <a href="#servicos" className="nav-link">SERVIÇOS</a>
              <a href="#localizacao" className="nav-link">LOCALIZAÇÃO</a>
              <a href="#contato" className="nav-link">CONTATO</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://i.imgur.com/TR21CAM.jpeg")',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/12 opacity-40">
            <Cpu className="h-6 w-6 text-cyan-400" />
          </div>
          <div className="absolute top-3/5 right-1/6 opacity-40">
            <Wifi className="h-8 w-8 text-purple-400" />
          </div>
          <div className="absolute top-2/5 right-1/5 opacity-40">
            <HardDrive className="h-5 w-5 text-cyan-400" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-cyan-400 font-mono text-sm mb-2">INITIALIZING_SYSTEM...</div>
            <h2 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AVILA
              </span>
              <br />
              <span className="text-white">CELL PHONE</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            <span className="text-cyan-400 font-mono">[</span>
            TECNOLOGIA AVANÇADA • ASSISTÊNCIA ESPECIALIZADA
            <span className="text-cyan-400 font-mono">]</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#produtos" 
              className="cyber-button cyber-button-primary group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>EXPLORAR PRODUTOS</span>
              </span>
            </a>
            <a 
              href="https://wa.me/556293556719" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button cyber-button-secondary group"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>WHATSAPP</span>
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm mb-2">PRODUTOS_DISPONÍVEIS</div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ARSENAL TECNOLÓGICO
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Equipamentos de última geração para suas necessidades digitais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produto 1 - Celulares */}
            <div className="tech-card group">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon-container">
                    <Smartphone className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-xs font-mono text-cyan-400/60">MOBILE.TECH</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">SMARTPHONES</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Dispositivos móveis de última geração com tecnologia avançada e performance superior
                </p>
                <div className="tech-image-placeholder group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img
      src="https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=1340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="MOBILE"
      className="max-h-full max-w-full rounded-lg"
                        />
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 2 - Fones de Ouvido */}
            <div className="tech-card group">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon-container">
                    <Headphones className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-xs font-mono text-purple-400/60">AUDIO.SYS</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">FONES DE OUVIDO</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Sistemas de áudio premium com qualidade sonora cristalina e tecnologia noise-cancelling
                </p>
                <div className="tech-image-placeholder group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img
      src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="AUDIO.SYS"
      className="max-h-full max-w-full rounded-lg"
                        />
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 3 - Carregadores */}
            <div className="tech-card group">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon-container">
                    <Battery className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="text-xs font-mono text-green-400/60">POWER.CORE</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">CARREGADORES</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Soluções de energia avançadas com carregamento rápido e eficiência máxima
                </p>
                <div className="tech-image-placeholder group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img
      src="https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Carregador Power Units"
      className="max-h-full max-w-full rounded-lg"
                        />
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 4 - Acessórios */}
            <div className="tech-card group">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon-container">
                    <Shield className="h-8 w-8 text-orange-400" />
                  </div>
                  <div className="text-xs font-mono text-orange-400/60">PROTECT.SYS</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">PROTEÇÃO</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Sistemas de proteção avançados para máxima segurança dos seus dispositivos
                </p>
                <div className="tech-image-placeholder group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img
      src="https://images.unsplash.com/photo-1692780256774-198bc0a3bbf0?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="PROTECT"
      className="max-h-full max-w-full rounded-lg"
                        />
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 5 - Tablets */}
            <div className="tech-card group">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon-container">
                    <Monitor className="h-8 w-8 text-indigo-400" />
                  </div>
                  <div className="text-xs font-mono text-indigo-400/60">DISPLAY.PRO</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">DIVERSIDADES</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Garrafas e copos temáticos
                </p>
                <div className="tech-image-placeholder group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img
      src="https://images.unsplash.com/photo-1609104348690-733b7cb6d33b?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Cups"
      className="max-h-full max-w-full rounded-lg"
                        />
                  </div>
                </div>
              </div>
            </div>

            {/* Produto 6 - Outros Eletrônicos */}
            <div className="tech-card group">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-icon-container">
                    <Settings className="h-8 w-8 text-red-400" />
                  </div>
                  <div className="text-xs font-mono text-red-400/60">MISC.TECH</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">TECH GEAR</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Equipamentos tecnológicos diversos para todas as suas necessidades digitais
                </p>
                <div className="tech-image-placeholder group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <img
      src="https://images.unsplash.com/photo-1580807915738-b08f92978715?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="MISC"
      className="max-h-full max-w-full rounded-lg"
                        />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-purple-400 font-mono text-sm mb-2">SERVIÇOS_ESPECIALIZADOS</div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              LABORATÓRIO TÉCNICO
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Diagnósticos avançados e reparos de precisão com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="service-card group">
              <div className="service-card-glow"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon-container mr-4">
                    <Monitor className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">REPARO DE DISPLAY</h3>
                    <div className="text-xs font-mono text-cyan-400/60">SCREEN.REPLACEMENT</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Substituição de displays com tecnologia touch avançada e calibração de precisão
                </p>
              </div>
            </div>

            <div className="service-card group">
              <div className="service-card-glow"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon-container mr-4">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">DESOXIDAÇÃO</h3>
                    <div className="text-xs font-mono text-green-400/60">LIQUID.DAMAGE.REPAIR</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Processo de descontaminação molecular para recuperação de dispositivos danificados
                </p>
              </div>
            </div>

            <div className="service-card group">
              <div className="service-card-glow"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon-container mr-4">
                    <Settings className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">REPARO DE SOFTWARE</h3>
                    <div className="text-xs font-mono text-purple-400/60">SYSTEM.RECOVERY</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reprogramação de firmware e correção de bugs do sistema operacional
                </p>
              </div>
            </div>

            <div className="service-card group">
              <div className="service-card-glow"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon-container mr-4">
                    <Battery className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">TROCA DE BATERIA</h3>
                    <div className="text-xs font-mono text-orange-400/60">POWER CELL</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Substituição de células de energia com otimização de performance
                </p>
              </div>
            </div>

            <div className="service-card group">
              <div className="service-card-glow"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon-container mr-4">
                    <Wrench className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">REPARO DE COMPONENTES</h3>
                    <div className="text-xs font-mono text-red-400/60">HARDWARE FIX</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reparo de componentes eletrônicos com soldagem de precisão microscópica
                </p>
              </div>
            </div>

            <div className="service-card group">
              <div className="service-card-glow"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <div className="service-icon-container mr-4">
                    <Shield className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">PELICULAS E PROTEÇÃO</h3>
                    <div className="text-xs font-mono text-indigo-400/60">ACCESSORY.SETUP</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Instalação profissional de sistemas de proteção e acessórios avançados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section id="localizacao" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-mono text-sm mb-2">COORDENADAS_GPS</div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CENTRAL DE COMANDO
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Localize nossa base de operações tecnológicas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="tech-card">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="tech-icon-container mr-3">
                    <MapPin className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white">AVILA CELL PHONE HQ</h3>
                    <div className="text-sm font-mono text-red-400/60">MAINTENANCE.CENTER</div>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden border border-cyan-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 z-10 pointer-events-none"></div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7352.200787052549!2d-48.93885512030646!3d-16.280519399464573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea7a8c619709d%3A0xef7b02569a703fa1!2sManunten%C3%A7%C3%A3o%20de%20Celulares%20e%20Acess%C3%B3rios%20%2F%20%C3%81VILA%20CELL%20PHONE!5e0!3m2!1spt-BR!2sbr!4v1751666267683!5m2!1spt-BR!2sbr"
                    width="100%" 
                    height="400" 
                    style={{border: 0, filter: 'hue-rotate(200deg) saturate(1.5)'}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full relative z-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-green-400 font-mono text-sm mb-2">ESTABELECER_CONEXÃO</div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              INTERFACE DE CONTATO
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Conecte-se conosco através dos canais de comunicação disponíveis
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://wa.me/556293556719" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card group"
              >
                <div className="contact-card-glow"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="contact-icon-container mb-6">
                    <Phone className="h-8 w-8 text-green-400" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">WHATSAPP</h3>
                  <div className="text-xs font-mono text-green-400/60 mb-4">INSTANT.MESSAGING</div>
                  <p className="text-gray-400 mb-4 text-sm">
                    Comunicação instantânea e suporte em tempo real
                  </p>
                  <div className="text-green-400 font-mono text-sm">
                    (62) 9 3556-9719
                  </div>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/acp.avilacellphone/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card group"
              >
                <div className="contact-card-glow"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="contact-icon-container mb-6">
                    <Instagram className="h-8 w-8 text-pink-400" />
                    <div className="absolute inset-0 bg-pink-400/20 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">INSTAGRAM</h3>
                  <div className="text-xs font-mono text-pink-400/60 mb-4">SOCIAL.NETWORK</div>
                  <p className="text-gray-400 mb-4 text-sm">
                    Atualizações e conteúdo exclusivo da nossa plataforma
                  </p>
                  <div className="text-pink-400 font-mono text-sm">
                    @acp.avilacellphone
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* História da Fundadora */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-purple-400 font-mono text-sm mb-2">ARQUIVO_PESSOAL</div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PERFIL DA FUNDADORA
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A mente por trás da revolução tecnológica
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="tech-card">
              <div className="tech-card-glow"></div>
              <div className="relative z-10 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="relative h-64 md:h-full">
                      <img 
                        src="https://i.imgur.com/5ITpRrs.png" 
                        alt="Fundadora da Avila Cell Phone"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>
                      <div className="absolute top-4 left-4">
                        <div className="text-xs font-mono text-cyan-400 bg-black/50 px-2 py-1 rounded">
                          FOUNDER.PROFILE
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        LÍDER TECNOLÓGICA
                      </h3>
                      <div className="text-sm font-mono text-purple-400/60">CEO & FOUNDER</div>
                    </div>
                    <div className="space-y-4 text-gray-400 leading-relaxed">
                      <p>
                        <span className="text-cyan-400 font-mono">[INIT]</span> Com visão futurista e paixão pela inovação tecnológica, 
                        nossa fundadora estabeleceu a Avila Cell Phone como um centro de excelência em soluções digitais avançadas.
                      </p>
                      <p>
                        <span className="text-purple-400 font-mono">[MISSION]</span> Desde o início, a missão foi clara: democratizar o acesso 
                        à tecnologia de ponta através de produtos premium e serviços especializados de alta precisão.
                      </p>
                      <p>
                        <span className="text-green-400 font-mono">[STATUS]</span> Hoje, a Avila Cell Phone é reconhecida como referência 
                        em inovação tecnológica, combinando expertise técnica avançada com atendimento personalizado de elite.
                      </p>
                      <div className="pt-4 border-t border-gray-700">
                        <div className="text-xs font-mono text-cyan-400/60">
                          SYSTEM.STATUS: OPERATIONAL • INNOVATION.LEVEL: MAXIMUM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-cyan-500/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Smartphone className="h-6 w-6 text-cyan-400" />
                  <div className="absolute inset-0 h-6 w-6 bg-cyan-400/20 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AVILA CELL PHONE
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/60">TECH.SOLUTIONS</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Tecnologia avançada e assistência especializada para o futuro digital
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">CONEXÕES</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/556293556719" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors group"
                >
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="font-mono text-sm">(62) 9 3556-9719</span>
                </a>
                <a 
                  href="https://www.instagram.com/acp.avilacellphone/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-pink-400 transition-colors group"
                >
                  <Instagram className="h-4 w-4 mr-3" />
                  <span className="font-mono text-sm">@acp.avilacellphone</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">NAVEGAÇÃO</h4>
              <div className="space-y-2">
                <a href="#produtos" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono">PRODUTOS</a>
                <a href="#servicos" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm font-mono">SERVIÇOS</a>
                <a href="#localizacao" className="block text-gray-400 hover:text-green-400 transition-colors text-sm font-mono">LOCALIZAÇÃO</a>
                <a href="#contato" className="block text-gray-400 hover:text-pink-400 transition-colors text-sm font-mono">CONTATO</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm font-mono">
                &copy; 2025 AVILA CELL PHONE • ALL RIGHTS RESERVED MHENRIQUES DEVELOPER
              </p>
              <div className="text-xs font-mono text-cyan-400/60 mt-2 md:mt-0">
                SYSTEM.VERSION: 2025.1.0 • STATUS: ONLINE
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;