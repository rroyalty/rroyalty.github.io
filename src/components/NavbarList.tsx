import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core"

interface iProps {
    classprop: any;
}

const navLinks: { title: string, path: string }[] = [
    { title: `Bio`, path: `bio` },
    { title: `Skills`, path: `technical` },
    { title: `Portfolio`, path: `portfolio` },
]

const useStyles = makeStyles((theme: Theme) => createStyles({
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: theme.palette.bio?.main,
        justifyContent: `center`
    },
    iconLinks: {
        display: `inline-flex`,
        height: `48px`,
        width: `48px`,
    },
    anchorColor: {
        color: `white`
    },
}))


const NavbarList: React.FC<iProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <List component="nav" aria-labelledby="main navigation" className={props.classprop}>
            {navLinks.map(({ title, path }) => (
                <ScrollLink smooth={true} duration={500} to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                        <ListItemText primary={title} />
                    </ListItem>
                </ScrollLink>
            ))}
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <a className={classes.iconLinks} href="https://github.com/rroyalty" target="_blank" rel="noreferrer">
                <img alt="github" className={classes.iconLinks} src="/images/GitHub-Mark-Light-64px.png" />
            </a>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <a className={classes.iconLinks} href="https://www.linkedin.com/in/rroyalty/" target="_blank" rel="noreferrer">
                <img alt="Linked In" className={classes.iconLinks} src="/images/LinkedIn.png" />
            </a>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <a className={classes.anchorColor} href="mailto: rroyalty@gmail.com">
                <MailIcon className={classes.iconLinks} />
            </a>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <a className={classes.anchorColor} href="/images/resume.pdf" download>
                <DescriptionIcon className={classes.iconLinks} />
            </a>
        </List>
    )
}


export default NavbarList
