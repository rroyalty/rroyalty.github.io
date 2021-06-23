import React from 'react';
import { Container, Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bio from '../static/bio.json'

const useStyles = makeStyles((theme: Theme) => createStyles({
    imageDim: {
        width: '100%',
        height: 'auto',
        borderWidth: `2px`,
        borderColor: `#C4AC91`,
        borderStyle: `solid`,
        borderRadius: 16,
        margin: `15px`
    },
    bioText: {
        fontSize: `16
        px`,
        textAlign: `left`,
        padding: "20px",
        borderWidth: `2px`,
        borderColor: `#C4AC91`,
        borderStyle: `solid`,
        borderRadius: 16,
        backgroundColor: `#181D27`,
        color: `#C4AC91`,
        maxHeight: `100vh`,
        margin: `15px`
    },
    grid: {
        margin: `10px`,
        maxheight: `100vh`
    }
}))

const Technical: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <div style={{ height: `70px` }} />
                <Grid item lg={12}>
                    {bio.map(item => (
                        <Typography key={item.index} className={classes.bioText} style={{ whiteSpace: 'pre-line' }} component='p'>

                        </Typography>
                    ))}

                </Grid>
        </Container>
    )
}

export default Technical