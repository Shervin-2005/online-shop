import BackImg from "../../images/back.jpg";
import './body.css'


function Body() {
 return(
        <div>
            {<img className="back-image" src={BackImg} alt="back"/>}
            {<img className="back-image" src={BackImg} alt="back"/>}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea cumque. Obcaecati, architecto recusandae omnis numquam vitae aspernatur assumenda vero, laudantium sunt beatae aliquid delectus, eius porro ipsum nobis asperiores distinctio quo quas illo. Architecto velit ullam quas? Saepe eveniet illo nihil dolorem voluptatem, dolore provident? Placeat repellat hic laudantium.0</p>
        </div>
 );   
}

export default Body