import Page from "../../Components/Page/Page"
import{ useSelector} from 'react-redux';

export default function Projects (){
    const allProjects = useSelector(state => state.project.ProjectsToDisplay);

    return(
        <div>
            <Page projects = {allProjects}/>
        </div>
    )
}

//Solo el achivo index de Pages recibe este export 