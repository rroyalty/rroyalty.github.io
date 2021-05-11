import React from 'react';
import { withRouter } from 'react-router';
import projectList from './projects'


const Portfolio: React.FC = (): JSX.Element => {

    console.log(projectList)

    return (
        <div style={{color: `white`}}>PORTFOLIO!</div>
    )
}

export default withRouter(Portfolio)