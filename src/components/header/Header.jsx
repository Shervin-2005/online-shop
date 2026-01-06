import Adv1Img from "../../images/Adv1.png";
import AdvBar from "./AdvBar";
import UserIcon from "../../images/User.svg";
import BellIcon from "../../images/Bell.svg";
import ShopIcon from "../../images/Shop.svg";
import Logo1Img from "../../images/Logo1.png";
import Logo2Img from "../../images/Logo2.png";
import './Header.css'
import Navbar from "./navbar/Navbar";
import StickyNavbar from  "./stickynavbar/StickyNavbar";

function Header()
{
    return(
        <header className="header">  
        <div className="fixed-nav">
        <AdvBar> 
            {<img src={Adv1Img} alt="Adv1"/>}
        </AdvBar>

        <nav className="nav-bar">
            <div className="left-items">
        <Navbar>
            {<img src={ShopIcon} alt="Shop" />}
        </Navbar>
       <span className="divider"></span>
        <Navbar>
            {<img src={UserIcon} alt="User"/>}
        </Navbar>
        <Navbar>
            {<img src={BellIcon} alt="Bell"/>}
        </Navbar>
           </div>
           <div className="right-items">
           <input className="search-bar" type="search" placeholder="Search Something..."></input>
            <Navbar>
            { <img className="logo" src={Logo1Img} alt="logo"></img>}
            </Navbar>
             <Navbar>
            { <img className="logo" src={Logo2Img} alt="logo"></img>}
            </Navbar>
           </div>
        </nav>
        </div>
        <nav className="sticky-navbar">
<StickyNavbar>
<span className="Bar">☰</span>  Products Sort
</StickyNavbar>

<StickyNavbar>
    Amazings
</StickyNavbar>
<StickyNavbar>
    Super Market
</StickyNavbar>

<StickyNavbar>
    Digital Gold
</StickyNavbar>
<StickyNavbar>
    Top Sellers
</StickyNavbar>

<StickyNavbar>
    Any Questions?!
</StickyNavbar>

<StickyNavbar>
    Sell in Twin Shop
</StickyNavbar>

<button className="enter-city">
Pls Select Your City 🗺️
</button>
</nav>
        </header>
    );
}

export default Header;