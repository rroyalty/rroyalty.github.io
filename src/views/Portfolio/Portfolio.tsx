import React from 'react';
import { withRouter } from 'react-router';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projectList from './projects'

// interface IProps {
//     name: string,
//     description: string,
//     domain: string,
//     github: string,
//     imgSrc: string,
//     icon: string
// }

console.log(projectList)

const Portfolio: React.FC = (): JSX.Element => {
    return (
        <ul>
            {projectList.map(item => (
                <ProjectCard key={item.name} props={item} />
            ))}
        </ul>
    )
}

export default withRouter(Portfolio)