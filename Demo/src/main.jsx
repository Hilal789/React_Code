import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
//import '../src/components/login/login.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { DataBinding } from './components/login/data-binding.jsx'
import { ObjectData } from './components/login/objectDatabinding.jsx'
import { ReqXML } from './components/XMLHttpRequest/HttpReq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <DataBinding/> */}
    {/* <ObjectData/> */}
    <ReqXML/>
  </StrictMode>,
)
