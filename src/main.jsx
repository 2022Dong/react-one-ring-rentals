import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Importing Bootstrap CSS files
import './assets/css/bootstrap.css';
import './assets/css/bootstrap.min.css';

// Importing FontAwesome CSS files
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';

// Importing custom styles
import './assets/css/font.css';
import './assets/css/owl.transitions.css';
import './assets/css/style.css';
import './assets/css/style.less';  // npm install less less-loader

// Import Bootstrap Datepicker (if needed)
import './assets/css/bootstrap-datepicker.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
