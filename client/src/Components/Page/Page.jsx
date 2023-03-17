import React, {useEffect, useState} from "react";
import{useDispatch, useSelector} from 'react-redux'

//import de componentes
import CardContainer from "../CardContainer/CardContainer" ;
import Pagination from "../Pagination/Pagination";
import NoResult from "../NoResult/NoResult";
import Filters from "../Filters/Filters";

//import objeto de prueba
import { project } from '../../Utils/seed';

export default  function Page () {

    // futura linea para traer todos los projectos a mostrar
    // const allProjects = useSelector(state => state.gamesToDisplay);

    //logica paginado
    const [currentPage, setcurrentPage] = useState(1);
    const [perPage, setPerPage] = useState (3);
    const final = currentPage * perPage;
    const first = final - perPage;
    const currentProjects = project.slice(first,final);
    const page = (pagNum)=>{setcurrentPage(pagNum)}

    //logica ordenamiento para pasarle al componente filter en que orden filtrar todo;
    const[order, setOrder] = useState ("none");
    const ord = (order) =>{setOrder(order)}


    return(
        <div >
            <div >
                <Filters page={page} ord={ord}/>
            </div>
            <div>
                <Pagination projectsPerPage={perPage} projects={project.length} page={page} currentPage={currentPage}/>
                <div >
                    {project.length ? <CardContainer currentProjects ={currentProjects}/> : <NoResult />}
                </div >
            </div>
        </div>
    )
}

