import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import HostelContextProvider from './Context/HostelContext.jsx';

createRoot(document.getElementById('root')).render(
  <HostelContextProvider >
    <App />
  </HostelContextProvider>
)
