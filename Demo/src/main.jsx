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
import { Fetch } from './components/FetchPromise/Fetch.jsx'
import { AxiosFetch } from './components/AxiosFetch/axios.jsx'
import { FakeStore } from './components/FakeStore/fakestore.jsx'
import { Nasa } from './components/NASA_API/nasa.jsx'
import { Pokemon } from './components/PokemonAPI/pokemon.jsx'
import { StyleDemo } from './components/CSS-Animation/style-demo.jsx'
import { EventDemo } from './components/EventDemo-Class/event-demo.jsx'
import { EventDemo2 } from './components/EventDemo-Class/event-demo2.jsx'
import { EMICalculator } from './components/StateEvents/emi-calculator.jsx' 


createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <DataBinding/> */}
    {/* <ObjectData/> */}
    {/* <ReqXML/> */}
    {/* <Fetch/> */}
  {/* <AxiosFetch/> */}
  {/* <FakeStore/> */}
  {/* <Nasa/> */}
  {/* <Pokemon/> */}
  {/* <StyleDemo/> */}
  {/* <EventDemo/> */}
  {/* <EventDemo2/> */}
  <EMICalculator/>  
  </>
  
)
