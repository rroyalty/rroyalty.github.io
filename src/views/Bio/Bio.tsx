import React from 'react';
import { withRouter } from 'react-router';
import bioStyles from './bioStyles';
import { Container, Paper, Grid } from "@material-ui/core"

const Bio: React.FC = (): JSX.Element => {
    const classes = bioStyles();

    return (
        <Container maxWidth='lg'>
            <div style={{ height: `70px` }} />
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img className={classes.imageDim} src='../images/weddingPic.jpg' />
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.bioText}>
                        <p>{`Through my work at Foresight and/or with the FileMaker platform, I have developed proficiences in PowerQuery, VBA, SQL, and JSON. Through the Coding Bootcamp course I am currently taking, I've developed proficiences in HTML, CSS, and JavaScipt. I look forward to taking my coding and career to the next level.\n\n`}</p>
                        <p>I attended UMass Amherst from 2003 to 2008, where I earned a B.S. in Mathematics and studied to be a high school teacher. After two years of teaching, I decided that the profession was not a good fit for me and I moved onto other things; I worked as a server and bartender at Chili's in Hadley, MA for a few years, after which I moved to Boston and took a job as a dog walker and petsitter. In addition, I spent my Summers working as a wilderness trip leader and outdoor education director at Birch Rock Summer Camp in Waterford, ME. While in Boston, I was fortunate to meet my wife, Samantha; who loves dogs as much as I do.</p>
                        <p>I took two significant breaks throughout all this, once in 2013 when I successfully thru-hiked the Appalachian Trail, and again in 2016, when I attempted to hike the Pacific Crest Trail but was forced to abandon the trip after 500 miles due to a medical emergency on the East coast. Hopefully I'll have a chance to give it another go someday.</p>
                        <p>Now, I reside in Nottingham, NH with Sam and our two dogs, Franconia and Tuckerman. I am in the process of taking UNH's Coding Bootcamp course, where I am learning new professional skills in the hopes of advancing my professional career as a FUll Stack Developer.</p>
                        <p>In my free time I enjoy backpacking, hiking, canoeing, video games, board games, spending time with my dogs, practicing Uechi Ryu Karate (in which I have a 2nd degree blackbelt,) and visiting new breweries. Also, I love Calvin and Hobbes.</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(Bio)