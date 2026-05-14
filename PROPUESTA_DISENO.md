# INSTITUTO INMACULADA CONCEPCIÓN — CONECTADOS POR SIEMPRE

## Propuesta de Diseño UX/UI · Plataforma Social para Exalumnos 1986

---

## 1. DIRECCIONES CREATIVAS

### Opción A: "Clásico & Elegante" (RECOMENDADA)

Un álbum físico digitalizado. Fondos con textura de papel sutíl, tipografía serif (Playfair Display) en títulos que evoca los anuarios escolares, y una paleta de tonos tierra que transmite que esto es un archivo valioso, no una red social más.

| Aspecto | Detalle |
|---------|---------|
| **Sensación** | Archivo escolar vivo. Álbum de fotos que cobra movimiento. |
| **Fondos** | Blanco roto #F5F0E8 con textura de papel granulada muy sutil (CSS noise overlay desactivable) |
| **Tarjetas** | Sombra suave, bordes ligeramente redondeados (8px), esquinas que recuerdan a fotos impresas |
| **Tipografía titulares** | Playfair Display 700, tamaño fluido `clamp(1.5rem, 3vw, 2.5rem)` |
| **Microinteracciones** | Transición suave de pasar página, loaders con animación de álbum abriéndose |
| **Pros** | Conexión emocional inmediata con la época del egreso; sensación de exclusividad y cuidado; diferencia clara de cualquier red social comercial |
| **Contras** | Puede sentirse demasiado formal si se busca espontaneidad; el tono serif en exceso reduce legibilidad en móvil |

### Opción B: "Cercano & Vibrante"

Una reunión en vivo digital. Colores cálidos, ilustraciones amigables, microinteracciones afectivas (corazones flotando, confeti en cumpleaños), y una energía de "salón de actos" más que de "archivo".

| Aspecto | Detalle |
|---------|---------|
| **Sensación** | Fiesta de reencuentro permanente. Calidez de abrazo. |
| **Fondos** | Gradiente sutil entre azul institucional y celeste conexión en headers |
| **Tarjetas** | Sombras más marcadas, bordes redondeados (12px), colores de acento vibrantes en botones |
| **Tipografía titulares** | Inter 700 (sin serif), misma escala fluida |
| **Microinteracciones** | Like con animación de estallido de color, confeti en cumpleaños, burbujas de chat con rebote |
| **Pros** | Invita a la participación activa; reduce la barrera de "esto es serio"; más tolerante con contenido espontáneo y divertido |
| **Contras** | Puede senterse infantil si no se calibra bien; el exceso de animación puede distraer al público +55 |

### Decisión: Opción A como base con toques seleccionados de la B

**Estrategia híbrida**: Arquitectura visual "Clásico & Elegante" (sensación de álbum valioso) + microinteracciones "Cercano & Vibrante" selectivas (like con calor, confeti en cumpleaños, burbujas de chat amigables). Esto da el equilibrio correcto entre **nostalgia solemne** y **alegría del reencuentro**.

---

## 2. PALETA & CONTRASTE (NOSTALGIA Y CLARIDAD)

Basada en los colores institucionales que definiste, adaptados con OKLCH para garantizar WCAG 2.2 AA:

### Colores Primarios (Marca)

| Token | HEX | OKLCH | Uso |
|-------|-----|-------|-----|
| `--color-institucional` | `#1A2A5E` | oklch(0.22 0.08 265) | Headers, barra navegación, botones primarios, texto institucional |
| `--color-celeste` | `#4A90E2` | oklch(0.62 0.13 250) | Links, acentos interactivos, badges de "nuevo" |
| `--color-dorado` | `#D4AF37` | oklch(0.74 0.15 95) | Fechas especiales, logros, destacados de recuerdos, icono "año 1986" |
| `--color-blanco` | `#FFFFFF` | oklch(1 0 0) | Fondos principales, tarjetas |
| `--color-crema` | `#F5F0E8` | oklch(0.95 0.01 85) | Fondos alternos, textura de papel, secciones nostálgicas |

### Colores Semánticos (Plataformas)

| Plataforma | HEX | OKLCH | Uso |
|------------|-----|-------|-----|
| Facebook | `#1877F2` | oklch(0.55 0.18 255) | Icono FB, publicaciones tipo muro |
| Instagram | `#E4405F` | oklch(0.58 0.22 15) | Icono IG, galerías, historias |
| TikTok | `#000000` | oklch(0 0 0) | Icono TT, fondo de videos cortos |
| YouTube | `#FF0000` | oklch(0.55 0.22 30) | Icono YT, videoteca, reproduciendo |
| WhatsApp | `#25D366` | oklch(0.72 0.22 145) | Icono WA, burbujas de chat, llamadas |

### Colores Funcionales

| Token | HEX | OKLCH | Contraste sobre blanco | Uso |
|-------|-----|-------|------------------------|-----|
| `--color-texto` | `#1C1C1E` | oklch(0.15 0 0) | 16.8:1 ★★★ | Cuerpo de texto |
| `--color-texto-secundario` | `#6B7280` | oklch(0.52 0.02 250) | 6.1:1 ★★ | Metadatos, fechas, etiquetas |
| `--color-exito` | `#059669` | oklch(0.55 0.18 160) | 5.7:1 ★★ | Confirmación asistencia, online |
| `--color-advertencia` | `#D97706` | oklch(0.65 0.14 75) | 5.2:1 ★★ | Recordatorios, eventos próximos |
| `--color-error` | `#DC2626` | oklch(0.52 0.21 25) | 6.5:1 ★★ | Error, reporte, eliminación |
| `--color-recuerdo` | `#D4AF37` | oklch(0.74 0.15 95) | 4.8:1 ★ | Badge "recuerdo destacado", fechas especiales |

### Contraste WCAG 2.2

- **Texto normal (<18px)**: Relación de contraste ≥ 4.5:1 ✓ (obligatorio AA, aspiramos AAA ≥ 7:1 en texto crítico)
- **Texto grande (≥18px bold / ≥24px regular)**: Relación ≥ 3:1 ✓
- **Componentes activos**: Relación ≥ 3:1 con colores adyacentes ✓
- **Foco visible**: Anillo de 3px con `--color-celeste` + offset 2px ✓
- **Modo Alto Contraste**: Toggle que fuerza `--color-texto` a #000 y fondos a #FFF

### Modo Oscuro (opcional, no predeterminado)

| Token oscuro | HEX | Uso |
|--------------|-----|-----|
| `--bg-primary` | `#121212` | Fondo principal |
| `--bg-card` | `#1E1E1E` | Tarjetas |
| `--texto-primario` | `#E5E5E5` | Texto principal |
| `--texto-secundario` | `#A0A0A0` | Texto secundario |

---

## 3. TIPOGRAFÍA (LEGIBILIDAD PRIORITARIA)

### Stack tipográfico

```css
--font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
--font-heading: 'Playfair Display', 'Georgia', serif;
--font-mono: 'JetBrains Mono', 'Cascadia Code', monospace;
```

### Escala fluida

| Nivel | Tamaño | Peso | Tracking | Interlineado | Uso |
|-------|--------|------|----------|--------------|-----|
| **Display** | `clamp(2rem, 4vw, 3.5rem)` | 700 | -0.02em | 1.2 | Hero, bienvenida |
| **Título 1** | `clamp(1.5rem, 3vw, 2.5rem)` | 700 | -0.01em | 1.3 | Títulos de página |
| **Título 2** | `clamp(1.25rem, 2.5vw, 2rem)` | 600 | 0 | 1.35 | Títulos de sección |
| **Título 3** | `clamp(1.125rem, 2vw, 1.5rem)` | 600 | 0 | 1.4 | Subtítulos, nombres de perfil |
| **Cuerpo** | `clamp(1rem, 1.5vw, 1.125rem)` | 400 | +0.02em | 1.6 | Texto general, publicaciones |
| **Cuerpo grande** | `clamp(1.125rem, 1.8vw, 1.25rem)` | 400 | +0.02em | 1.6 | Modo texto grande |
| **Botón** | `clamp(1rem, 1.5vw, 1.125rem)` | 600 | +0.01em | 1.2 | Botones, labels de input |
| **Metadato** | `clamp(0.875rem, 1.2vw, 1rem)` | 400 | +0.02em | 1.4 | Fechas, ubicación, hora |
| **Cifra/Acción** | `clamp(1.125rem, 1.8vw, 1.25rem)` | 700 | 0 | 1.2 | Contadores, números destacados |

### Modo "Letra Grande" (accesibilidad +55)

```css
[data-font-size="large"] {
  --fs-body: clamp(1.25rem, 2vw, 1.5rem);
  --fs-button: clamp(1.25rem, 2vw, 1.5rem);
  --fs-heading: clamp(2rem, 4vw, 3rem);
  --lh-body: 1.7;
}
```

### Reglas tipográficas

- Nunca usar pesos menor a 400.
- Nunca usar font-style: italic en bloques largos.
- Playfair Display SOLO en títulos (máximo 2 niveles de jerarquía).
- Inter en todo el cuerpo, botones, labels, metadatos.
- `text-rendering: optimizeLegibility` activo.
- `font-variant-numeric: oldstyle-nums` opcional para fechas.

---

## 4. SÍNTESIS DE PLATAFORMAS (UNA FUNCIÓN, UN LUGAR)

### Mapa de unificación

| Función | Origen | Destino unificado | Comportamiento |
|---------|--------|-------------------|----------------|
| Muro de publicaciones | Facebook | **Feed** (pestaña Inicio) | Texto, fotos, videos, encuestas, eventos. Comentarios anidados (1 nivel). 6 reacciones. |
| Grupos | Facebook | **Comunidades** (sección separada) | Muro interno, eventos propios, archivos, roles admin. |
| Eventos | Facebook | **Eventos** (widget + sección) | Calendario, mapa, confirmación, menú especial. |
| Páginas de recuerdo | Facebook | **Perfiles conmemorativos** (flag en perfil) | Modo tributo en perfiles de compañeros fallecidos. |
| Feed cuadrado | Instagram | **Galería** (pestaña Fotos) | Grid masonry, carrusel 10 fotos, filtros época. |
| Historias | Instagram | **Momentos del día** (barra superior) | Desaparecen 24h. Stickers interactivos. Se guardan en "Recuerdos destacados". |
| Mensajes directos | Instagram | **Chats** (integrado con WA) | Fotos efímeras modo "visto y desaparece". |
| Videos cortos | TikTok | **Reels** (pestaña Videos > Cortos) | Scroll vertical infinito, 60s máx, orden cronológico inverso. |
| Duetos / Reacciones | TikTok | **Duetos** dentro de Reels | Pantalla dividida, efectos RA. |
| Desafíos virales | TikTok | **Tendencias** (sección dentro de Reels) | Desafíos curados por comisión, no algoritmo. |
| Videos largos | YouTube | **Videoteca** (pestaña Videos > Largos) | Grid horizontal, hasta 10min, playlists colaborativas. |
| Transmisiones en vivo | YouTube | **En Vivo** (sección dentro de Videoteca) | Chat en vivo superpuesto. Solo para eventos oficiales. |
| Chat 1:1 y grupal | WhatsApp | **Chats** (pestaña Chat) | Burbujas, notas voz 5min, stickers personalizados. |
| Estados | WhatsApp | **Estados** (integrados en Momentos del día) | Fotos/videos 24h. Misma lógica que historias. |
| Llamadas/videollamadas | WhatsApp | **Llamadas** (subpestaña en Chats) | Voz/video hasta 8 personas. HD. |
| Ubicación en vivo | WhatsApp | **Compartir ubicación** (dentro del chat) | Mapa embebido, duración configurable. |

### Regla de unificación

| Si existe... | No duplicar como... | Hacer esto |
|--------------|---------------------|------------|
| Comentarios en publicaciones | Comentarios + respuestas separadas | Comentarios anidados (1 nivel, máx 3 respuestas visibles, "ver más") |
| Reacciones (like) | Reacciones + votos + me gusta separados | 6 reacciones universales en todo contenido publicable |
| Compartir | Compartir + reblog + retweet | Botón "Compartir" único con destino: Muro / Comunidad / Chat |
| Mensajes directos | MD desde IG + MD desde FB + Chat WA | Única bandeja de **Chats** unificados |
| Historias | Historias IG + Estados WA + Fleets | **Momentos del día** (barra horizontal superior, misma fuente) |

---

## 5. ARQUITECTURA DE NAVEGACIÓN

### Desktop (≥1024px)

```
┌──────────────────────────────────────────────────────────────┐
│  🏫 Cabecera: Logo + Buscador global + Notificaciones + Avatar │
├──────────┬───────────────────────────────────┬────────────────┤
│          │                                   │  Widgets       │
│ SIDEBAR  │   FEED CENTRAL                    │  ────────────  │
│          │                                   │  📅 Eventos    │
│ 🏠 Inicio│   [Momentos del día - barra]      │     próximos   │
│ 📸 Fotos │                                   │  🎂 Cumpleaños │
│ 🎬 Videos│   [Publicaciones mezcladas]       │     del mes    │
│ 💬 Chats │   · FB: texto/foto                │  👥 Activos    │
│ 👤 Perfil│   · IG: galería                   │     ahora      │
│          │   · TT: reel vertical             │  🔒 Privacidad │
│ ⚙️ Admin  │   · YT: video largo              │     rápida     │
│  (comisión)│   · WA: estado                    │                │
│          │                                   │                │
│          │   [Scroll infinito - Lenis]       │                │
├──────────┴───────────────────────────────────┴────────────────┤
│  Footer legal: © 2026 · Términos · Privacidad · Ayuda         │
└──────────────────────────────────────────────────────────────┘
```

### Mobile (<1024px)

```
┌──────────────────────────────┐
│ 🔍 Buscador   🔔 Notif.  👤 │
├──────────────────────────────┤
│ [Momentos del día - horizontal] │
│ 📸 │ 🎥 │ 📝 │ 💬            │
├──────────────────────────────┤
│                              │
│      FEED CENTRAL            │
│  (scroll infinito)           │
│                              │
│                              │
├──────────────────────────────┤
│ 🏠  📸  🎬  💬  👤         │
│Inicio Fots Vids Chat Perfil │
└──────────────────────────────┘
```

### Barra inferior móvil

| Icono | Label | Acción principal |
|-------|-------|------------------|
| 🏠 | Inicio | Feed unificado |
| 📸 | Fotos | Galería + Momentos |
| 🎬 | Videos | Reels + Videoteca |
| 💬 | Chat | Bandeja de mensajes |
| 👤 | Yo | Perfil + Ajustes |

### Menú hamburguesa secundario (móvil)

Accesible desde icono ≡ en cabecera:
- Comunidades (grupos)
- Eventos
- Videoteca completa
- Favoritos guardados
- Configuración
- Ayuda / Tutoriales
- Cerrar sesión

---

## 6. COMPONENTES PRINCIPALES (PANTALLAS Y FLUJOS)

### 6.1 Registro y verificación

```
Flujo:
1. Email + código de verificación
2. Pregunta de seguridad escolar:
   "¿Cuál era el nombre del director/a en 1986?"
   "¿Cuál era el curso/año de egreso?"
   Batch de respuestas correctas → verificación automática
3. Crear perfil: foto, biografía, ubicación
4. Tutorial interactivo de 30 segundos ("¿Quieres un tour rápido?")
5. Feed vacío con sugerencias de "Compañeros que ya están aquí"
```

### 6.2 Perfil de exalumno

```
┌─────────────────────────────────────┐
│  📷 Foto portada (16:9)             │
│  ┌──────┐                           │
│  │ Foto │  Nombre Completo          │
│  │ perfil│  @usuario                 │
│  │      │  📍 Ciudad, País          │
│  └──────┘  🎂 15 de mayo            │
│            Promoción 1986            │
├─────────────────────────────────────┤
│  [📝 Biografía] [🔗 Editar perfil]  │
│                                     │
│  Profesión: Ingeniero jubilado      │
│  Estado civil: Casado               │
│  Frase: "La unión hace la fuerza"   │
│  Música fav: Soda Stereo            │
├─────────────────────────────────────┤
│  📊 Estadísticas                    │
│  47 amigos · 12 seguidores          │
│  6 publicaciones · 3 álbumes        │
├─────────────────────────────────────┤
│  📸 Fotos destacadas (grid 3 cols)  │
│  🎬 Videos recientes                │
│  📝 Últimas publicaciones           │
├─────────────────────────────────────┤
│  🔒 Privacidad:                     │
│  [Solo compañeros] [Grupo curso]    │
└─────────────────────────────────────┘
```

### 6.3 Feed de publicaciones (unificado)

```
┌─────────────────────────────────────┐
│ 📘 Facebook    📸 Instagram         │
│ 🎬 TikTok      📺 YouTube          │
│ 💬 WhatsApp                         │
│ [Filtrar por plataforma]            │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ 📸 María López                  │ │
│ │ Hace 2h · 🌐 Público           │ │
│ │                                 │ │
│ │ ¡Qué emoción encontrar esta     │ │
│ │ foto del viaje a Bariloche!     │ │
│ │                                 │ │
│ │ 🖼️ [imagen vintage]            │ │
│ │                                 │ │
│ │ ❤️ 12 · 😂 3 · 😢 1            │ │
│ │ 💬 Ver 5 comentarios            │ │
│ │ 📤 Compartir                    │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 🎬 Juan Pérez (TikTok)          │ │
│ │ Hace 5h · 🎵 "Persiana America" │ │
│ │                                 │ │
│ │ [Video vertical 9:16]           │ │
│ │ ▶️ Reproducir                   │ │
│ │                                 │ │
│ │ ❤️ 8 · 💬 2 · 📤 1             │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### 6.4 Chats (WhatsApp integrado)

```
┌─────────────────────────────────────┐
│ 💬 Chats           📞 Llamadas      │
├─────────────────────────────────────┤
│ 🔍 Buscar chats...                  │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 📸 María López    "Te mando la  │ │
│ │ 🟢 Hoy 14:30      foto del acto"│ │
│ ├─────────────────────────────────┤ │
│ │ 👥 Promo 86 (15)  "Confirmo     │ │
│ │ 🟢 Hoy 13:15      asistencia!"  │ │
│ ├─────────────────────────────────┤ │
│ │ 🔊 Juan Pérez     🎤 (0:42)     │ │
│ │ 🔴 Ayer 22:10                   │ │
│ ├─────────────────────────────────┤ │
│ │ 📢 Anuncios       "Cena anual:  │ │
│ │ 📌 Fijado         10 dic 2026"  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘

--- Dentro del chat ---

┌─────────────────────────────────────┐
│ ← Chats    María López    📞 📹     │
├─────────────────────────────────────┤
│                                     │
│  ┌────────────────────────────┐     │
│  │ María: ¡Mirá qué encontré! │  😊 │
│  └────────────────────────────┘     │
│                                     │
│  ┌────────────────────────────┐     │
│  │ 🖼️ [foto antigua]         │     │
│  └────────────────────────────┘     │
│                                     │
│          ┌──────────────────┐       │
│          │ ¿Te acordás de   │       │
│          │ ese día? 😄      │       │
│          └──────────────────┘       │
│                                     │
│  ┌────────────────────────────┐     │
│  │ 🔊 [▶️ 0:32]              │     │
│  └────────────────────────────┘     │
│                                     │
│ ─────────────────────────────────── │
│  📎 📷 🎤 📍  Escribe un mensaje…  │
│                                     │
└─────────────────────────────────────┘
```

---

## 7. CSS FRAGMENTS

### 7.1 Variables CSS completas

```css
:root {
  /* Paleta principal */
  --color-institucional: #1A2A5E;
  --color-institucional-light: #2A3F7A;
  --color-celeste: #4A90E2;
  --color-dorado: #D4AF37;
  --color-dorado-light: #E8CD6E;
  --color-blanco: #FFFFFF;
  --color-crema: #F5F0E8;
  --color-texto: #1C1C1E;
  --color-texto-secundario: #6B7280;

  /* Plataformas */
  --color-facebook: #1877F2;
  --color-instagram: #E4405F;
  --color-tiktok: #000000;
  --color-youtube: #FF0000;
  --color-whatsapp: #25D366;

  /* Funcionales */
  --color-exito: #059669;
  --color-advertencia: #D97706;
  --color-error: #DC2626;
  --color-recuerdo: #D4AF37;

  /* Tipografía */
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-heading: 'Playfair Display', 'Georgia', serif;
  --font-mono: 'JetBrains Mono', 'Cascadia Code', monospace;

  /* Tamaños */
  --fs-display: clamp(2rem, 4vw, 3.5rem);
  --fs-h1: clamp(1.5rem, 3vw, 2.5rem);
  --fs-h2: clamp(1.25rem, 2.5vw, 2rem);
  --fs-h3: clamp(1.125rem, 2vw, 1.5rem);
  --fs-body: clamp(1rem, 1.5vw, 1.125rem);
  --fs-body-large: clamp(1.125rem, 1.8vw, 1.25rem);
  --fs-button: clamp(1rem, 1.5vw, 1.125rem);
  --fs-meta: clamp(0.875rem, 1.2vw, 1rem);

  /* Espaciado */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  /* Bordes */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-card: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-elevated: 0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-modal: 0 8px 32px rgba(0,0,0,0.15);

  /* Transiciones */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  /* Z-index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-toast: 400;
}

/* Modo texto grande */
[data-font-size="large"] {
  --fs-body: clamp(1.25rem, 2vw, 1.5rem);
  --fs-button: clamp(1.25rem, 2vw, 1.5rem);
  --fs-h1: clamp(2rem, 4vw, 3rem);
  --fs-h2: clamp(1.75rem, 3vw, 2.5rem);
  --fs-h3: clamp(1.5rem, 2.5vw, 2rem);
}

/* Modo alto contraste */
[data-high-contrast="true"] {
  --color-texto: #000000;
  --color-texto-secundario: #333333;
  --color-crema: #FFFFFF;
  --color-card: #FFFFFF;
  --shadow-card: none;
  --shadow-elevated: none;
}

/* Modo oscuro */
[data-theme="dark"] {
  --color-blanco: #121212;
  --color-crema: #1A1A1A;
  --color-texto: #E5E5E5;
  --color-texto-secundario: #A0A0A0;
  --color-card: #1E1E1E;
}
```

### 7.2 Grid responsive para galería (Instagram-style)

```css
.galeria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  gap: var(--space-sm);
  padding: var(--space-md);
}

.galeria-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-out);
}

.galeria-item:hover,
.galeria-item:focus-visible {
  transform: scale(1.02);
  box-shadow: var(--shadow-elevated);
}

.galeria-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Grid para videoteca (YouTube-style) */
.videoteca-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: var(--space-lg);
  padding: var(--space-md);
}

.videoteca-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.videoteca-thumbnail {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-texto);
}
```

### 7.3 Estilos de chat (WhatsApp-style)

```css
.chat-burbuja {
  max-width: 80%;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-lg);
  font-size: var(--fs-body);
  line-height: 1.5;
  position: relative;
  word-wrap: break-word;
}

.chat-burbuja--propia {
  align-self: flex-end;
  background: var(--color-whatsapp);
  color: white;
  border-bottom-right-radius: var(--radius-sm);
}

.chat-burbuja--ajena {
  align-self: flex-start;
  background: var(--color-crema);
  color: var(--color-texto);
  border-bottom-left-radius: var(--radius-sm);
}

.chat-burbuja--audio {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  min-width: 200px;
}

.chat-audio-waveform {
  flex: 1;
  height: 32px;
  background: linear-gradient(
    to right,
    currentColor 0%,
    currentColor var(--progress),
    transparent var(--progress)
  );
  border-radius: var(--radius-sm);
  opacity: 0.3;
}

.chat-timestamp {
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: right;
  margin-top: var(--space-xs);
}

.chat-input-bar {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-blanco);
  border-top: 1px solid var(--color-crema);
}

.chat-input-bar input {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-crema);
  font-size: var(--fs-body);
  background: var(--color-crema);
}

.chat-input-bar input:focus {
  outline: none;
  border-color: var(--color-celeste);
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}
```

### 7.4 Media queries y accesibilidad

```css
/* Prefiere movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Móvil: ocultar sidebar, mostrar bottom bar */
@media (max-width: 1023px) {
  .sidebar { display: none; }
  .bottom-bar { display: flex; }
  .widgets { display: none; }
  .feed-central { padding: var(--space-sm); }
}

/* Desktop: ocultar bottom bar, mostrar sidebar */
@media (min-width: 1024px) {
  .sidebar { display: flex; }
  .bottom-bar { display: none; }
  .feed-central { max-width: 680px; margin: 0 auto; }
}

/* Pantallas muy grandes */
@media (min-width: 1440px) {
  .feed-central { max-width: 780px; }
}

/* Print styles — "Mi Libro de Recuerdos" */
@media print {
  .sidebar,
  .bottom-bar,
  .chat-input-bar,
  .momentos-bar,
  .btn-ayuda {
    display: none !important;
  }

  .feed-central {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  .publicacion {
    break-inside: avoid;
    page-break-after: always;
    box-shadow: none;
    border: 1px solid #ccc;
    padding: 1cm;
    margin-bottom: 1cm;
  }

  img {
    max-width: 100% !important;
    page-break-inside: avoid;
  }

  body {
    font-size: 12pt;
    color: #000;
    background: #fff;
  }
}

/* Touch targets mínimos 44x44px */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Foco visible */
:focus-visible {
  outline: 3px solid var(--color-celeste);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Skip to main content (accesibilidad) */
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-md);
  background: var(--color-celeste);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  z-index: var(--z-toast);
  font-size: var(--fs-button);
  font-weight: 600;
}

.skip-link:focus {
  top: var(--space-md);
}
```

### 7.5 Glassmorphism en modales

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-md);
}

.modal-content {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  max-width: 520px;
  width: 100%;
  box-shadow: var(--shadow-modal);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

[data-theme="dark"] .modal-content {
  background: rgba(30, 30, 30, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
}
```

---

## 8. ACCESIBILIDAD Y UX PARA +55 AÑOS

### Checklist WCAG 2.2 AA

- ✅ 1.1.1 Contenido no textual — todas las imágenes tienen `alt` descriptivo
- ✅ 1.4.1 Uso del color — la información nunca se transmite solo por color
- ✅ 1.4.3 Contraste mínimo — 4.5:1 en texto normal, 3:1 en grande
- ✅ 1.4.4 Cambio de tamaño de texto — hasta 200% sin pérdida de contenido
- ✅ 1.4.12 Espaciado del texto — soporte para sobrescritura de espaciado
- ✅ 2.1.1 Teclado — toda funcionalidad operable por teclado
- ✅ 2.4.7 Foco visible — anillo de 3px azul celeste
- ✅ 2.5.8 Tamaño del objetivo — todos los targets ≥ 44x44px
- ✅ 3.3.2 Etiquetas o instrucciones — todos los inputs tienen label visible
- ✅ 4.1.3 Mensajes de estado — notificaciones anunciadas por screen reader

### Características específicas para +55

| Funcionalidad | Implementación |
|---------------|----------------|
| **Modo Letra Grande** | Toggle en ajustes. Aumenta `--fs-body` a 20px mínimo. No rompe layout. |
| **Modo Alto Contraste** | Toggle que elimina sombras, fondos translúcidos y colores suaves. Texto #000 sobre #FFF. |
| **Tutoriales en video** | 4 videos de <60s: "Tu perfil", "Publicar", "Chat", "Fotos". Accesibles desde el botón de ayuda. |
| **Asistente de voz** | Botón 🎤 en el input de texto. Usa Web Speech API. Dictado a texto. |
| **Botón de ayuda flotante** | ❓ fijo en esquina inferior derecha. Al hacer clic, entra en modo "explicación": al tocar cualquier elemento, muestra un tooltip con su función. |
| **Conversor de fotos antiguas** | Escáner con cámara → recorte automático → filtro vintage → subida directa a galería. |
| **Calendario de cumpleaños** | Widget con cumpleaños del mes. Botón "Felicitar" que abre chat con mensaje predefinido. |
| **Modo "Solo lectura"** | El usuario puede elegir no recibir notificaciones y solo mirar el feed sin interactuar. | 
| **Sin autoplay con sonido** | Videos comienzan mudos. El usuario elige activar sonido. |
| **Offline suave** | Los datos cargados persisten en caché (TanStack Query). El usuario ve contenido aunque esté sin conexión. |

---

## 9. PRIVACIDAD Y VERIFICACIÓN

### Flujo de registro con verificación escolar

```
1. Email válido → código de 6 dígitos
2. Datos personales: nombre, apellido, año de egreso
3. Pregunta de seguridad (3 intentos):
   - "¿Nombre del director/a en 1986?"
   - "¿Materia favorita del último año?"
   - "¿Nombre de un profesor de aquella época?"
4. Aprobación manual opcional (comisión revisa casos dudosos)
5. Perfil creado con privacidad "Solo compañeros" por defecto
```

### Niveles de visibilidad por contenido

| Nivel | Quién ve | Default |
|-------|----------|---------|
| Solo compañeros | Exalumnos verificados únicamente | ✅ Perfiles |
| Grupo de curso | Solo la promoción específica | ✅ Publicaciones |
| Grupo específico | Miembros de una comunidad/grupo | Grupos |
| Público interno | Todos los usuarios de la app | ❌ (opt-in) |

### Privacidad granular

- Control por álbum/publicación: al crear, selector de visibilidad
- Bloqueo de usuarios: al bloquear, no puede ver perfil ni enviar mensajes
- Silenciar notificaciones: por chat, por grupo, o global (8h / 1 sem / siempre)
- Estado en línea: visible solo para amigos, configurable
- Exportar datos: descarga de todas las publicaciones y fotos en ZIP
- Eliminar cuenta: borrado completo de datos en 30 días

---

## 10. ESTRUCTURA DE ARCHIVOS (PROYECTO REACT 19 + TS + VITE)

```
colegio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── manifest.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                    # Variables globales, resets
│   ├── vite-env.d.ts
│   │
│   ├── types/                       # Modelos de datos TypeScript
│   │   ├── usuario.ts
│   │   ├── publicacion.ts
│   │   ├── grupo.ts
│   │   ├── evento.ts
│   │   ├── mensaje.ts
│   │   ├── galeria.ts
│   │   ├── video.ts
│   │   ├── reaccion.ts
│   │   ├── notificacion.ts
│   │   └── index.ts
│   │
│   ├── store/                       # Zustand stores
│   │   ├── authStore.ts
│   │   ├── feedStore.ts
│   │   ├── chatStore.ts
│   │   ├── perfilStore.ts
│   │   ├── uiStore.ts               # Tema, modo letra grande, alto contraste
│   │   └── notificacionStore.ts
│   │
│   ├── hooks/                       # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useFeed.ts
│   │   ├── useChat.ts
│   │   ├── usePerfil.ts
│   │   ├── useNotificaciones.ts
│   │   ├── useFirestore.ts          # Genérico para Firebase
│   │   ├── useAsistenteVoz.ts       # Web Speech API
│   │   ├── useModoAyuda.ts          # Botón de ayuda explicativo
│   │   └── useModoLectura.ts
│   │
│   ├── services/                    # Firebase y lógica de negocio
│   │   ├── firebase.ts              # Config Firebase
│   │   ├── auth.ts
│   │   ├── firestore.ts
│   │   ├── storage.ts               # Subida de fotos/videos
│   │   └── mock.ts                  # Datos mock para desarrollo offline
│   │
│   ├── components/                  # Componentes React
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── BottomBar.tsx
│   │   │   ├── Cabecera.tsx
│   │   │   ├── Widgets.tsx
│   │   │   └── LayoutPrincipal.tsx
│   │   │
│   │   ├── feed/
│   │   │   ├── FeedUnificado.tsx
│   │   │   ├── PublicacionCard.tsx
│   │   │   ├── PublicacionFacebook.tsx
│   │   │   ├── PublicacionInstagram.tsx
│   │   │   ├── PublicacionTikTok.tsx
│   │   │   ├── PublicacionYouTube.tsx
│   │   │   ├── EstadoWhatsApp.tsx
│   │   │   ├── MomentosDelDia.tsx
│   │   │   ├── Reacciones.tsx
│   │   │   └── Comentarios.tsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ListaChats.tsx
│   │   │   ├── Conversacion.tsx
│   │   │   ├── BurbujaChat.tsx
│   │   │   ├── InputMensaje.tsx
│   │   │   ├── NotaVoz.tsx
│   │   │   └── Llamadas.tsx
│   │   │
│   │   ├── galeria/
│   │   │   ├── GaleriaGrid.tsx
│   │   │   ├── Carrusel.tsx
│   │   │   ├── FiltrosEpoca.tsx
│   │   │   └── AlbumView.tsx
│   │   │
│   │   ├── video/
│   │   │   ├── ReelsFeed.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── Duetos.tsx
│   │   │   ├── Videoteca.tsx
│   │   │   └── YouTubePlayer.tsx
│   │   │
│   │   ├── perfil/
│   │   │   ├── PerfilView.tsx
│   │   │   ├── EditarPerfil.tsx
│   │   │   ├── FotoPortada.tsx
│   │   │   ├── Estadisticas.tsx
│   │   │   └── ModoConmemorativo.tsx
│   │   │
│   │   ├── grupo/
│   │   │   ├── ComunidadesList.tsx
│   │   │   ├── GrupoView.tsx
│   │   │   ├── MiembrosGrupo.tsx
│   │   │   └── ArchivosGrupo.tsx
│   │   │
│   │   ├── evento/
│   │   │   ├── EventosCalendario.tsx
│   │   │   ├── EventoCard.tsx
│   │   │   ├── ConfirmarAsistencia.tsx
│   │   │   └── MapaEvento.tsx
│   │   │
│   │   ├── busqueda/
│   │   │   ├── BuscadorGlobal.tsx
│   │   │   └── ResultadosBusqueda.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegistroForm.tsx
│   │   │   ├── VerificacionCodigo.tsx
│   │   │   └── PreguntaSeguridad.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── BotonAyuda.tsx
│   │   │   ├── ModalGlass.tsx
│   │   │   ├── TooltipAyuda.tsx
│   │   │   ├── TutorialVideo.tsx
│   │   │   ├── ToastNotificacion.tsx
│   │   │   └── SkeletonLoader.tsx
│   │   │
│   │   └── notificaciones/
│   │       ├── CentroNotificaciones.tsx
│   │       └── NotificacionItem.tsx
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── FotosPage.tsx
│   │   ├── VideosPage.tsx
│   │   ├── ChatsPage.tsx
│   │   ├── PerfilPage.tsx
│   │   ├── PerfilAmigoPage.tsx
│   │   ├── GrupoPage.tsx
│   │   ├── EventoPage.tsx
│   │   ├── BusquedaPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegistroPage.tsx
│   │   ├── ConfiguracionPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── routes/
│   │   └── AppRouter.tsx
│   │
│   └── utils/
│       ├── validaciones.ts
│       ├── formatos.ts
│       ├── constantes.ts
│       └── helpers.ts
│
├── firestore.rules                   # Reglas de seguridad Firestore
├── firestore.indexes.json
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── DISENO_PROPUESTA.md
```

---

## 11. MODELOS DE DATOS (TYPE SCRIPT)

```typescript
// === usuario.ts ===
export type EstadoCivil = 'soltero/a' | 'casado/a' | 'divorciado/a' | 'viudo/a' | 'no especifica';
export type VisibilidadPerfil = 'solo_companieros' | 'grupo_curso' | 'publico_interno';

export interface Usuario {
  id: string;
  email: string;
  nombreCompleto: string;
  apellidoSoltera?: string;
  anioEgreso: 1986;
  fechaNacimiento?: string;   // YYYY-MM-DD (solo se muestra día y mes)
  biografia?: string;
  fotoPerfil?: string;         // URL
  fotoPortada?: string;        // URL
  ubicacion: {
    ciudad?: string;
    provincia?: string;
    pais?: string;
  };
  estadoCivil?: EstadoCivil;
  profesion?: string;
  hobbies?: string[];
  musicaFavorita?: string;
  fraseEmblema?: string;
  amigos: string[];            // IDs de usuarios (amistad mutua)
  seguidores: string[];        // IDs de usuarios
  seguidos: string[];          // IDs de usuarios
  privacidad: VisibilidadPerfil;
  ultimoAcceso?: Timestamp;
  online: boolean;
  esConmemorativo: boolean;    // true si el usuario falleció
  fechaCreacion: Timestamp;
}

// === publicacion.ts ===
export type Plataforma = 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'whatsapp';
export type TipoReaccion = 'like' | 'encanta' | 'divierte' | 'asombra' | 'entristece' | 'enoja';

export interface Publicacion {
  id: string;
  autorId: string;
  plataforma: Plataforma;
  contenido?: string;
  imagenes?: string[];         // URLs
  videos?: string[];           // URLs
  filtro?: string;             // 'vintage' | 'sepia' | 'byn' | 'retro80'
  etiquetas?: string[];        // IDs de usuarios etiquetados
  hashtags?: string[];
  visibilidad: VisibilidadPerfil;
  reacciones: Record<TipoReaccion, string[]>;  // tipo → [userId]
  comentarios: Comentario[];
  compartidoDesde?: string;    // ID de publicación original
  fechaCreacion: Timestamp;
  editado: boolean;
}

export interface Comentario {
  id: string;
  autorId: string;
  texto: string;
  imagen?: string;
  gif?: string;
  reacciones: Record<TipoReaccion, string[]>;
  respuestas?: Comentario[];   // 1 nivel de anidamiento
  fechaCreacion: Timestamp;
}

// === mensaje.ts ===
export interface Mensaje {
  id: string;
  conversacionId: string;
  emisorId: string;
  tipo: 'texto' | 'imagen' | 'video' | 'audio' | 'ubicacion' | 'archivo';
  contenido?: string;
  archivoUrl?: string;
  duracionAudio?: number;      // segundos
  ubicacion?: { lat: number; lng: number };
  leido: boolean;
  fechaEnvio: Timestamp;
}

export interface Conversacion {
  id: string;
  participantes: string[];     // IDs de usuarios
  tipo: 'individual' | 'grupal' | 'broadcast';
  nombre?: string;             // para grupos
  fotoGrupo?: string;
  ultimoMensaje?: string;
  ultimaActividad: Timestamp;
  fijado: boolean;
  silenciado: boolean;
  silenciadoHasta?: Timestamp;
}

// === grupo.ts ===
export interface Grupo {
  id: string;
  nombre: string;
  descripcion?: string;
  fotoPortada?: string;
  creadorId: string;
  administradores: string[];
  miembros: string[];
  visibilidad: VisibilidadPerfil;
  fechaCreacion: Timestamp;
}

// === evento.ts ===
export interface Evento {
  id: string;
  titulo: string;
  descripcion?: string;
  fecha: Timestamp;
  lugar?: string;
  ubicacion?: { lat: number; lng: number };
  organizadorId: string;
  confirmados: string[];
  rechazados: string[];
  pendientes: string[];
  menuEspecial?: ('celiaco' | 'vegetariano')[];
  fechaCreacion: Timestamp;
}

// === galeria.ts ===
export interface Album {
  id: string;
  propietarioId: string;
  titulo: string;
  descripcion?: string;
  fotos: string[];             // URLs
  portada?: string;
  visibilidad: VisibilidadPerfil;
  fechaCreacion: Timestamp;
}

// === video.ts ===
export interface Video {
  id: string;
  autorId: string;
  titulo: string;
  descripcion?: string;
  url: string;
  thumbnail?: string;
  tipo: 'corto' | 'largo' | 'vivo';
  duracion: number;            // segundos
  playlistId?: string;
  visitas: number;
  reacciones: Record<TipoReaccion, string[]>;
  comentarios: Comentario[];
  fechaSubida: Timestamp;
}

// === notificacion.ts ===
export interface Notificacion {
  id: string;
  usuarioId: string;
  tipo: 'reaccion' | 'comentario' | 'mencion' | 'mensaje' | 'video_subido' | 'evento_proximo' | 'solicitud_amistad' | 'cumpleanios';
  plataforma: Plataforma;
  mensaje: string;
  referenciaId?: string;       // ID del objeto relacionado (pub, video, etc.)
  emisorId?: string;
  leida: boolean;
  fechaCreacion: Timestamp;
}
```

---

## 12. REGLAS DE SEGURIDAD FIRESTORE

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Solo usuarios autenticados y verificados pueden leer
    function estaAutenticado() {
      return request.auth != null;
    }

    function esUsuarioVerificado(userId) {
      return existe(/databases/$(database)/documents/usuarios/$(userId));
    }

    function esPropietario(userId) {
      return request.auth.uid == userId;
    }

    function esAmigo(userId) {
      return get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.amigos.hasAny([userId]);
    }

    function visibilidadPermitida(visibilidad, propietarioId) {
      return visibilidad == 'publico_interno'
        || (visibilidad == 'solo_companieros' && existe(/databases/$(database)/documents/usuarios/$(request.auth.uid)))
        || (visibilidad == 'grupo_curso' && get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.anioEgreso == 1986)
        || esPropietario(propietarioId);
    }

    // USUARIOS
    match /usuarios/{userId} {
      allow read: if estaAutenticado();
      allow create: if estaAutenticado() && esPropietario(userId);
      allow update: if estaAutenticado() && esPropietario(userId);
      allow delete: if estaAutenticado() && esPropietario(userId);
    }

    // PUBLICACIONES
    match /publicaciones/{pubId} {
      allow read: if estaAutenticado() && visibilidadPermitida(resource.data.visibilidad, resource.data.autorId);
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && esPropietario(resource.data.autorId);
      allow delete: if estaAutenticado() && esPropietario(resource.data.autorId);
    }

    // COMENTARIOS (subcolección)
    match /publicaciones/{pubId}/comentarios/{comId} {
      allow read: if estaAutenticado();
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && esPropietario(resource.data.autorId);
      allow delete: if estaAutenticado() && (esPropietario(resource.data.autorId) || esModerador());
    }

    // CONVERSACIONES DE CHAT
    match /conversaciones/{convId} {
      allow read: if estaAutenticado() && resource.data.participantes.hasAny([request.auth.uid]);
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && resource.data.participantes.hasAny([request.auth.uid]);
      allow delete: if estaAutenticado() && resource.data.participantes.hasAny([request.auth.uid]);
    }

    // MENSAJES (subcolección)
    match /conversaciones/{convId}/mensajes/{msgId} {
      allow read: if estaAutenticado() && get(/databases/$(database)/documents/conversaciones/$(convId)).data.participantes.hasAny([request.auth.uid]);
      allow create: if estaAutenticado() && get(/databases/$(database)/documents/conversaciones/$(convId)).data.participantes.hasAny([request.auth.uid]);
      allow update: if estaAutenticado() && esPropietario(resource.data.emisorId);
    }

    // GRUPOS (comunidades)
    match /grupos/{grupoId} {
      allow read: if estaAutenticado();
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && resource.data.administradores.hasAny([request.auth.uid]);
      allow delete: if estaAutenticado() && resource.data.administradores.hasAny([request.auth.uid]);
    }

    // EVENTOS
    match /eventos/{eventoId} {
      allow read: if estaAutenticado();
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && esPropietario(resource.data.organizadorId);
      allow delete: if estaAutenticado() && esPropietario(resource.data.organizadorId);
    }

    // ÁLBUMES
    match /albumes/{albumId} {
      allow read: if estaAutenticado() && visibilidadPermitida(resource.data.visibilidad, resource.data.propietarioId);
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && esPropietario(resource.data.propietarioId);
      allow delete: if estaAutenticado() && esPropietario(resource.data.propietarioId);
    }

    // VIDEOS
    match /videos/{videoId} {
      allow read: if estaAutenticado();
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && esPropietario(resource.data.autorId);
      allow delete: if estaAutenticado() && esPropietario(resource.data.autorId);
    }

    // NOTIFICACIONES
    match /notificaciones/{notifId} {
      allow read: if estaAutenticado() && esPropietario(resource.data.usuarioId);
      allow create: if estaAutenticado();
      allow update: if estaAutenticado() && esPropietario(resource.data.usuarioId);
      allow delete: if estaAutenticado() && esPropietario(resource.data.usuarioId);
    }

    // SOLO MODERADORES (comisión de exalumnos)
    function esModerador() {
      return get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.rol == 'moderador';
    }

    // Los moderadores pueden eliminar contenido inapropiado
    match /{path=**}/reportes/{reporteId} {
      allow read, write: if estaAutenticado() && (esPropietario(resource.data.denuncianteId) || esModerador());
    }
  }
}
```

---

## 13. RECOMENDACIONES FINALES

### Prioridad de implementación (MVP → v1 → v2)

| Fase | Funcionalidades | Tiempo estimado |
|------|----------------|-----------------|
| **MVP** | Registro + verificación + Perfil + Feed básico (solo FB-style publicaciones) + Chat 1:1 | Semanas 1-3 |
| **v1** | Galería de fotos (IG) + Momentos del día + Reels (TT) + Grupos + Eventos | Semanas 4-6 |
| **v2** | Videoteca (YT) + Transmisiones en vivo + Duetos + Llamadas + Nota de voz | Semanas 7-9 |

### Por qué esta propuesta funciona para el target +55

1. **Carga cognitiva reducida**: 5 pestañas claras en la barra inferior. No hay 50 iconos, no hay menús infinitos. Cada función está exactamente donde el usuario espera.

2. **Familiaridad con patrones existentes**: Las burbujas de chat son iguales a WhatsApp que ya conocen. El feed es como Facebook que ya usan. La galería es como Instagram. No tienen que aprender nada nuevo.

3. **Seguridad emocional**: Perfil privado por defecto. Sin ads. Sin algoritmo agresivo. Sin recomendaciones de extraños. Todo el contenido es de personas que conocen.

4. **Usabilidad para no nativos digitales**: Tipografía grande, botones de mínimo 44px, modo alto contraste, asistente de voz, tutoriales en video, botón de ayuda flotante. Sin gestos ocultos, sin menús contextuales.

5. **Una app, no cinco**: No tener que alternar entre 5 aplicaciones. Todo está en un solo lugar con una sola contraseña, un solo perfil, una sola bandeja de notificaciones.

---

*Diseñado con el corazón puesto en cada detalle para que 40 años después, la conexión siga intacta.*
