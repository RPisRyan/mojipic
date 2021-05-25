import log from 'loglevel'
import firebase from 'firebase/app'
import 'firebase/analytics'

export let analytics: ReturnType<typeof firebase.analytics> = {
  logEvent: () => {},
} as any

export async function initializeFirebase() {
  try {
    // @ts-ignore
    const { firebaseConfig } = await import('/firebase-config')

    if (firebaseConfig) {
      log.info('Initializing firebase')
      firebase.initializeApp(firebaseConfig)

      log.info('Initializing analytics')
      analytics = firebase.analytics()
    }
  } catch {}
}
