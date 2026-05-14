import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDnNowPw4dS1pR2eMO4QAD9-_1QqL0MEqo',
  authDomain: 'colegio-d5c21.firebaseapp.com',
  projectId: 'colegio-d5c21',
  storageBucket: 'colegio-d5c21.firebasestorage.app',
  messagingSenderId: '17640756505',
  appId: '1:17640756505:web:170eb2fcf02f893c9a6188',
  measurementId: 'G-1T0FLNY7RF',
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
