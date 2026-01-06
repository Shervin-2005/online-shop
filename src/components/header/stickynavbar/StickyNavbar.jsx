import '../Header.css'


function StickyNavbar(props){
    return(
        <li className='sticky-nav-number'> 
        <button href="#" className="text-button">
            {props.children}
        </button>
        </li>
    );
}

export default StickyNavbar