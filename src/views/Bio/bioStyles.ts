import { makeStyles } from '@material-ui/core/styles';

const bioStyles = makeStyles({
    imageDim: {
        width: '100%',
        height: 'auto',
        borderWidth: `2px`,
        borderColor: `#C4AC91`,
        borderStyle: `solid`,
        borderRadius: 16,
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
        maxHeight: `100vh`
    },
});

export default bioStyles