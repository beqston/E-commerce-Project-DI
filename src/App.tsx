import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterComponent from './Router/Router'

function App() {

  return (
    <>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
    </>
  )
}

export default App;
