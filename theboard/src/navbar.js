import logo from './logo.svg';

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                </div>
            <div className="navbar-links">
                <a href="#">Home</a>
                <a href="#">Administration</a>
                <a href="#">Booking</a>
                <a href="#">Property</a>
                <a href="#">Profile</a>
                </div>
                
        </div>
    );
}