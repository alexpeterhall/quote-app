import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref } from 'firebase/database'

let config: object

if (window.location.hostname === 'localhost') {
  config = { databaseURL: import.meta.env.VITE_DATABASE_URL }
} else {
  config = {
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  }
}

class Firebase implements FirebaseInstance {
  private app
  private database
  constructor() {
    this.app = initializeApp(config)
    this.database = getDatabase(this.app)
  }

  getQuoteList = async (): Promise<QuoteList> => {
    const quoteList = await get(ref(this.database, `quotes`))
      .then((snapshot) => {
        if (snapshot.exists()) return snapshot.val()
        console.log('No data available')
      })
      .catch((error) => {
        console.error(error)
        throw new Error('Error GETTING from Firebase ' + error)
      })
    return quoteList
  }

}

export default Firebase
