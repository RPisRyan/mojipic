import log from 'loglevel'
import firebase from 'firebase/app'
import 'firebase/analytics'

export let analytics: ReturnType<typeof firebase.analytics>

export function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAyB7RThG_mnYCd0l9lN49X0Y6hfpej1jA",
    authDomain: "mojipic-25a53.firebaseapp.com",
    databaseURL: "https://mojipic-25a53.firebaseio.com",
    projectId: "mojipic-25a53",
    storageBucket: "mojipic-25a53.appspot.com",
    messagingSenderId: "956424422908",
    appId: "1:956424422908:web:e034791848137059bade79",
    measurementId: "G-5P49H0FB2M"
  }

  log.info('Initializing firebase')
  firebase.initializeApp(firebaseConfig)

  log.info('Initializing analytics')
  analytics = firebase.analytics()
}
