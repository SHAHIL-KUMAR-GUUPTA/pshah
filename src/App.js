import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Chatbot from './Components/Chatbot';
 
function App() {
  return (
 <>
   <BrowserRouter>
     <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path='/Chatbot' element={<Chatbot/>}/>
     </Routes>
  </BrowserRouter>
  
 </>
  );
}

export default App;
