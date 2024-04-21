import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Weather from './Weather.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route exact path='/' element={<App/>} />
        <Route exact path='/weather' element={<Weather/>} />
      </Routes>
    </Router>

  </React.StrictMode>,
)
