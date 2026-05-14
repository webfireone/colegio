import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useFeedStore } from '../store/feedStore'
import { FeedUnificado } from '../components/feed/FeedUnificado'
import { getFotoPerfil } from '../utils/fotos'
import { USUARIOS, EVENTOS } from '../utils/contenidoReal'

function pickSlice<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

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
  const companieros = pickSlice(USUARIOS, 8)

  return (
    <div className="space-y-14 pb-12">

      {/* ════════════════════════════════════════════
         HERO — welcome + gradient text + decorative blobs
         ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-2xl p-8 md:p-10 scroll-reveal" style={{ background: 'linear-gradient(135deg, rgba(26,42,94,0.03), rgba(74,144,226,0.05), rgba(212,175,55,0.03))' }}>
        {/* Decorative blobs — fondo */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-celeste), transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-dorado), transparent 70%)', transform: 'translate(-20%, 20%)' }} />

        {/* Orbes y anillos decorativos */}
        <div className="deco-orb w-80 h-80 -top-32 -right-20 opacity-20 animate-float" />
        <div className="deco-orb w-56 h-56 -bottom-20 -left-20 opacity-15 animate-float-reverse" />
        <div className="deco-ring w-48 h-48 top-1/3 right-12 opacity-[0.08] animate-levitate" />
        <div className="deco-ring w-32 h-32 bottom-8 left-1/4 opacity-[0.06] animate-float" />

        {/* Contenido */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-dorado)] shadow-glow-dorado">
              {usuario?.fotoPerfil ? (
                <img src={usuario.fotoPerfil} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full gradient-institucional flex items-center justify-center text-white font-bold text-xl">
                  {usuario?.nombreCompleto?.charAt(0) || '?'}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--color-texto-secundario)] tracking-[0.15em] uppercase">
                Bienvenido de nuevo
              </p>
              <p className="text-xl font-bold gradient-text-institucional">
                {usuario?.nombreCompleto?.split(' ')[0] || 'Exalumno'}
                <span className="text-[var(--color-texto-secundario)] font-normal"> 👋</span>
              </p>
            </div>
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-[var(--color-celeste)] to-transparent mb-5" />

          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            <span className="gradient-text-institucional">Compartí tus</span>
            <br />
            <span className="gradient-text-dorado">recuerdos</span>
            <span className="text-[var(--color-texto)] opacity-20">.</span>
          </h1>

          <p className="text-sm text-[var(--color-texto-secundario)] mt-4 max-w-xl leading-relaxed">
            40 años después, la Promoción 86 del Instituto Inmaculada Concepción sigue más unida que nunca. Compartí fotos, videos y momentos con tus compañeros de toda la vida.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <button
              onClick={() => navigate('/fotos')}
              className="btn-micro engraved-pill px-6 py-3 text-sm font-medium hover-lift"
            >
              <span className="mr-1.5">📸</span> Fotos
            </button>
            <button
              onClick={() => navigate('/videos')}
              className="btn-micro engraved-pill px-6 py-3 text-sm font-medium hover-lift"
            >
              <span className="mr-1.5">🎥</span> Videos
            </button>
            <button
              onClick={() => navigate('/chats')}
              className="btn-micro engraved-pill px-6 py-3 text-sm font-medium hover-lift"
            >
              <span className="mr-1.5">💬</span> Chat
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         MOMENTOS DESTACADOS — full-bleed image cards
         ════════════════════════════════════════════ */}
      {destacados.length > 0 && (
        <section className="scroll-reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[var(--color-celeste)] line-expand" />
            <h2 className="font-heading text-2xl font-bold gradient-text-institucional">
              Momentos Destacados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {destacados.map((pub) => (
              <div
                key={pub.id}
                className="group cursor-pointer relative rounded-2xl overflow-hidden hover-lift"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
                onClick={() => {
                  const el = document.getElementById(`pub-${pub.id}`)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
              >
                {/* Imagen full-bleed */}
                {pub.imagenes?.[0] ? (
                  <img
                    src={pub.imagenes[0]}
                    alt=""
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] gradient-institucional opacity-30" />
                )}

                {/* Gradient overlay — más fuerte abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                {/* Editorial lighting — hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Contenido sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={pub.autorFoto}
                      alt=""
                      className="w-6 h-6 rounded-full border border-white/30"
                    />
                    <span className="text-xs font-semibold text-white/90">{pub.autorNombre}</span>
                    {pub.plataforma && (
                      <span className="text-[9px] text-white/50 ml-auto tracking-wide uppercase">{pub.plataforma}</span>
                    )}
                  </div>
                  <p className="text-sm text-white/80 line-clamp-2 leading-relaxed drop-shadow-sm">
                    {pub.contenido}
                  </p>
                </div>

                {/* Arrow indicator hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-1">
                  <span className="text-white/60 text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════
         COMPAÑEROS — glass card con avatares
         ════════════════════════════════════════════ */}
      <section className="scroll-reveal">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-celeste)] line-expand" />
            <h2 className="font-heading text-2xl font-bold gradient-text-institucional">
              Compañeros
            </h2>
          </div>
          <button
            onClick={() => navigate('/chats')}
            className="text-xs font-medium text-[var(--color-celeste)] hover:text-[var(--color-institucional)] transition-colors"
          >
            Ver todos <span className="ml-0.5">→</span>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl glass-card p-6 hover-glow">
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-celeste), transparent 70%)' }} />
          <div className="flex gap-6 overflow-x-auto pb-1 no-scrollbar">
            {companieros.map((u) => (
              <button
                key={u.id}
                onClick={() => navigate(`/perfil/${u.id}`)}
                className="flex flex-col items-center gap-1.5 shrink-0 hover-lift group"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-dorado)] group-hover:border-[var(--color-celeste)] transition-all duration-400 shadow-glow-dorado group-hover:shadow-glow">
                    <img
                      src={getFotoPerfil(u.nombre)}
                      alt={u.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                    />
                  </div>
                  <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--color-exito)] border-2 border-white animate-pulse-glow" />
                </div>
                <span className="text-xs font-semibold text-[var(--color-institucional)] truncate max-w-[68px]">
                  {u.nombre}
                </span>
                <span className="text-[9px] text-[var(--color-texto-secundario)] truncate max-w-[68px] opacity-60">
                  {u.ciudad?.split(' ')[0] || ''}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
         PUBLICACIONES — feed completo
         ════════════════════════════════════════════ */}
      <section className="scroll-reveal">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-[var(--color-celeste)] line-expand" />
          <h2 className="font-heading text-2xl font-bold gradient-text-institucional">
            Publicaciones
          </h2>
        </div>
        <FeedUnificado />
      </section>

      {/* ════════════════════════════════════════════
         PRÓXIMOS EVENTOS — cards con gradiente y badges
         ════════════════════════════════════════════ */}
      <section className="scroll-reveal">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-celeste)] line-expand" />
            <h2 className="font-heading text-2xl font-bold gradient-text-institucional">
              Próximos Eventos
            </h2>
          </div>
          <button
            onClick={() => navigate('/eventos')}
            className="text-xs font-medium text-[var(--color-celeste)] hover:text-[var(--color-institucional)] transition-colors"
          >
            Ver todos <span className="ml-0.5">→</span>
          </button>
        </div>

        <div className="space-y-4">
          {EVENTOS.map((ev) => (
            <div
              key={ev.id}
              className="group relative overflow-hidden rounded-2xl glass-card p-5 hover-lift cursor-pointer"
              onClick={() => navigate('/eventos')}
            >
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.02] pointer-events-none transition-transform duration-700 group-hover:scale-150" style={{ background: 'radial-gradient(circle, var(--color-institucional), transparent 70%)', transform: 'translate(30%, -30%)' }} />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-14 h-14 rounded-xl gradient-institucional flex items-center justify-center shrink-0 text-white text-lg font-bold shadow-glow group-hover:scale-110 transition-transform duration-400">
                    {ev.titulo.split(' ')[0].slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base text-[var(--color-institucional)] group-hover:gradient-text-institucional transition-all duration-300">
                      {ev.titulo}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <p className="text-xs text-[var(--color-texto-secundario)]">
                        📅 {ev.fecha}
                      </p>
                      <p className="text-xs text-[var(--color-texto-secundario)] truncate max-w-[240px]">
                        📍 {ev.lugar}
                      </p>
                    </div>

                    {ev.menuEspecial && ev.menuEspecial.length > 0 && (
                      <div className="flex gap-1.5 mt-2">
                        {ev.menuEspecial.map((dieta) => (
                          <span
                            key={dieta}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-texto-secundario)] font-medium"
                          >
                            {dieta === 'celiaco' ? '🥜 Sin gluten' : '🥬 Opción veggie'}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[var(--color-exito)] font-bold text-2xl leading-none">{ev.confirmados}</span>
                    <span className="text-[10px] text-[var(--color-texto-secundario)]">/</span>
                    <span className="text-sm text-[var(--color-texto-secundario)]">{ev.confirmados + ev.pendientes}</span>
                  </div>
                  <p className="text-[10px] text-[var(--color-texto-secundario)] mt-0.5">confirmados</p>
                  <div className="w-full h-1.5 rounded-full bg-[var(--color-surface)] mt-2 overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-institucional transition-all duration-500"
                      style={{ width: `${(ev.confirmados / (ev.confirmados + ev.pendientes)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
         FOOTER — glass + watermark
         ════════════════════════════════════════════ */}
      <footer className="relative overflow-hidden rounded-2xl glass-card p-8 text-center scroll-reveal">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-heading font-bold leading-none tracking-tighter text-[var(--color-institucional)] whitespace-nowrap opacity-[0.02]" style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
            PROMO 86
          </span>
        </div>

        <div className="relative z-10">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-celeste)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--color-dorado)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-celeste)]" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl gradient-institucional flex items-center justify-center text-white text-sm font-bold shadow-glow">
              IC
            </div>
            <p className="font-heading text-xl font-bold gradient-text-institucional">
              Instituto Inmaculada Concepción
            </p>
          </div>

          <p className="text-sm text-[var(--color-texto-secundario)] font-medium">
            Promoción 1986 <span className="opacity-40 mx-2">·</span> 40 Años
          </p>

          <div className="divider-line mx-auto my-5 max-w-[140px]" />

          <p className="text-sm text-[var(--color-texto-secundario)] opacity-70">
            Conectados por siempre
          </p>

          <div className="flex items-center justify-center gap-6 mt-5">
            <button onClick={() => navigate('/fotos')} className="group flex items-center gap-1.5 text-xs text-[var(--color-texto-secundario)] hover:text-[var(--color-celeste)] transition-colors">
              <span>📸</span>
              <span className="group-hover:underline">Fotos</span>
            </button>
            <button onClick={() => navigate('/videos')} className="group flex items-center gap-1.5 text-xs text-[var(--color-texto-secundario)] hover:text-[var(--color-celeste)] transition-colors">
              <span>🎬</span>
              <span className="group-hover:underline">Videos</span>
            </button>
            <button onClick={() => navigate('/chats')} className="group flex items-center gap-1.5 text-xs text-[var(--color-texto-secundario)] hover:text-[var(--color-celeste)] transition-colors">
              <span>💬</span>
              <span className="group-hover:underline">Chat</span>
            </button>
          </div>

          <p className="text-[10px] text-[var(--color-texto-secundario)] opacity-30 mt-6">
            © 2026 · Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
