import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import BasicInfo from './basic';
import Booking from './booking';
//import Payment from './payment';
/*
      <Payment />
*/

function App() {
  return (
    <div className="App">
      <Navbar />
      <BasicInfo />
      <Booking />
    </div>
  );
}

export default App;
