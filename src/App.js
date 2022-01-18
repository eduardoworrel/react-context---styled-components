
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Count from './pages/Count';
import Home from './pages/Home';
import {ContadorProvider} from './contexts/Contador';
import Menu from './components/Menu';

function App() {
  return (
  <>
  <ContadorProvider>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/count" element={<Count />}/>
    </Routes>
  </ContadorProvider>
  </>
  );
}

export default App;
