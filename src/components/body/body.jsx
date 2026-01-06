import BackImg from "../../images/back.jpg";
import './body.css'
import { SlideShow } from "./SlideShow.jsx";
import { slides } from '../../data/slideImagesData.json'
function Body() {
    return (
        <div className="body">
            <SlideShow data={slides} />
        </div>
    );
}

export default Body