import '../Header.css'

function Navbar(props){
    return(
         <a href="#" className="icon-Button">
            {props.children}
        </a>
    );
}
export default Navbar;