import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterComponent from './Router/Router'
import ContextProvider from './Context/Context';

function App() {

  return (
    <>
    <BrowserRouter>
    <ContextProvider>
      <RouterComponent />
    </ContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
