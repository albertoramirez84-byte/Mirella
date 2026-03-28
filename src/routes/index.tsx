import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: MirellaCare,
})

/* ─── CONFIGURACIÓN DE ENLACES ───────────────────────────────────────────── */
const WA_LINK = 'https://wa.me/50376172319?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Mirella%20Care'
const FORM_SERVICIOS = 'https://forms.gle/w9t6Ryuqc388Jdkx8'
const FORM_ENFERMERAS = 'https://forms.gle/XtovUvamNHSHh9qS7'

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
          <a href="#" className="flex items-center gap-2 text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
            <img src="/logo.jpeg" alt="Mirella Care" className="w-8 h-8 rounded-lg object-cover" />
            Mirella Care
          </a>

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

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
            >
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
                WhatsApp
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #2CB67D, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #00A6FB, transparent)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              Conectamos familias salvadoreñas con profesionales de salud verificados para brindar atención médica personalizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)', boxShadow: '0 4px 20px rgba(44,182,125,0.35)' }}
              >
                WhatsApp Directo
              </a>
              <a
                href={FORM_SERVICIOS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'white', color: '#1F4E79', border: '2px solid #1F4E79' }}
              >
                Llenar solicitud
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '✅', title: 'Perfiles verificados', desc: 'Credenciales comprobadas' },
                { icon: '⚡', title: 'Atención ágil', desc: 'Respuesta y coordinación rápida' },
                { icon: '🤝', title: 'Experiencia', desc: 'Historial de servicio confiable' },
              ].map(card => (
                <div key={card.title} className="glass rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="font-semibold text-xs mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>{card.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>

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
                    { label: 'Consulta inicial gratuita', detail: 'Evaluamos tus necesidades' },
                    { label: 'Enfermeras certificadas', detail: 'Validación de credenciales' },
                    { label: 'Disponibilidad flexible', detail: 'Horarios adaptados' },
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
                  href={FORM_SERVICIOS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
                >
                  Solicitar Ahora
                </a>
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
    { icon: '👴', title: 'Cuidado del adulto mayor', description: 'Acompañamiento, asistencia diaria y monitoreo de salud con enfoque en dignidad.' },
    { icon: '🏥', title: 'Cuidado post-quirúrgico', description: 'Cuidado de heridas, administración de medicamentos y recuperación supervisada.' },
    { icon: '🩺', title: 'Enfermería a domicilio', description: 'Toma de signos vitales, inyecciones y procedimientos de enfermería en tu hogar.' },
    { icon: '🔗', title: 'Enlaces especializados', description: 'Conectamos casos complejos con enfermeras expertas según la necesidad clínica.' },
  ]

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(44,182,125,0.1)', color: '#2CB67D', border: '1px solid rgba(44,182,125,0.3)' }}>
          Nuestros Servicios
        </div>
        <h2 className="text-3xl sm:text-4xl font-black mb-12" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>
          Atención profesional para cada necesidad
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.title} className="glass rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto" style={{ background: 'rgba(44,182,125,0.1)' }}>{service.icon}</div>
              <h3 className="font-bold text-base mb-3" style={{ color: '#1F4E79' }}>{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
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
    { icon: '🛡️', title: 'Confianza', description: 'Proceso riguroso de verificación.' },
    { icon: '❤️', title: 'Humanidad', description: 'El trato digno es nuestro centro.' },
    { icon: '⚡', title: 'Agilidad', description: 'Actuamos con rapidez ante la necesidad.' },
    { icon: '🚀', title: 'Red El Salvador', description: 'Creciendo para llegar a más familias.' },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, rgba(31,78,121,0.04), rgba(44,182,125,0.04))' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(31,78,121,0.1)', color: '#1F4E79' }}>Nuestra Historia</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>Nació de la vocación</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mirella Care nació de la mano de una enfermera con 15 años de experiencia que entendió que las familias salvadoreñas necesitan un puente confiable hacia el cuidado profesional.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hoy conectamos corazones y profesionalismo para que tus seres queridos estén bien en el lugar que más importa: su hogar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {values.map(v => (
            <div key={v.title} className="glass rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-sm text-[#1F4E79] mb-1">{v.title}</h3>
              <p className="text-xs text-gray-500">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ────────────────────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    { number: '01', title: 'Llenar Solicitud', icon: '📝' },
    { number: '02', title: 'Te Conectamos', icon: '🔍' },
    { number: '03', title: 'Cuidado en Casa', icon: '✅' },
  ]

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1F4E79] text-white overflow-hidden relative">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tres pasos hacia el cuidado ideal</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map(s => (
            <div key={s.number} className="bg-white/10 rounded-2xl p-8 backdrop-blur-md">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-2xl font-black text-[#2CB67D] mb-2">{s.number}</div>
              <h3 className="font-bold">{s.title}</h3>
            </div>
          ))}
        </div>
        <a
          href={FORM_SERVICIOS}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block px-8 py-4 rounded-full font-bold bg-[#2CB67D] hover:bg-[#25A36F] transition-all"
        >
          Comenzar Solicitud
        </a>
      </div>
    </section>
  )
}

/* ─── NURSES REGISTRATION ─────────────────────────────────────────────────── */
function NursesSection() {
  const benefits = [
    { icon: '🕐', text: 'Flexibilidad de horarios' },
    { icon: '📣', text: 'Visibilidad con familias reales' },
    { icon: '💼', text: 'Oportunidades profesionales' },
    { icon: '🤝', text: 'Red de apoyo y comunidad' },
  ]

  return (
    <section id="enfermeras" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, rgba(44,182,125,0.04), rgba(0,166,251,0.04))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(44,182,125,0.1)', color: '#2CB67D' }}>Para Profesionales</div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>Únete a Mirella Care</h2>
            <p className="text-lg text-gray-600 mb-8">Si eres profesional de la salud, regístrate para formar parte de nuestra red verificada en El Salvador.</p>
            <div className="space-y-4">
              {benefits.map(b => (
                <div key={b.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#2CB67D]/10 text-lg">{b.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8 shadow-xl text-center border border-white/50">
            <div className="w-16 h-16 bg-[#2CB67D]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">📋</div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>Registro de Profesionales</h3>
            <p className="text-sm text-gray-500 mb-8">Completa tu perfil para que podamos validar tus credenciales y empezar a conectarte con familias.</p>
            <a
              href={FORM_ENFERMERAS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-4 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #2CB67D, #25A36F)' }}
            >
              Llenar Formulario de Registro
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─────────────────────────────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(31,78,121,0.1)', color: '#1F4E79' }}>Contacto</div>
        <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F4E79' }}>Estamos listos para ayudarte</h2>
        <p className="text-gray-500 mb-16">Solicita tu servicio formalmente o escríbenos para una consulta rápida.</p>

        <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
          <a
            href={FORM_SERVICIOS}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-white/50 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
            <h3 className="font-bold text-[#1F4E79] mb-2">Solicitar Servicio</h3>
            <p className="text-xs text-gray-400">Formulario detallado de solicitud</p>
          </a>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-[#2CB67D]/30 group"
            style={{ background: 'rgba(44,182,125,0.05)' }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
            <h3 className="font-bold text-[#25A36F] mb-2">WhatsApp Directo</h3>
            <p className="text-xs text-gray-400">Consulta inmediata con nosotros</p>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#0D2B45] text-white/70">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black bg-gradient-to-br from-[#2CB67D] to-[#00A6FB]">M</span>
              <span className="text-white font-bold text-lg">Mirella Care</span>
            </div>
            <p>Conectamos familias con profesionales verificados en El Salvador.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#enfermeras" className="hover:text-white transition-colors">Enfermeras</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Registro</h4>
            <a href={FORM_ENFERMERAS} target="_blank" rel="noopener noreferrer" className="block mb-2 hover:text-white">Registro de Enfermeras</a>
            <a href={FORM_SERVICIOS} target="_blank" rel="noopener noreferrer" className="block hover:text-white">Solicitud de Servicio</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs">
          © 2024 Mirella Care. Hecho con ❤️ para El Salvador.
        </div>
      </div>
    </footer>
  )
}