import { project } from '../../Utils/seed';
import Card from '../Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

export default function CardContainer() {

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

        </div>
    )
} 