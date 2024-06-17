import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/board/List';
import Read from './pages/board/Read';
import Insert from './pages/board/Insert';
import Update from './pages/board/Update';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/boards" element={ <List/> }></Route>
        <Route path="/boards/:no" element={ <Read/> }></Route>
        <Route path="/boards/InsertForm" element={ <Insert/> }></Route>
        <Route path="/boards/update/:no" element={ <Update/> }></Route>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
