export default function Booking(){
    return(
        <div className="booking segment">
            <h1>Booking Information</h1>
            <div className="booking-content">
                <div className="check-in-out">
                    <div>
                        <h3>Check In</h3>
                        <p>26/05/2020</p>
                    </div>
                    <div>
                        <h3>No. of Nights </h3>
                        <p> 4 </p>
                    </div>
                    <div >
                        <h3>Check Out</h3>
                        <p>30/05/2020</p>
                    </div>
                </div>
                <div className="room">
                    <h2>Room Details</h2>
                    <div>
                    <table>
                        <tr> <td>Room Type</td><td>Standard</td></tr>
                        <tr> <td>Number of  Rooms</td><td>1</td></tr>
                        <tr> <td>No. of Adults</td><td>2</td></tr>
                        <tr> <td>No. of Children</td><td>1</td></tr>
                    </table>
                    <table>
                        <tr> <td>Meal Plan</td><td>CP</td></tr>
                        <tr> <td>Room Selling Price</td><td>7640</td></tr>
                        <tr> <td>Net to Hotel/night</td><td>8500</td></tr>
                        <tr> <td>Net to Hotel Total</td><td>9000</td></tr>
                    </table>
                    </div>
                </div>
                <div className="check-in-out">
                    <div>
                        <h3>Inclusion</h3>
                        <p>Inclusion Name</p>
                    </div>
                    <div>
                        <h3>Inclusion Selling Price </h3>
                        <p> 7000 </p>
                    </div>
                    <div >
                        <h3>Net to Vendor</h3>
                        <p>4947</p>
                    </div>
                </div>
            </div>
        </div>
    );
}   