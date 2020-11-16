import log from 'loglevel'
import firebase from 'firebase/app'
import 'firebase/analytics'
import { firebaseConfig } from '/firebase-runtime.js'

export let analytics: ReturnType<typeof firebase.analytics>

export function initializeFirebase() {

  log.info('Initializing firebase')
  firebase.initializeApp(firebaseConfig)

  log.info('Initializing analytics')
  analytics = firebase.analytics()
}
