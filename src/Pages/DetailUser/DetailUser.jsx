import style from "./DetailUser.module.css"
import { useParams } from "react-router-dom";

export default function DetailUser (){
    
    const { name } = useParams();

    return(
        <div className={style.Prov}>
            <p>Soy DetailUser de {name}</p>
        </div>
    )
}

//Solo el achivo index de Pages recibe este export 