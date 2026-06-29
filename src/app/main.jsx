import { createRoot } from 'react-dom/client'
import '../index.css'
import App from '@/app/App.jsx'
import MiddleRouter from '../middleware/MiddleRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
createRoot(document.getElementById('root')).render(
  <MiddleRouter>
    <App />
  </MiddleRouter>
)
