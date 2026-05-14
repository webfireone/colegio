import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { app } from './firebase'

export const auth = getAuth(app)

export const loginConEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const registroConEmail = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const cerrarSesion = async () => {
  return signOut(auth)
}
