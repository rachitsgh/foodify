import { LOGO_URL } from "../../utils/constants";

const Header = ()=>(
    <div className="header">
        <div className="LogoContainer">
            <img className="Logo" src={LOGO_URL }></img>
        </div>
        <div className="NavItems">
            <ul>
                <li>Home</li>
                <li>contact</li>
                <li>About</li>
                <li>cart</li>
                <li>Sign in</li>
            </ul>
        </div>
    </div>
);

export default Header;