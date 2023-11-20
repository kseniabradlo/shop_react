import './App.css';
import Header from "./Components/Header/Header";
import {Route,Routes} from "react-router-dom";
import Main from "./Components/Main/Main";
import Productinfo from "./Components/Main/Card/Productinfo/Productinfo";
import Errorpage from "./Components/Errorpage";
import Contact from "./Components/Contact/Contact";
import Tobacco from "./Components/Tobacco/Tobacco";

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path='/main' element={<Main/>}/>
            <Route path='/moreinfo/:id' element={<Productinfo/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/tobacco' element={<Tobacco/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Routes>
    </>
  );
}

export default App;
