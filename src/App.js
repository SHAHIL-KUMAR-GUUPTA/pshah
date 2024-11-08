import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import An from './Components/An';
function App() {
  return (
 <>
   <BrowserRouter>
     <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path ='/An' element={<An/>} />
     </Routes>
  </BrowserRouter>
  
 </>
  );
}

export default App;
