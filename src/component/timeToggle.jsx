export function TimeToggle() {
    return (
        <div className="time-container">
            <div>
                <button className="primary">View Transactions</button>
            </div>
            <div className="time-toggle">
                <button className="ghost">1 Week</button>
                <button className="ghost">1 Month</button>
                <button className="ghost">1 Year</button>
            </div>

        </div>
    );
}