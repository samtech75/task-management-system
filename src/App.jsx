import Contact from './component/Contact';
import Home from './component/Home';
import About from './component/About';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from
  "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path='/' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='admindashboard' element={<AdminDashboard />} />
          <Route>
            <Route></Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </>


  );
}



export default App  