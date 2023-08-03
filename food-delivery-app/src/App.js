import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import OrderForm from './Components/OrderForm';
import AddMeals from './Components/AddMeals';
import Delete from './Components/Delete';

function App() {
  return (
    <div className="App">
      <OrderForm/>
      <AddMeals/>
      <Delete/>
      <Home />
      <About/>

      </div>
  )
}
export default App;
