/**
 * Script de seed para Firebase.
 * Crea los 13 usuarios en Firebase Auth + Firestore (colección "colegio").
 *
 * REQUISITOS:
 *   1. Ir a Firebase Console > Ajustes del proyecto > Cuentas de servicio
 *   2. "Generar nueva clave privada" → guardar como scripts/service-account.json
 *   3. Ejecutar: node scripts/seed-firebase.mjs
 *
 * USUARIOS A CREAR:
 *   Email: nombre@instituto.edu
 *   Clave inicial: nombre (minúscula, ej: "claudia")
 *   Primer ingreso: obliga a cambiar la clave
 */

import { initializeApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Cargar service account
let serviceAccount
try {
  serviceAccount = JSON.parse(readFileSync(join(__dirname, 'service-account.json'), 'utf-8'))
} catch {
  console.error('❌ No se encontró scripts/service-account.json')
  console.error('📥 Descárgalo de: Firebase Console > Ajustes > Cuentas de servicio > Generar nueva clave privada')
  process.exit(1)
}

initializeApp({ credential: cert(serviceAccount) })
const auth = getAuth()
const db = getFirestore()

const USUARIOS = [
  { nombre: 'Claudia',  email: 'claudia@instituto.edu',  telefono: '+5491149499858' },
  { nombre: 'Sandro',   email: 'sandro@instituto.edu',   telefono: '+5491141751031' },
  { nombre: 'Edy',      email: 'edy@instituto.edu',      telefono: '+5491161730001' },
  { nombre: 'Fabiana',  email: 'fabiana@instituto.edu',  telefono: '+5491140225506' },
  { nombre: 'Jorge',    email: 'jorge@instituto.edu',    telefono: '+5491153780003' },
  { nombre: 'Laura',    email: 'laura@instituto.edu',    telefono: '+5491167405677' },
  { nombre: 'Mara',     email: 'mara@instituto.edu',     telefono: '+5491141718134' },
  { nombre: 'Mariana',  email: 'mariana@instituto.edu',  telefono: '+5219841149846' },
  { nombre: 'Paula',    email: 'paula@instituto.edu',    telefono: '+5491140606023' },
  { nombre: 'Pocha',    email: 'pocha@instituto.edu',    telefono: '+5491157000916' },
  { nombre: 'Cristian', email: 'cristian@instituto.edu', telefono: '+5491160529765' },
  { nombre: 'Marcelo',  email: 'marcelo@instituto.edu',  telefono: '+5491164567522' },
  { nombre: 'Marito',   email: 'marito@instituto.edu',   telefono: '+5491130190515' },
]

async function seed() {
  console.log(`🚀 Sembrando ${USUARIOS.length} usuarios en Firebase...\n`)

    // Generar lista de IDs de amigos (todos son amigos entre sí)
  const todosLosIds = []

  // Primero crear todos los Auth users
  for (const u of USUARIOS) {
    // Clave = nombre en minúsculas, mínimo 6 caracteres (exigencia Firebase)
    const clave = u.nombre.toLowerCase().padEnd(6, '1')
    try {
      const userRecord = await auth.createUser({
        email: u.email,
        password: clave,
        displayName: u.nombre,
        phoneNumber: u.telefono,
      })
      todosLosIds.push(userRecord.uid)
      console.log(`✅ ${u.nombre.padEnd(10)} → Auth OK`)
    } catch (err) {
      if (err.code === 'auth/email-already-exists') {
        console.log(`⚠️  ${u.nombre.padEnd(10)} → ya existe en Auth, buscando uid...`)
        const userRecord = await auth.getUserByEmail(u.email)
        todosLosIds.push(userRecord.uid)
      } else {
        console.error(`❌ ${u.nombre.padEnd(10)} → ${err.message}`)
      }
    }
  }

  console.log('')

  // Luego crear perfiles en Firestore
  let idx = 0
  for (const u of USUARIOS) {
    const uid = todosLosIds[idx]
    if (!uid) {
      idx++
      continue
    }

    const amigos = todosLosIds.filter((id) => id !== uid)

    const perfil = {
      id: uid,
      email: u.email,
      nombreCompleto: u.nombre,
      telefono: u.telefono,
      anioEgreso: 1986,
      biografia: '',
      fotoPerfil: `https://api.dicebear.com/7.x/avataaars/svg?seed=${u.nombre}`,
      fotoPortada: '',
      ubicacion: {},
      estadoCivil: 'no especifica',
      profesion: '',
      hobbies: [],
      musicaFavorita: '',
      fraseEmblema: '',
      amigos,
      seguidores: [],
      seguidos: [],
      privacidad: 'solo_companieros',
      rol: 'exalumno',
      online: false,
      esConmemorativo: false,
      debeCambiarClave: true,
      ultimoAcceso: null,
      fechaCreacion: Date.now(),
    }

    await db.collection('usuarios').doc(uid).set(perfil)
    console.log(`✅ ${u.nombre.padEnd(10)} → Firestore perfil creado (${amigos.length} amigos)`)
    idx++
  }

  console.log(`\n✨ Seed completado.`)
  console.log(`📧 Email:     nombre@instituto.edu`)
  console.log(`🔑 Clave:     nombre en minúsculas (ej: "claudia")`)
  console.log(`🔄 Primer ingreso: debe cambiar la clave`)
  console.log(`👥 Total:     ${todosLosIds.length} usuarios, todos amigos entre sí`)
}

seed().catch(console.error)
