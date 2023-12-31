import { ReactNode, createContext } from 'react'
import Firebase from './firebase'

export const FirebaseContext = createContext<FirebaseInstance | null>(null)

function FirebaseProvider({ children }: { children: ReactNode }) {
  return <FirebaseContext.Provider value={new Firebase()}>{children}</FirebaseContext.Provider>
}

export default FirebaseProvider
