import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';

import { DisplayData } from './components/HttpRequest/MacBookM4'
import Home from './components/HttpRequest/Doctor/doctor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DisplayData/> */}
    <Home/>
  </StrictMode>,
)
