import React from 'react';
import { Typography, Grid } from "@material-ui/core"
import Top5 from '../components/Top5';
import Wall from '../components/Wall';
import Snoo from '../components/Snoo';


const Flair: React.FC = (): JSX.Element => {

    // I once made a joke that I love ternary operators so much that I put them in my code even if I don't need them, and, well, here we are.
    const iHeartTernaries = () => {
        2 + 2 === 4 ? console.log("All is well.") : console.log("The clocks were striking thirteen.")
    }; 

    iHeartTernaries();

    return (
        <>
            <Typography align="center" variant="h2">
                FLAIR
            </Typography>

            <Grid
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="center"
                spacing={3}>
                    <Top5 />
                    <Wall />
                    <Snoo />
            </Grid>
        </>
    )
}

export default Flair