import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterComponent from './Router/Router'
import CartContextProvider from './Context/Context';

function App() {

  return (
    <>
    <BrowserRouter>
    <CartContextProvider>
      <RouterComponent />
    </CartContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
