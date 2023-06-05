import logo from '../assets/imgs/logo.png'

const Header = () => {
    return ( 
        <header>
            <img id="logoImg" src={logo} alt="banana-logo" />
            <div id="title">
                <h1>Banana Bank</h1>
            </div>
        </header>
     );
}
 
export default Header;