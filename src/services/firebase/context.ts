import { createContext } from 'react'

const FirebaseContext = createContext<MyFirebase | null>(null)

export default FirebaseContext
