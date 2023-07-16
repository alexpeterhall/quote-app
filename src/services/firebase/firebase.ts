import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref } from 'firebase/database'

const config = { databaseURL: 'https://quotes-20ebd-default-rtdb.firebaseio.com' }

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
