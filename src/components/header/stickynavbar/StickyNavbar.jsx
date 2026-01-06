import '../Header.css'


function StickyNavbar(props){
    return(
        <button href="#" className="text-button">
            {props.children}
        </button>
    );
}

export default StickyNavbar