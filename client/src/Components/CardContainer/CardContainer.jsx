import { project } from '../../Utils/seed';
import Card from '../Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getAllProjects } from '../../Redux/Slicers/projectSlicer'; //se importa el action creator que crea createAsyncThunk

export default function CardContainer() {
    const dispatch = useDispatch();
    const alt = useSelector(state => state.project.AllProjects);
    const altStatus = useSelector (state => state.project.status);

    useEffect(()=>{
        if (altStatus === '') dispatch(getAllProjects());
    }, [altStatus, dispatch])

    return (
        <div>
            {project.map(project => {
                return <Card
                    id={project.id}
                    name={project.name}
                    abstract={project.abstrac}
                    image={project.images}
                />
            })}

        <span>{alt.id}</span>

        </div>
    )
} 