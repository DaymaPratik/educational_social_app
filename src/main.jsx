import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import MainSection from './Components/MainSection/MainSection';
import Cardbox from './Components/Cardsbox/Cardbox';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar/>
   <MainSection/>
   <Cardbox/>
  </React.StrictMode>,
)
