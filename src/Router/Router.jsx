import {BrowserRouter as BRouter, Routes, Route} from 'react-router-dom';

// Import Pages........................
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound/NotFound';

// Import Components...............
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';

export default function Router() {
  return (
    <BRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer/>
    </BRouter>
  );
}
