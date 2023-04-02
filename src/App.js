import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Account from './pages/Account.js'
import Home from './pages/Home.js'
import Signin from './pages/Signin.js'
import './App.css';
import { AuthContextProvider } from './context/AuthContext.js';
import Protected from './components/Protected.js'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/signin' element={<Signin />} />
          <Route path ='/account' element={<Protected> <Account /> </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
