import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDjVY2W0LHzxGENgJjjbeNiclNmudol9TQ',
  authDomain: 'house-marketplace-app-16ada.firebaseapp.com',
  projectId: 'house-marketplace-app-16ada',
  storageBucket: 'house-marketplace-app-16ada.appspot.com',
  messagingSenderId: '543614703742',
  appId: '1:543614703742:web:30e13534a8f5da545a202f',
}

// Initialize Firebase App
initializeApp(firebaseConfig)
export const db = getFirestore()
