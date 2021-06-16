import React from 'react';
import { withRouter } from 'react-router';
import ProjectCard from '../components/ProjectCard'
import projectList from '../static/projects.json'
import { Grid } from "@material-ui/core"

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
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            {projectList.map(item => (
                <Grid item xs={4}>
                    <ProjectCard key={item.name} props={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default withRouter(Portfolio)