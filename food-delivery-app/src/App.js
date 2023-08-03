import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import OrderForm from './Components/OrderForm';
import AddMeals from './Components/AddMeals';
import DeleteMeals from "./Components/Delete";
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}/> 
        <Route path="/about" element= {<About/>}/>
        <Route path="/order" element= {<OrderForm />}/>
        <Route path="/add" element={<AddMeals />}/> 
        <Route path="/delete" element={<DeleteMeals />}> </Route>
      </Routes>
      

      </div>
  )
}
export default App;
