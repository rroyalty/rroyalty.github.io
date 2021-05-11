import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
// import { IconButton, Container, Grid, Paper } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';

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

const Navbar: React.FC = (): JSX.Element => {
    const classes = navbarStyles();
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

export default withRouter(Navbar)
