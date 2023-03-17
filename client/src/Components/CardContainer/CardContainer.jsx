import Card from '../Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CardContainer({currentProjects}) {

    return (
        <div>
            {currentProjects.map(project => {
                return <Link to={`/projects/${project.id}`}><Card
                    project={project}
                /></Link>
            })}

        </div>
    )
} 