import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
// import { IconButton, Container, Grid, Paper } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core"

import navbarStyles from './navbarStyles'

type navEvent = (buttonClick: any) => void;

interface INavLink {
    title: string;
    path: string;
    navEvent?: navEvent;
}

const navLinks: { title: string, path: string }[] = [
    { title: `Bio`, path: `/bio` },
    { title: `Portfolio`, path: `/portfolio` },
]

const useStyles = makeStyles((theme: Theme) => createStyles({
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
        borderLeftWidth: `2px`,
        borderRightWidth: `2px`,
        borderColor: `#C4AC91`,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
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
    },
    anchorColor: {
        color: `white`
    }
}))

const Navbar: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 600
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

            return (
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar className="nav-style">
                        <h3 className={classes.justifyContent}>{`RYAN ROYALTY`}</h3>
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
                                <a className={classes.iconLinks} href="https://github.com/rroyalty" target="_blank" rel="noreferrer">
                                    <img alt="github" className={classes.iconLinks} src="./images/GitHub-Mark-Light-64px.png" />
                                </a>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <a className={classes.iconLinks} href="https://www.linkedin.com/in/rroyalty/" target="_blank" rel="noreferrer">
                                    <img alt="Linked In" className={classes.iconLinks} src="./images/LinkedIn.png" />
                                </a>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <a className={classes.anchorColor} href="mailto: rroyalty@gmail.com">
                                    <MailIcon className={classes.iconLinks} />
                                </a>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <a className={classes.anchorColor} href="../../images/resume.pdf" download>
                                    <DescriptionIcon className={classes.iconLinks} />
                                </a>
                            </List>
    
                        </section>
                    </Toolbar>
                </AppBar>
            )

        }

        const displayDesktop = () => {
        return (
            <AppBar position="static" className={classes.navbar}>
                <Toolbar className="nav-style">
                    <h3 className={classes.justifyContent}>{`RYAN ROYALTY`}</h3>
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
                            <a className={classes.iconLinks} href="https://github.com/rroyalty" target="_blank" rel="noreferrer">
                                <img alt="github" className={classes.iconLinks} src="./images/GitHub-Mark-Light-64px.png" />
                            </a>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <a className={classes.iconLinks} href="https://www.linkedin.com/in/rroyalty/" target="_blank" rel="noreferrer">
                                <img alt="Linked In" className={classes.iconLinks} src="./images/LinkedIn.png" />
                            </a>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <a className={classes.anchorColor} href="mailto: rroyalty@gmail.com">
                                <MailIcon className={classes.iconLinks} />
                            </a>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            <a className={classes.anchorColor} href="../../images/resume.pdf" download>
                                <DescriptionIcon className={classes.iconLinks} />
                            </a>
                        </List>

                    </section>
                </Toolbar>
            </AppBar>
        )}

        return (
            <div>
                {mobileView ? displayMobile() : displayDesktop()}
            </div>
        )
}

export default withRouter(Navbar)
