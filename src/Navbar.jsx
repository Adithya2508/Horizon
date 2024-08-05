import './Navbar.css';
import logo from './assets/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#alumni">Alumni</a></li>
                <li><a href="#gaallery">Gallery</a></li>
                <li><a href="#contactus">Connect Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;