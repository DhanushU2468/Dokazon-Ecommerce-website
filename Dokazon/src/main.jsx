import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <ToastContainer autoClose={1500}/> 
    {/* ToastContainer is used to display toast notifications for good UI popups 
     autocloe is used to reduce the time of popups
    */}
  </BrowserRouter>,
)
