import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useFeedStore } from '../store/feedStore'
import { FeedUnificado } from '../components/feed/FeedUnificado'
import { USUARIOS, EVENTOS } from '../utils/contenidoReal'

export function HomePage() {
  const navigate = useNavigate()
  const usuario = useAuthStore((s) => s.usuario)
  const publicaciones = useFeedStore((s) => s.publicaciones)
  const cargarPublicaciones = useFeedStore((s) => s.cargarPublicaciones)

  useEffect(() => {
    if (publicaciones.length === 0) {
      cargarPublicaciones()
    }
  }, [])

  const destacados = publicaciones.filter((p) => p.imagenes && p.imagenes.length > 0).slice(0, 3)
  const companieros = USUARIOS.slice(0, 8)

  return (
    <div className="space-y-10 pb-8">

      {/* Hero — welcome + gradient text + orbs */}
      <section className="relative overflow-hidden rounded-2xl glass-deep p-6 md:p-8 scroll-reveal">
        <div className="deco-orb w-72 h-72 -top-24 -right-24 opacity-20 animate-float" />
        <div className="deco-orb w-48 h-48 -bottom-16 -left-16 opacity-15 animate-float-reverse" />
        <div className="deco-ring w-40 h-40 top-1/2 right-8 opacity-10" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-dorado)]">
              {usuario?.fotoPerfil ? (
                <img src={usuario.fotoPerfil} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full gradient-institucional flex items-center justify-center text-white font-bold text-lg">
                  {usuario?.nombreCompleto?.charAt(0) || '?'}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--color-texto-secundario)] tracking-wider uppercase">
                Bienvenido de nuevo
              </p>
              <p className="text-lg font-semibold gradient-text-institucional">
                {usuario?.nombreCompleto?.split(' ')[0] || 'Exalumno'}
              </p>
            </div>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            <span className="gradient-text-institucional">Compartí tus</span>
            <br />
            <span className="gradient-text-dorado">recuerdos</span>
          </h1>

          <p className="text-sm text-[var(--color-texto-secundario)] mt-3 max-w-lg leading-relaxed">
            40 años después, la Promoción 86 del Instituto Inmaculada Concepción sigue más unida que nunca. Compartí fotos, videos y momentos con tus compañeros.
          </p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => navigate('/fotos')}
              className="btn-micro engraved-pill px-5 py-2.5 text-sm"
            >
              📸 Fotos
            </button>
            <button
              onClick={() => navigate('/videos')}
              className="btn-micro engraved-pill px-5 py-2.5 text-sm"
            >
              🎥 Videos
            </button>
            <button
              onClick={() => navigate('/chat')}
              className="btn-micro engraved-pill px-5 py-2.5 text-sm"
            >
              💬 Chat
            </button>
          </div>
        </div>
      </section>

      {/* Momentos Destacados — featured post cards */}
      {destacados.length > 0 && (
        <section className="scroll-reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="divider-line-left" />
            <h2 className="font-heading text-xl font-bold gradient-text-institucional">
              Momentos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destacados.map((pub) => {
              const autor = USUARIOS.find((u) => u.id === pub.autorId)
              return (
                <div
                  key={pub.id}
                  className="glass-card rounded-xl overflow-hidden hover-lift group cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById(`pub-${pub.id}`)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    {pub.imagenes?.[0] ? (
                      <img
                        src={pub.imagenes[0]}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full gradient-institucional opacity-30" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={pub.autorFoto}
                        alt=""
                        className="w-6 h-6 rounded-full border border-[var(--color-celeste)]"
                      />
                      <span className="text-xs font-semibold text-[var(--color-institucional)]">
                        {pub.autorNombre}
                      </span>
                      {pub.plataforma && (
                        <span className="text-[10px] text-[var(--color-texto-secundario)] ml-auto opacity-60">
                          {pub.plataforma}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-texto-secundario)] line-clamp-2 leading-relaxed">
                      {pub.contenido}
                    </p>
                    {autor?.ciudad && (
                      <p className="text-[10px] text-[var(--color-texto-secundario)] mt-2 opacity-50">
                        📍 {autor.ciudad}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Compañeros en Línea — horizontal avatar strip */}
      <section className="scroll-reveal">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="divider-line-left" />
            <h2 className="font-heading text-xl font-bold gradient-text-institucional">
              Compañeros
            </h2>
          </div>
          <button
            onClick={() => navigate('/chat')}
            className="text-xs font-medium text-[var(--color-celeste)] hover:underline"
          >
            Ver todos →
          </button>
        </div>

        <div className="glass-card rounded-xl p-5 hover-glow">
          <div className="flex gap-5 overflow-x-auto pb-1 no-scrollbar">
            {companieros.map((u) => (
              <button
                key={u.id}
                onClick={() => navigate(`/perfil/${u.id}`)}
                className="flex flex-col items-center gap-1.5 shrink-0 hover-lift group"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-dorado)] group-hover:border-[var(--color-celeste)] transition-colors duration-300">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.nombre}`}
                      alt={u.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-[var(--color-exito)] border-2 border-white animate-pulse-glow" />
                </div>
                <span className="text-xs font-medium text-[var(--color-institucional)] truncate max-w-[64px]">
                  {u.nombre}
                </span>
                <span className="text-[9px] text-[var(--color-texto-secundario)] truncate max-w-[64px] opacity-60">
                  {u.ciudad?.split(' ')[0] || ''}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feed de Publicaciones */}
      <section className="scroll-reveal">
        <div className="flex items-center gap-3 mb-4">
          <div className="divider-line-left" />
          <h2 className="font-heading text-xl font-bold gradient-text-institucional">
            Publicaciones
          </h2>
        </div>
        <FeedUnificado />
      </section>

      {/* Próximos Eventos */}
      <section className="scroll-reveal">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="divider-line-left" />
            <h2 className="font-heading text-xl font-bold gradient-text-institucional">
              Próximos Eventos
            </h2>
          </div>
          <button
            onClick={() => navigate('/eventos')}
            className="text-xs font-medium text-[var(--color-celeste)] hover:underline"
          >
            Ver todos →
          </button>
        </div>

        <div className="space-y-3">
          {EVENTOS.map((ev) => (
            <div
              key={ev.id}
              className="glass-card rounded-xl p-4 hover-lift group cursor-pointer"
              onClick={() => navigate('/eventos')}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl gradient-institucional flex items-center justify-center shrink-0 text-white text-sm font-bold shadow-glow">
                    {ev.titulo.split(' ')[0].slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-[var(--color-institucional)]">
                      {ev.titulo}
                    </h3>
                    <p className="text-xs text-[var(--color-texto-secundario)] mt-0.5">
                      📅 {ev.fecha}
                    </p>
                    <p className="text-xs text-[var(--color-texto-secundario)] truncate">
                      📍 {ev.lugar}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[var(--color-exito)] font-bold text-lg leading-none">{ev.confirmados}</p>
                  <p className="text-[10px] text-[var(--color-texto-secundario)] mt-0.5">confirmados</p>
                  {ev.pendientes > 0 && (
                    <p className="text-[10px] text-[var(--color-advertencia)] mt-0.5">+{ev.pendientes} pendientes</p>
                  )}
                </div>
              </div>
              {ev.menuEspecial && ev.menuEspecial.length > 0 && (
                <div className="flex gap-1.5 mt-3">
                  {ev.menuEspecial.map((dieta) => (
                    <span
                      key={dieta}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-crema)] text-[var(--color-texto-secundario)]"
                    >
                      {dieta === 'celiaco' ? '🥜 Sin gluten' : '🥬 Veggie'}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card rounded-xl p-6 text-center scroll-reveal">
        <div className="divider-line mx-auto mb-5 max-w-xs" />
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full gradient-institucional flex items-center justify-center text-white text-xs font-bold">
            IC
          </div>
          <p className="font-heading text-lg font-bold gradient-text-institucional">
            Instituto Inmaculada Concepción
          </p>
        </div>
        <p className="text-xs text-[var(--color-texto-secundario)]">
          Promoción 1986 · 40 Años
        </p>
        <div className="divider-line mx-auto my-4 max-w-[120px]" />
        <p className="text-xs text-[var(--color-texto-secundario)] opacity-60">
          Conectados por siempre
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => navigate('/fotos')}
            className="text-xs text-[var(--color-celeste)] hover:underline"
          >
            Fotos
          </button>
          <button
            onClick={() => navigate('/videos')}
            className="text-xs text-[var(--color-celeste)] hover:underline"
          >
            Videos
          </button>
          <button
            onClick={() => navigate('/chat')}
            className="text-xs text-[var(--color-celeste)] hover:underline"
          >
            Chat
          </button>
        </div>
        <p className="text-[10px] text-[var(--color-texto-secundario)] opacity-40 mt-4">
          © 2026 · Todos los derechos reservados
        </p>
      </footer>
    </div>
  )
}
