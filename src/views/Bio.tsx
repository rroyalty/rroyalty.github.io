import React from 'react';
import { withRouter } from 'react-router';

import { Container, Paper, Grid } from "@material-ui/core"

const Bio: React.FC = (): JSX.Element => {
    return (
        <Container maxWidth='lg'>
            <div style={{height: `70px`}} />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper>xs=6</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper>xs=6</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(Bio)