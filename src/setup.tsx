import './App.css'
import './index.css'
import QuoteList from './components/QuoteList/QuoteList.tsx'
import Firebase, { FirebaseContext } from './services/firebase/index.ts'

export const MyFirebase = new Firebase()

export const createApp = () => {
  return (
    <FirebaseContext.Provider value={MyFirebase}>
      <QuoteList />
    </FirebaseContext.Provider>
  )
}
