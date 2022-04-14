export default function BasicInfo(){
    return(
        <div className="basic-info">
            <h1>Basic Information</h1>
            <div className="basic-info-content">
                <div className="basic-info-client">
                <h2><span>Client Details</span></h2>
                    <table>
                        <tr><td>Name</td><td>:   Botox Eater</td>    </tr>
                        <tr>
                            <td>Address</td><td>:   123 Fake Street, Fake Country</td>
                        </tr>
                        <tr><td>Email</td><td>:   customer@gmail.com</td></tr>
                        <tr><td>Phone</td><td>:   9998884441</td></tr>
                        <tr><td>Vaccinated</td><td>:   Yes</td></tr>
                    </table>
                </div>
                <div className="basic-info-hotel">
                    <h2><span>Hotel Details</span></h2>
                    <table>
                        <tr><td>Name</td><td>:   La Cabana</td></tr>
                        <tr>
                            <td>Address</td><td>:   123 Main Street, Los Angeles, CA</td>
                        </tr>
                        <tr><td>Phone</td><td>:   123-456-7890</td></tr>
                        <tr><td>Email</td><td>:   sabchalega@hotel.com</td></tr>
                        <tr><td>Star Rating</td><td>:   5</td></tr>
                    </table>
                </div>
        </div>
        
        </div>
    );
}