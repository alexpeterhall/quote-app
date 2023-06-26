import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import Firebase, { FirebaseContext } from './services/firebase'

// const MyFirebase = new Firebase()

  const root = createRoot(document.getElementById('root') as Element)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>

)
