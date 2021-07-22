import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Avatar, Box, Paper, Typography } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import wall from '../static/wallPic.json';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface IPictureItem {
    src: string,
    alt: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            padding: `5px`
        },
        topPadding: {
            paddingTop: `190px`,
        },
        typography: {
            padding: `15px`,
            marginLeft: `10px`,
            marginRight: `10px`,
        },
        avatar: {
            height: `auto`,
            width: `100%`,
            borderColor: theme.palette.dark?.main,
        },
    }));

const Wall: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            md={4}
            xs={12}
            direction="column"
            justify="center"
            alignItems="stretch" >

            <Grid
                item
                xl={12}>
                <Typography style={{ margin: `20px` }} align="center" variant="h4" component="h4" >
                    Wall
                </Typography>
            </Grid>

            <Grid
                item
                xl={12}
                spacing={2}>
                <Zoom>
                    <Carousel animation={"slide"} interval={5000} navButtonsAlwaysInvisible={true}>
                        {wall.map((item: IPictureItem, index: number) =>
                            <Box className={classes.box} key={index}>
                                <Paper elevation={4}>
                                    <Avatar className={classes.avatar} src={item.src} variant={`square`} />
                                </Paper>
                            </Box>)}
                    </Carousel>
                </Zoom>
            </Grid>
        </Grid>
    );
}

export default Wall