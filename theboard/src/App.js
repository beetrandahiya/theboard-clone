import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import BasicInfo from './basic';
import Booking from './booking';
import Payment from './payment';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BasicInfo />
      <Booking />
      <Payment />
    </div>
  );
}

export default App;
