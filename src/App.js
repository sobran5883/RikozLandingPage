import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './routes/Home.jsx'
// import AboutUs from './routes/'
// import Service from './routes/Home.jsx'
// import Contact from './routes/Home.jsx'
// import Cources from './routes/Home.jsx'

function App() {
  return (
    <BrowserRouter>
         <Routes>
              <Route path='/' element={<Home/>}/>
              {/* <Route path='/' element={<AboutUs/>}/>
              <Route path='/' element={<Service/>}/>
              <Route path='/' element={<Contact/>}/>
              <Route path='/' element={<Cources/>}/> */}
         </Routes>
    </BrowserRouter>
  );
}

export default App;
