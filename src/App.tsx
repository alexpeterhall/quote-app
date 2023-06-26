import './App.css'
import QuoteList from './components/QuoteList/QuoteList'
import Firebase, { FirebaseContext } from './services/firebase'

const MyFirebase = new Firebase()

function App() {
  return (
    <FirebaseContext.Provider value={MyFirebase}>
      <QuoteList />
    </FirebaseContext.Provider>
  )
}

export default App
