import './App.css'
import './index.css'
import QuoteList from './components/QuoteList/QuoteList'
import FirebaseProvider from './services/firebase/FirebaseProvider'

export const createApp = () => {
  return (
    <FirebaseProvider>
      <QuoteList />
    </FirebaseProvider>
  )
}
