import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, List, ListItem, ListItemText, Typography, IconButton } from "@material-ui/core"
import top5 from '../static/top5.json'
import RefreshIcon from '@material-ui/icons/Refresh';


interface ITop5 {
    title: string,
    one: string,
    two: string,
    three: string,
    four: string,
    five: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            borderColor: theme.palette.light?.main,

        },
        typography1: {
            margin: `20px`,
            flexDirection: `column`,
        },
        justifyAvatar: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            alignSelf: `center`
        },
    }));

const Top5: React.FC = (): JSX.Element => {
    const classes = useStyles();

    // let storedTop5: Array<ITop5> = top5

    // const arrayShuf = (array: Array<ITop5>): Array<ITop5> => {
    //     let j: number = 0;
    //     let temp: ITop5;

    //     for (let i = array.length - 1; i > 0; i--) {
    //       j = Math.floor(Math.random() * (i + 1));
    //       temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }

    //     return array;
    //   }

    const randomTop5 = (): ITop5 => {
        return top5[Math.floor(Math.random() * top5.length)]
    }

    const [state, setState] = useState(randomTop5)

    return (
        <Grid
            item
            container
            md={4}
            xs={12}
            direction="column"
            justify="center"
            alignItems="center" >

            <Grid
                item
                xl={12}>
                <Typography className={classes.typography1} align="center" variant="h4" component="h4" >
                    {`Top 5 ${state.title}`}
                </Typography>
            </Grid>

            <Grid
                item
                xl={12}
                className={classes.root}
                spacing={2}>
                <List>
                    <ListItem>
                        <ListItemText>
                            {`1: ${state.one}`}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {`2: ${state.two}`}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {`3: ${state.three}`}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {`4: ${state.four}`}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {`5: ${state.five}`}
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid 
                item 
                xl={12} >
                <IconButton onClick={() => setState(randomTop5)}>
                    <RefreshIcon style={{width: "50px", height: "50px"}} />
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default Top5