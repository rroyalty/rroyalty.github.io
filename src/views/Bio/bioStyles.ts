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
        fontSize: "18px"
    }
});

export default bioStyles