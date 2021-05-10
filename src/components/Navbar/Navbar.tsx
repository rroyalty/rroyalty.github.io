import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from 'react-router';

// import { IconButton, Container, Grid, Paper } from "@material-ui/core"
import { List, ListItem, ListItemText } from "@material-ui/core"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

import { AppBar, Toolbar } from "@material-ui/core"

import useStyles from './styles'


const navLinks: { title: string, path: string }[] = [
    { title: `Bio`, path: `/bio` },
    { title: `Portfolio`, path: `/portfolio` },
    { title: `More`, path: `` },
]


const Navbar: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.navbar}>
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
        </AppBar>
    )
}

export default withRouter(Navbar)
