import { Link } from 'react-router-dom';
import './styles.css';


type Props = {

    text : string;
 }


export default function ButtonInverse({text} : Props) {
    return (
        <div className="dsc-btn dsc-btn-white">
            {text}
        </div>
    );
}
