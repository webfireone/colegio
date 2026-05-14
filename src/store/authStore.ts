import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Usuario, UsuarioFormData } from '../types'
import { signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth } from '../services/auth'
import { db } from '../services/firestore'

interface AuthState {
  usuario: Usuario | null
  estaAutenticado: boolean
  debeCambiarClave: boolean
  cargando: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  loginConNombre: (nombre: string) => Promise<void>
  registro: (data: UsuarioFormData & { email: string; password: string }) => Promise<void>
  cambiarClave: (nuevaClave: string) => Promise<void>
  logout: () => void
  actualizarPerfil: (data: UsuarioFormData) => void
  limpiarError: () => void
}

// Mapa nombre -> datos de usuario mock
const USUARIOS_REALES: Record<string, { nombre: string; email: string; telefono: string }> = {
  claudia: { nombre: 'Claudia', email: 'claudia@instituto.edu', telefono: '+5491149499858' },
  sandro: { nombre: 'Sandro', email: 'sandro@instituto.edu', telefono: '+5491141751031' },
  edy: { nombre: 'Edy', email: 'edy@instituto.edu', telefono: '+5491161730001' },
  fabiana: { nombre: 'Fabiana', email: 'fabiana@instituto.edu', telefono: '+5491140225506' },
  jorge: { nombre: 'Jorge', email: 'jorge@instituto.edu', telefono: '+5491153780003' },
  laura: { nombre: 'Laura', email: 'laura@instituto.edu', telefono: '+5491167405677' },
  mara: { nombre: 'Mara', email: 'mara@instituto.edu', telefono: '+5491141718134' },
  mariana: { nombre: 'Mariana', email: 'mariana@instituto.edu', telefono: '+5219841149846' },
  paula: { nombre: 'Paula', email: 'paula@instituto.edu', telefono: '+5491140606023' },
  pocha: { nombre: 'Pocha', email: 'pocha@instituto.edu', telefono: '+5491157000916' },
  cristian: { nombre: 'Cristian', email: 'cristian@instituto.edu', telefono: '+5491160529765' },
  marcelo: { nombre: 'Marcelo', email: 'marcelo@instituto.edu', telefono: '+5491164567522' },
  marito: { nombre: 'Marito', email: 'marito@instituto.edu', telefono: '+5491130190515' },
}

export { USUARIOS_REALES }

function crearUsuarioMock(nombreLower: string, userData: { nombre: string; email: string; telefono: string }): Usuario {
  return {
    id: `user-${nombreLower}`,
    email: userData.email,
    nombreCompleto: userData.nombre,
    telefono: userData.telefono,
    anioEgreso: 1986,
    biografia: '',
    fotoPerfil: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.nombre}`,
    fotoPortada: '',
    ubicacion: {},
    estadoCivil: 'no especifica',
    profesion: '',
    hobbies: [],
    musicaFavorita: '',
    fraseEmblema: '',
    amigos: Object.keys(USUARIOS_REALES).filter((k) => k !== nombreLower).map((k) => `user-${k}`),
    seguidores: [],
    seguidos: [],
    privacidad: 'solo_companieros',
    rol: 'exalumno',
    online: true,
    esConmemorativo: false,
    fechaCreacion: Date.now(),
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      usuario: null,
      estaAutenticado: false,
      debeCambiarClave: false,
      cargando: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ cargando: true, error: null })
        try {
          let usuario: Usuario
          let claveDebeCambiar = true

          // 1. Intentar Firebase Auth
          try {
            const cred = await signInWithEmailAndPassword(auth, email, password)
            const firebaseUid = cred.user.uid

            // 2. Intentar cargar perfil desde Firestore
            const docSnap = await getDoc(doc(db, 'usuarios', firebaseUid))
            if (docSnap.exists()) {
              const data = docSnap.data() as Usuario
              usuario = { ...data, online: true }
              claveDebeCambiar = data.debeCambiarClave ?? true
            } else {
              // Perfil no encontrado en Firestore, crear desde mock
              const nombreLower = email.split('@')[0].toLowerCase()
              const userData = USUARIOS_REALES[nombreLower]
              if (!userData) throw new Error('Usuario no registrado en la base de datos')
              usuario = crearUsuarioMock(nombreLower, userData)
              usuario.id = firebaseUid
              await setDoc(doc(db, 'usuarios', firebaseUid), usuario)
            }
          } catch (fbErr: any) {
            // Firebase falló → fallback a mock
            if (fbErr.code !== 'auth/invalid-credential' && fbErr.code !== 'auth/user-not-found') {
              throw fbErr
            }
            const nombreLower = email.split('@')[0].toLowerCase()
            const userData = USUARIOS_REALES[nombreLower]
            const claveMock = nombreLower.padEnd(6, '1')
            if (!userData || password !== claveMock) {
              throw new Error('Usuario o contraseña incorrectos')
            }
            usuario = crearUsuarioMock(nombreLower, userData)
          }

          set({
            usuario,
            estaAutenticado: true,
            debeCambiarClave: claveDebeCambiar,
            cargando: false,
          })
        } catch (err: any) {
          set({ error: err.message, cargando: false })
        }
      },

      loginConNombre: async (nombre: string) => {
        const userData = USUARIOS_REALES[nombre.toLowerCase()]
        if (!userData) {
          set({ error: 'Usuario no encontrado' })
          return
        }
        const clave = nombre.toLowerCase().padEnd(6, '1')
        return get().login(userData.email, clave)
      },

      registro: async (data) => {
        set({ cargando: true, error: null })
        try {
          const newUser: Usuario = {
            id: `user-${Date.now()}`,
            email: data.email,
            nombreCompleto: data.nombreCompleto,
            apellidoSoltera: data.apellidoSoltera,
            anioEgreso: data.anioEgreso ?? 1986,
            biografia: data.biografia,
            fotoPerfil: data.fotoPerfil ?? `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.nombreCompleto}`,
            fotoPortada: data.fotoPortada,
            ubicacion: data.ubicacion,
            estadoCivil: data.estadoCivil,
            profesion: data.profesion,
            hobbies: data.hobbies,
            musicaFavorita: data.musicaFavorita,
            fraseEmblema: data.fraseEmblema,
            amigos: [],
            seguidores: [],
            seguidos: [],
            privacidad: data.privacidad ?? 'solo_companieros',
            rol: 'exalumno',
            online: true,
            esConmemorativo: false,
            fechaCreacion: Date.now(),
          }
          set({ usuario: newUser, estaAutenticado: true, debeCambiarClave: false, cargando: false })
        } catch {
          set({ error: 'Error al registrarse', cargando: false })
        }
      },

      cambiarClave: async (_nuevaClave: string) => {
        set({ cargando: true })
        try {
          const user = auth.currentUser
          if (user) {
            await updatePassword(user, _nuevaClave)
            // Actualizar Firestore: quitar flag debeCambiarClave
            const ref = doc(db, 'usuarios', user.uid)
            await setDoc(ref, { debeCambiarClave: false }, { merge: true })
          }
          // Mock: solo esperar
          await new Promise((r) => setTimeout(r, 500))
          set({ debeCambiarClave: false, cargando: false })
        } catch {
          // Fallback mock
          await new Promise((r) => setTimeout(r, 500))
          set({ debeCambiarClave: false, cargando: false })
        }
      },

      logout: () => {
        signOut(auth).catch(() => {})
        set({
          usuario: null,
          estaAutenticado: false,
          debeCambiarClave: false,
        })
      },

      actualizarPerfil: (data) => {
        const usuario = get().usuario
        if (!usuario) return
        set({ usuario: { ...usuario, ...data } })
      },

      limpiarError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        usuario: state.usuario,
        estaAutenticado: state.estaAutenticado,
        debeCambiarClave: state.debeCambiarClave,
      }),
    }
  )
)
