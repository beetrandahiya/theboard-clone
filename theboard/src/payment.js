export default function Payment(){
    return(
        <div className="payment segment">
            <h1>Payment Details</h1>
            <div className="payment-content">
                <div className="basic-info-content">
                    <div className="transaction">
                    <h2><span>Payment Breakup</span></h2>
                    <table>
                        <tr><td>Total Room Rent</td><td>7640</td></tr>
                        <tr><td>Total Inclusion Amount</td><td>8500</td></tr>
                        <tr><td>Total Booking Amount</td><td>9000</td></tr>
                        <tr><td>Net Payout</td><td>9000</td></tr>
                        <tr><td>Commission</td><td>9000</td></tr>
                    </table>
                    </div>
                    <div className="transaction">
                    <h2><span>Transaction Summary</span></h2>
                    <table>
                    <tr><td>Amount Recieved</td><td>7640</td></tr>
                        <tr><td>Balance Payable</td><td>8500</td></tr>
                        <tr><td>Payment Mode</td><td>Cash</td></tr>
                        <tr><td>Reference Number</td><td>9000</td></tr>
                        <tr><td>Partial Payment</td><td>9000</td></tr>
                    </table>
                    </div>
                </div>
                <div className="check-in-out">
                <div>
                    <h3>Towno Gross Amount</h3>
                    <p> 6000 </p>
                </div>
                <div>
                    <h3>Profit After Tax</h3>
                    <p>5000</p>
                </div>
            </div>
            </div>
            

        </div>
    );
}