import './Header.css'

function AdvBar(props){
    return(
    <div className="adv-bar"> 
           {props.children}
    </div>
    );
}

export default AdvBar