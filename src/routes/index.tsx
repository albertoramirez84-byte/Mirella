import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: MirellaCare,
})

const WA_LINK = 'https://wa.me/50376172319?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Mirella%20Care'

function MirellaCare() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F6F8', color: '#1F2937' }}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StorySection />
        <HowItWorksSection />
        <NursesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

/* ─── HEADER ─────────────────────────────────────────────────────────────── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Enfermeras', href: '#enfermeras' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass shadow-sm"
      style={{ borderBottom: '1px solid rgba(44,182,125,0.15)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
            <img src="/logo.jpeg" alt="Mirella Care" className="w-8 h-8 rounded-lg object-cover" />
            Mirella Care
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#1F4E79' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#1F4E79' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: 'rgba(44,182,125,0.2)' }}>
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/50 transition-colors"
                  style={{ color: '#1F4E79' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-3 flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
              >
                Solicitar por WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #2CB67D, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #00A6FB, transparent)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(44,182,125,0.1)', color: '#2CB67D', border: '1px solid rgba(44,182,125,0.3)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#2CB67D' }} />
              El Salvador · Cuidado en el hogar
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
              Tu familia merece el{' '}
              <span className="relative inline-block">
                <span style={{ background: 'linear-gradient(135deg, #2CB67D, #00A6FB)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  mejor cuidado
                </span>
              </span>
              {' '}en casa
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif' }}>
              Conectamos familias salvadoreñas con enfermeras verificadas y con experiencia para brindar atención médica personalizada en la comodidad del hogar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)', boxShadow: '0 4px 20px rgba(44,182,125,0.35)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Solicitar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'white', color: '#1F4E79', border: '2px solid #1F4E79' }}
              >
                Solicitar información
              </a>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '✅', title: 'Perfiles verificados', desc: 'Enfermeras con credenciales comprobadas' },
                { icon: '⚡', title: 'Atención ágil', desc: 'Respuesta rápida y coordinación eficiente' },
                { icon: '🤝', title: 'Experiencia confiable', desc: 'Historial de servicio y referencias reales' },
              ].map(card => (
                <div key={card.title} className="glass rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="font-semibold text-xs mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>{card.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Service Highlights Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="glass rounded-3xl p-8 shadow-2xl" style={{ background: 'rgba(255,255,255,0.85)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-black" style={{ background: 'linear-gradient(135deg, #2CB67D, #00A6FB)' }}>♥</div>
                  <div>
                    <div className="font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>Mirella Care</div>
                    <div className="text-xs" style={{ color: '#6B7280' }}>Cuidado humano y profesional</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Consulta inicial gratuita', detail: 'Evaluamos tus necesidades sin costo' },
                    { label: 'Enfermeras certificadas', detail: 'Con validación de credenciales' },
                    { label: 'Disponibilidad flexible', detail: 'Horarios adaptados a tu familia' },
                    { label: 'Seguimiento continuo', detail: 'Monitoreo y comunicación constante' },
                    { label: 'Cobertura en El Salvador', detail: 'Servicio a nivel nacional' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(44,182,125,0.15)' }}>
                        <svg className="w-3 h-3" style={{ color: '#2CB67D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: '#1F2937' }}>{item.label}</div>
                        <div className="text-xs" style={{ color: '#9CA3AF' }}>{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
                >
                  Comenzar ahora
                </a>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 shadow-lg text-center">
                <div className="text-lg font-black" style={{ color: '#2CB67D' }}>100%</div>
                <div className="text-xs font-medium" style={{ color: '#1F4E79' }}>Verificadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES ────────────────────────────────────────────────────────────── */
function ServicesSection() {
  const services = [
    {
      icon: '👴',
      title: 'Cuidado del adulto mayor',
      description: 'Acompañamiento, asistencia diaria y monitoreo de salud para adultos mayores en la comodidad del hogar, con enfoque en dignidad y bienestar.',
    },
    {
      icon: '🏥',
      title: 'Cuidado post-quirúrgico',
      description: 'Seguimiento profesional tras procedimientos médicos: cuidado de heridas, administración de medicamentos y recuperación supervisada.',
    },
    {
      icon: '🩺',
      title: 'Enfermería básica a domicilio',
      description: 'Toma de signos vitales, curación de heridas, aplicación de inyecciones y otros procedimientos de enfermería en tu hogar.',
    },
    {
      icon: '🔗',
      title: 'Enlace con enfermera especializada',
      description: 'Conectamos casos complejos con enfermeras especializadas según la necesidad clínica específica del paciente.',
    },
  ]

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(44,182,125,0.1)', color: '#2CB67D', border: '1px solid rgba(44,182,125,0.3)' }}>
            Nuestros Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
            Atención profesional para cada necesidad
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Ofrecemos una gama completa de servicios de enfermería diseñados para brindar comodidad, confianza y calidad médica en tu hogar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
              style={{ border: '1px solid rgba(255,255,255,0.6)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(44,182,125,0.12), rgba(0,166,251,0.12))' }}
              >
                {service.icon}
              </div>
              <h3 className="font-bold text-base mb-3 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                {service.description}
              </p>
              <div className="mt-4 h-0.5 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-0" style={{ background: 'linear-gradient(90deg, #2CB67D, #00A6FB)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── STORY / ABOUT ───────────────────────────────────────────────────────── */
function StorySection() {
  const values = [
    { icon: '🛡️', title: 'Confianza', description: 'Cada enfermera pasa por un proceso riguroso de verificación de credenciales y referencias.' },
    { icon: '❤️', title: 'Humanidad', description: 'Cuidamos no solo el cuerpo, sino también el alma. El trato humano está en el centro de todo.' },
    { icon: '⚡', title: 'Agilidad', description: 'Entendemos que la salud no espera. Actuamos con rapidez para conectar a las familias con la ayuda que necesitan.' },
    { icon: '🚀', title: 'Escalabilidad', description: 'Construimos una red creciente de profesionales para atender cada vez más familias en todo El Salvador.' },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, rgba(31,78,121,0.04), rgba(44,182,125,0.04))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(31,78,121,0.1)', color: '#1F4E79', border: '1px solid rgba(31,78,121,0.2)' }}>
              Nuestra Historia
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
              Nació de la vocación de una enfermera
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#4B5563' }}>
              <p>
                Mirella es una enfermera salvadoreña con más de 15 años de experiencia. Dedicó su vida a cuidar a los demás, pero siempre sintió que había un vacío: las familias que más necesitaban atención profesional no sabían cómo acceder a ella de forma confiable y digna.
              </p>
              <p>
                Fue así como nació <strong style={{ color: '#1F4E79' }}>Mirella Care</strong> — una plataforma con corazón humano que conecta familias salvadoreñas con enfermeras verificadas, poniendo la confianza y el cuidado genuino en el centro de cada servicio.
              </p>
              <p>
                Hoy, Mirella Care es más que un servicio: es una promesa de que tus seres queridos estarán bien atendidos, en el lugar que más importa — su hogar.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(value => (
              <div key={value.title} className="glass rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ────────────────────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Describe tu necesidad',
      description: 'Cuéntanos qué tipo de cuidado requiere tu familiar — edad, condición, horarios y preferencias.',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Te conectamos con la enfermera ideal',
      description: 'Analizamos tu perfil y te presentamos las opciones más adecuadas de nuestra red de profesionales verificadas.',
      icon: '🔍',
    },
    {
      number: '03',
      title: 'Coordinamos el servicio',
      description: 'Agendamos el inicio del servicio, hacemos seguimiento continuo y garantizamos tu satisfacción.',
      icon: '✅',
    },
  ]

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #0D2B45 50%, #1a3d6e 100%)' }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #2CB67D, transparent)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #00A6FB, transparent)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(44,182,125,0.2)', color: '#2CB67D', border: '1px solid rgba(44,182,125,0.3)' }}>
            Cómo Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Tres pasos hacia el cuidado ideal
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Nuestro proceso es simple, rápido y diseñado para que puedas enfocarte en lo que realmente importa.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-full w-full h-px z-0 opacity-30" style={{ background: 'linear-gradient(90deg, #2CB67D, transparent)' }} />
              )}
              <div className="glass-dark rounded-2xl p-8 text-center relative z-10 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-4xl font-black mb-3 opacity-30" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2CB67D' }}>{step.number}</div>
                <h3 className="font-bold text-lg mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)', boxShadow: '0 4px 20px rgba(44,182,125,0.4)' }}
          >
            Comenzar ahora por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── NURSES REGISTRATION ─────────────────────────────────────────────────── */
function NursesSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', especialidad: '', disponibilidad: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const benefits = [
    { icon: '🕐', text: 'Flexibilidad de horarios — trabaja cuando puedas' },
    { icon: '📣', text: 'Visibilidad — llega a más familias que te necesitan' },
    { icon: '💼', text: 'Oportunidades — amplía tu experiencia y cartera de clientes' },
    { icon: '🤝', text: 'Red de apoyo — comunidad de profesionales de salud' },
  ]

  return (
    <section id="enfermeras" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, rgba(44,182,125,0.04), rgba(0,166,251,0.04))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(44,182,125,0.1)', color: '#2CB67D', border: '1px solid rgba(44,182,125,0.3)' }}>
              Para Enfermeras
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
              Únete a Mirella Care
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#4B5563' }}>
              Si eres enfermera o profesional de la salud y quieres ampliar tu impacto, Mirella Care es tu plataforma. Conéctate con familias que necesitan exactamente lo que tú ofreces.
            </p>
            <div className="space-y-4">
              {benefits.map(b => (
                <div key={b.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(44,182,125,0.1)' }}>
                    {b.icon}
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#374151' }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-3xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl" style={{ background: 'rgba(44,182,125,0.15)' }}>✅</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>¡Registro recibido!</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>Revisaremos tu información y nos pondremos en contacto contigo muy pronto. ¡Gracias por querer ser parte de Mirella Care!</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nombre: '', telefono: '', email: '', especialidad: '', disponibilidad: '' }) }}
                  className="mt-6 text-sm font-medium underline"
                  style={{ color: '#2CB67D' }}
                >
                  Registrar otra enfermera
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>Quiero registrarme</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { field: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                    { field: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+503 0000-0000' },
                    { field: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@correo.com' },
                    { field: 'especialidad', label: 'Especialidad o área de enfermería', type: 'text', placeholder: 'Ej: Cuidado del adulto mayor' },
                    { field: 'disponibilidad', label: 'Disponibilidad horaria', type: 'text', placeholder: 'Ej: Lunes a viernes, mañanas' },
                  ].map(input => (
                    <div key={input.field}>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>{input.label}</label>
                      <input
                        type={input.type}
                        required
                        placeholder={input.placeholder}
                        value={form[input.field as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [input.field]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2"
                        style={{ borderColor: '#E5E7EB', background: 'rgba(255,255,255,0.8)', color: '#1F2937', focusRingColor: '#2CB67D' } as React.CSSProperties}
                        onFocus={e => { e.target.style.borderColor = '#2CB67D'; e.target.style.boxShadow = '0 0 0 3px rgba(44,182,125,0.15)' }}
                        onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg mt-2"
                    style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
                  >
                    Quiero registrarme
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─────────────────────────────────────────────────────────────── */
function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', servicio: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(31,78,121,0.1)', color: '#1F4E79', border: '1px solid rgba(31,78,121,0.2)' }}>
            Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
            Estamos listos para ayudarte
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6B7280' }}>
            Cuéntanos qué necesitas y te conectamos con la enfermera perfecta para tu familia.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl" style={{ background: 'rgba(44,182,125,0.15)' }}>🎉</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>¡Mensaje recibido!</h3>
                <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Gracias por contactarnos. Nos comunicaremos contigo a la brevedad para coordinar el servicio.</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
                >
                  También puedes escribirnos por WhatsApp
                </a>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { field: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
                    { field: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+503 0000-0000' },
                    { field: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@correo.com' },
                    { field: 'servicio', label: 'Servicio que necesita', type: 'text', placeholder: 'Ej: Cuidado de adulto mayor, post-quirúrgico...' },
                  ].map(input => (
                    <div key={input.field}>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>{input.label}</label>
                      <input
                        type={input.type}
                        required
                        placeholder={input.placeholder}
                        value={form[input.field as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [input.field]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none"
                        style={{ borderColor: '#E5E7EB', background: 'rgba(255,255,255,0.8)', color: '#1F2937' }}
                        onFocus={e => { e.target.style.borderColor = '#2CB67D'; e.target.style.boxShadow = '0 0 0 3px rgba(44,182,125,0.15)' }}
                        onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1F4E79, #0D2B45)' }}
                    >
                      Enviar solicitud
                    </button>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg text-sm"
                      style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: '#0D2B45', color: 'rgba(255,255,255,0.7)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black" style={{ background: 'linear-gradient(135deg, #2CB67D, #00A6FB)' }}>M</span>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Mirella Care</span>
            </div>
            <p className="text-sm leading-relaxed">Conectamos familias con enfermeras verificadas para cuidado en el hogar en El Salvador.</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Navegación</h4>
            <nav className="space-y-2 text-sm">
              {[
                { label: 'Servicios', href: '#servicios' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Enfermeras', href: '#enfermeras' },
                { label: 'Contacto', href: '#contacto' },
              ].map(link => (
                <a key={link.href} href={link.href} className="block hover:text-white transition-colors">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contáctanos</h4>
            <p className="text-sm mb-4">¿Listo para comenzar? Escríbenos por WhatsApp y coordinamos el servicio.</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p>© 2024 Mirella Care. Todos los derechos reservados.</p>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>Hecho con ❤️ para las familias salvadoreñas</p>
        </div>
      </div>
    </footer>
  )
}
