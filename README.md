# 🏫 Instituto Inmaculada Concepción — Conectados por Siempre

Red social privada para exalumnos de la Promoción 1986. Integra lo mejor de Facebook, Instagram, TikTok, YouTube y WhatsApp en una sola app nostálgica, accesible y emocionalmente significativa.

---

## Stack

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19 | UI |
| TypeScript | 6.0 | Tipado |
| Vite | 8.0 | Build |
| Tailwind CSS | 4.1 | Estilos |
| Zustand | 5.0 | Estado global (persistido en localStorage) |
| TanStack Query | 5.76 | Fetch/caché |
| Firebase | 11.7 | Auth + Firestore + Storage |
| Framer Motion | 12.10 | Animaciones |
| Lenis | 1.2 | Scroll suave |
| React Router | 7.6 | Ruteo |
| React Icons | 5.5 | Iconografía |
| date-fns | 4.1 | Fechas |

---

## Requisitos

- Node.js 18+
- npm 9+
- [Opcional] Proyecto Firebase con Authentication y Firestore habilitados

---

## Instalación

```bash
git clone <repo>
cd colegio
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre en http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

---

## Firebase (opcional — la app funciona offline con datos mock)

### 1. Configurar Firebase

El archivo `src/services/firebase.ts` ya tiene las credenciales del proyecto **colegio-d5c21**.

### 2. Seed de usuarios (13 exalumnos)

```bash
# 1. Descargar service account:
#    Firebase Console > Ajustes > Cuentas de servicio > Generar nueva clave privada
# 2. Guardar como scripts/service-account.json
# 3. Ejecutar:
node scripts/seed-firebase.mjs
```

Esto crea:

| Usuario | Email | Clave inicial |
|---------|-------|---------------|
| Claudia | claudia@instituto.edu | claudia1 |
| Sandro | sandro@instituto.edu | sandro1 |
| Edy | edy@instituto.edu | edy111 |
| Fabiana | fabiana@instituto.edu | fabiana1 |
| Jorge | jorge@instituto.edu | jorge1 |
| Laura | laura@instituto.edu | laura1 |
| Mara | mara@instituto.edu | mara11 |
| Mariana | mariana@instituto.edu | mariana1 |
| Paula | paula@instituto.edu | paula1 |
| Pocha | pocha@instituto.edu | pocha1 |
| Cristian | cristian@instituto.edu | cristian1 |
| Marcelo | marcelo@instituto.edu | marcelo1 |
| Marito | marito@instituto.edu | marito1 |

**Nota**: Todos tienen `debeCambiarClave: true` — al primer ingreso se les exige cambiar la contraseña.

---

## Estructura del proyecto

```
colegio/
├── public/                     # Assets estáticos
├── scripts/
│   ├── seed-firebase.mjs       # Seed de Firebase Auth + Firestore
│   └── service-account.json    # Clave de servicio Firebase Admin
├── src/
│   ├── components/
│   │   ├── auth/               # Login, Registro, Verificación
│   │   ├── busqueda/           # Buscador global
│   │   ├── chat/               # Conversación, ListaChats, Llamadas
│   │   ├── evento/             # Calendario de eventos
│   │   ├── feed/               # Feed unificado, PublicacionCard, Reacciones, Comentarios
│   │   ├── galeria/            # Grid de fotos, filtros de época
│   │   ├── grupo/              # Comunidades
│   │   ├── layout/             # Sidebar, BottomBar, Cabecera, Widgets, LayoutPrincipal
│   │   ├── notificaciones/     # Centro de notificaciones
│   │   ├── perfil/             # PerfilView, EditarPerfil
│   │   ├── ui/                 # BotonAyuda, ModalGlass, TooltipAyuda, SkeletonLoader
│   │   └── video/              # ReelsFeed, Videoteca
│   ├── hooks/                  # useAuth, useFeed, useChat, usePerfil, etc.
│   ├── pages/                  # 13 páginas con ruteo completo
│   ├── routes/                 # AppRouter
│   ├── services/               # Firebase (auth, firestore, storage)
│   ├── store/                  # Zustand stores (auth, feed, chat, perfil, ui, notificaciones)
│   ├── types/                  # Modelos TypeScript (usuario, publicacion, mensaje, etc.)
│   └── utils/                  # formatos, validaciones, constantes
├── firestore.rules             # Reglas de seguridad Firestore
├── firestore.indexes.json      # Índices compuestos
└── PROPUESTA_DISENO.md         # Documento de diseño UX/UI
```

---

## Arquitectura de navegación

### Desktop
```
┌─────────────────────────────────────────────────────┐
│  Cabecera: Buscador + Notificaciones + Avatar       │
├──────────┬──────────────────────────┬────────────────┤
│ Sidebar  │  FEED CENTRAL            │  Widgets       │
│ 🏠 Inicio│  [Momentos del día]      │  📅 Eventos    │
│ 📸 Fotos │  [Publicaciones]         │  🎂 Cumpleaños │
│ 🎬 Videos│  Scroll infinito         │  👥 Conectados │
│ 💬 Chats │                          │                │
│ 👤 Perfil│                          │                │
└──────────┴──────────────────────────┴────────────────┘
```

### Mobile
Barra inferior fija: 🏠 📸 🎬 💬 👤

---

## Plataformas integradas

| Plataforma | Función en la app |
|------------|-------------------|
| 📘 Facebook | Feed de publicaciones, eventos, grupos, páginas de recuerdo |
| 📸 Instagram | Galería masonry, filtros de época, Momentos del día |
| 🎬 TikTok | Reels verticales, duetos, tendencias |
| 📺 YouTube | Videoteca, videos largos, playlists colaborativas |
| 💬 WhatsApp | Chat 1:1 y grupal, notas de voz, llamadas, videollamadas |

---

## Accesibilidad (+55 años)

- Modo **Letra Grande** (toggle en cabecera)
- Modo **Alto Contraste** (toggle en cabecera)
- Botón de **ayuda flotante** ❓
- **Tutoriales** guiados
- **Asistente de voz** (Web Speech API)
- Targets táctiles ≥ 44×44px
- Navegación 100% por teclado
- Foco visible con anillo de 3px

---

## Paleta de colores

| Color | HEX | Uso |
|-------|-----|-----|
| Azul institucional | `#1A2A5E` | Headers, navegación, botones |
| Celeste conexión | `#4A90E2` | Links, acentos interactivos |
| Dorado recuerdos | `#D4AF37` | Fechas especiales, badges |
| Blanco puro | `#FFFFFF` | Fondos, tarjetas |
| Crema | `#F5F0E8` | Fondos alternos |
| Verde WhatsApp | `#25D366` | Burbujas de chat |
| Rojo YouTube | `#FF0000` | Videoteca |
| Rosa Instagram | `#E4405F` | Galería |

---

## Comandos útiles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build producción
npm run preview   # Preview del build
npm run lint      # Linter
node scripts/seed-firebase.mjs   # Seed Firebase
```

---

## Despliegue

La app es completamente estática (SPA). El build genera la carpeta `dist/` que se puede desplegar en:

- **Vercel**: conectar repo, framework preset Vite
- **Render**: Static Site, build command `npm run build`, publish dir `dist`
- **Firebase Hosting**: `firebase deploy --only hosting`

---
