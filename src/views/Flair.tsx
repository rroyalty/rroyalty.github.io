import React from 'react';
import { Typography, Grid } from "@material-ui/core"
import Top5 from '../components/Top5';
import Wall from '../components/Wall';


const Flair: React.FC = (): JSX.Element => {

    return (
        <>
            <Typography align="center" variant="h2">
                FLAIR
            </Typography>

            <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="center"
                spacing={3}>
                    <Top5 />
                    <Wall />
            </Grid>
        </>
    )
}

export default Flair