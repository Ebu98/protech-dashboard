import LOGO from "../assets/svg/logo.svg"
import HOME from "../assets/svg/home.svg"
import LISTING from "../assets/svg/listing.svg"
import USER from "../assets/svg/user.svg"
import REQUEST from "../assets/svg/article.svg"
import APP from "../assets/svg/application.svg"
import TASK from "../assets/svg/task.svg"
import CALC from "../assets/svg/calculator.svg"
import CALENDER from "../assets/svg/calender.svg"
import MARKET from "../assets/svg/market.svg"
import WALET from "../assets/svg/walet.svg"
import SEARCH from "../assets/svg/searchIcon.svg"


function TopBar() {
    return (
        <>
            <header className="topbar">
                <div className="brand">
                    <span className="brand-icon">
                        <img src={LOGO} alt="logo" />
                    </span>
                    <span className="brand-text">Expert Listing</span>
                </div>



                <div className="top-actions">
                    <button className="icon-btn" title="Calendar"><img src={CALC} alt="home" /></button>
                    <button className="icon-btn" title="Messages"><img src={CALENDER} alt="home" /></button>
                    <button className="icon-btn" title="Notifications"><img src={SEARCH} alt="home" /></button>
                    <button className="icon-btn" title="Notifications"><img src={WALET} alt="home" /></button>
                    <button className="icon-btn" title="Notifications"><img src={MARKET} alt="home" /></button>
                    <button className="avatar">D</button>
                </div>

            </header>
            <nav className="tabs">
                <button className="tab active"><img src={HOME} alt="home" />Dashboard</button>
                <button className="tab" > <img src={LISTING} alt="home" />Listings</button>
                <button className="tab"> <img src={USER} alt="home" />Users</button>
                <button className="tab"><img src={REQUEST} alt="home" />Request</button>
                <button className="tab"><img src={APP} alt="home" />Applications</button>
                <button className="tab"><img src={TASK} alt="home" />Tasks</button>
            </nav>
        </>
    );
}

export default TopBar;