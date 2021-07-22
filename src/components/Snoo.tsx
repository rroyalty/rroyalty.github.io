import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listGrid: {
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            borderColor: theme.palette.light?.main,

        },
        justifyAvatar: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            alignSelf: `center`
        }
    }));

const Snoo: React.FC = (): JSX.Element => {
    const classes = useStyles();
    
    return (
        <Grid
            item
            container
            md={4}
            xs={12}
            direction="column"
            justify="center"
            alignItems="stretch"
             >

            <Grid
                item
                xl={12}>
                <Typography style={{margin: `20px`}} align="center" variant="h4" component="h4" >
                    Reddit
                </Typography>
            </Grid>

            <Grid
                item
                xl={12}
                className={classes.listGrid}
                spacing={2}>
                    <Typography>
                        {/* {recentPost()} */}
                    </Typography>

            </Grid>

        </Grid>
    );
}

export default Snoo