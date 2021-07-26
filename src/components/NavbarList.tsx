import React, {SetStateAction, Dispatch} from 'react';
import { Link as ScrollLink } from "react-scroll";
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core"

interface iProps {
    classProp: any;
    componentState: string;
    stateFunction: Dispatch<SetStateAction<string>>
}

const navLinks: { title: string, path: string }[] = [
    { title: `Skillset`, path: `technical` },
    { title: `Projects`, path: `portfolio` },
    { title: `Flair`, path: `flair` }
]

const useStyles = makeStyles((theme: Theme) => createStyles({
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`
    },
    iconLinks: {
        display: `inline-flex`,
        height: `48px`,
        width: `48px`,
    },
    anchorColor: {
        color: `white`
    },        
    buttonBorder: {
        textDecoration: `underline!important`,
        textUnderlineOffset: `5px!important`
    }
}))


const NavbarList: React.FC<iProps> = (props): JSX.Element => {
    const classes = useStyles();
    return (
        <List component="nav" aria-labelledby="main navigation" className={props.classProp}>
            {navLinks.map((item, index: number) => (
                <ScrollLink smooth={true} duration={500} to={item.path} key={index} className={classes.linkText}>
                    <ListItem button className={item.path === props.componentState ? classes.buttonBorder : "" }>
                        <ListItemText primary={item.title} />
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
            <a className={classes.iconLinks} href="https://www.reddit.com/user/rroyaltywebdev" target="_blank" rel="noreferrer">
                <img alt="Reddit" className={classes.iconLinks} src="https://image.flaticon.com/icons/png/512/1384/1384019.png" />
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
