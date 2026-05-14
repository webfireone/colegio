# AGENTS.md — Base de conocimiento para opencode

## Proyecto: Instituto Inmaculada Concepción — Conectados por Siempre

Red social privada para exalumnos Promoción 1986 (~55-65 años).

---

## Stack principal

- React 19 + TypeScript 6.0 + Vite 8.0
- Tailwind CSS 4.1 (vía @tailwindcss/vite plugin)
- Zustand 5.0 con persist (localStorage)
- TanStack React Query 5.76
- Firebase 11.7 (Auth, Firestore, Storage)
- React Router DOM 7.6
- Framer Motion 12.10
- react-icons 5.5
- date-fns 4.1

## Comandos

```bash
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build
npm run preview    # Preview build
npm run lint       # ESLint
```

## Firebase

- **Proyecto**: `colegio-d5c21`
- **Config** en `src/services/firebase.ts` (ya hardcodeada)
- **Seed script**: `node scripts/seed-firebase.mjs` (requiere `scripts/service-account.json`)
- **Firestore rules**: `firestore.rules`
- **Firestore indexes**: `firestore.indexes.json`

### Usuarios Firebase (13)

Email: `nombre@instituto.edu` · Clave inicial: nombre en minúsculas + `1` si < 6 chars.  
Todos tienen `debeCambiarClave: true`. Lista completa en `src/store/authStore.ts` → `USUARIOS_REALES`.

## Estructura de archivos clave

```
src/
├── types/          # Modelos TypeScript (usuario, publicacion, mensaje, etc.)
├── store/          # Zustand stores (auth, feed, chat, perfil, ui, notificaciones)
├── hooks/          # useAuth, useFeed, useChat, usePerfil, useNotificaciones, useAsistenteVoz
├── services/       # firebase.ts, auth.ts, firestore.ts, storage.ts
├── components/
│   ├── layout/     # Sidebar, BottomBar, Cabecera, Widgets, LayoutPrincipal
│   ├── feed/       # FeedUnificado, PublicacionCard, Reacciones, Comentarios, MomentosDelDia
│   ├── chat/       # ListaChats, Conversacion, Llamadas
│   ├── auth/       # LoginForm, RegistroForm, VerificacionCodigo, PreguntaSeguridad
│   ├── galeria/    # GaleriaGrid
│   ├── video/      # ReelsFeed, Videoteca
│   ├── perfil/     # PerfilView, EditarPerfil
│   └── ui/         # BotonAyuda, ModalGlass, TooltipAyuda, SkeletonLoader
├── pages/          # 13 páginas (Home, Fotos, Videos, Chats, Perfil, Login, etc.)
├── routes/         # AppRouter.tsx
└── utils/          # formatos.ts, validaciones.ts, constantes.ts
scripts/
├── seed-firebase.mjs        # Seed script
└── service-account.json      # Firebase Admin SDK key
```

## Flujo de autenticación

1. `LoginPage` muestra grilla con 13 nombres → `loginConNombre(nombre)`
2. `authStore.login()` intenta Firebase Auth primero, fallback a mock
3. Si `debeCambiarClave === true` → redirige a `/cambiar-clave`
4. `CambiarClavePage` → llama `updatePassword()` en Firebase + actualiza Firestore

## Diseño UX (ver PROPUESTA_DISENO.md)

- **Target**: +55 años, no nativos digitales
- **Paleta**: Azul institucional (#1A2A5E), Celeste (#4A90E2), Dorado (#D4AF37)
- **Tipografía**: Inter (cuerpo, ≥16px), Playfair Display (títulos)
- **Accesibilidad**: modo letra grande, alto contraste, botón de ayuda flotante, asistente de voz
- **Navegación**: 5 pestañas (Inicio, Fotos, Videos, Chat, Perfil), máx 2 clics a cualquier función
- **Mock data**: La app funciona offline completa con datos mock (13 usuarios reales)

## Reglas de edición

- Usar `import type` NO es necesario (`verbatimModuleSyntax: false`)
- Tailwind v4: usar `@import "tailwindcss"` en CSS, NO archivo tailwind.config
- Los stores Zustand usan `persist` middleware con `name: 'auth-storage'`, `'ui-storage'`
- Preferir `use<StoreName>Store((s) => s.prop)` sobre desestructuración directa
- No comentarios en código a menos que sea estrictamente necesario
- Mock data en stores (feedStore, chatStore, perfilStore) y authStore
