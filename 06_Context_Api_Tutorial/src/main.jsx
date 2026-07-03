import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from "./context/UserContext.jsx";
import IdContext from "./context/IdContext.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IdContext>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </IdContext>
  </StrictMode>
)
