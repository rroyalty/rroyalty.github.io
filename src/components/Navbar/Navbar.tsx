import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

// import { IconButton, Container, Grid, Paper } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import { AppBar, Toolbar } from "@material-ui/core"

const useStyles = makeStyles({
    navDisplayFlex: {
        display: `inline-flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `#C4AC91`,
        justifyContent: `center`
    },
    navbar: {
        backgroundColor: `#181D27`,
        borderBottomWidth: `2px`,
        borderColor: `#C4AC91`,
        borderStyle: `solid`,
        color: `#C4AC91`,
    },
    iconLinks: {
        display: `inline-flex`,
        height: `48px`,
        width: `48px`,

    },
    rightAppBar: {
        marginLeft: `auto`,
        marginRight: -12,
    },
    justifyContent: {
        display: `flex`,
        // flexDirection: `column`,
        justifyContent: `center`
    }
});

const navLinks: { title: string, path: string }[] = [
    { title: `Bio`, path: `/bio` },
    { title: `Portfolio`, path: `/portfolio` },
    { title: `More`, path: `/more` },
]

const Navbar: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.navbar}>
            <Router>
                <Toolbar className="nav-style">
                <h3 className={classes.justifyContent}>{`Ryan Royalty`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><PhoneIcon />&nbsp;{`(978) 302-9465`}</span><span className="is-hidden-touch">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MailIcon />&nbsp;{`rroyalty@gmail.com`}</span></h3>
                    <section className={classes.rightAppBar}>
                        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navLinks.map(({ title, path }) => (
                                <Link to={path} key={title} className={classes.linkText}>
                                    <ListItem button>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <a className={classes.iconLinks} href="https://github.com/rroyalty" target="_blank">
                                <img className={classes.iconLinks} src="./images/GitHub-Mark-Light-64px.png" />
                            </a>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <a className={classes.iconLinks} href="https://www.linkedin.com/in/rroyalty/" target="_blank">
                                <img className={classes.iconLinks} src="./images/LinkedIn.png" />
                            </a>
                        </List>

                    </section>
                </Toolbar>
            </Router>
        </AppBar>
    )
}

export default Navbar
