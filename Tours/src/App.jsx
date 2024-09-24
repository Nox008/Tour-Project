
import Cards from './components/cards';
import NavB from './components/navbar';
import Footer from './components/BFooter';
import Slider from './components/slider';
import {Routes,Route} from 'react-router-dom'
import About from './components/aboutpg';
import HomePage from './components/homepg';
import LoginPage from './components/login';

function App() {
  

  return (
    <>
    <div id='root'>
    <NavB />
    <div className="content">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </div>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
