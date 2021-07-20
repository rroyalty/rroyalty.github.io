import React from 'react';
import { Typography } from "@material-ui/core"


interface IList {
    language: string,
    avatar: string
}

interface IListArray extends Array<IList>{}

interface IItem {
    title: string,
    list: IListArray
}


const Flair: React.FC = (): JSX.Element => {

    return (
        <>
            <Typography align="center" variant="h2" component="h2">
                FLAIR
            </Typography>
            <Typography align="center" variant="h3" component="h3">
                Under Construction
            </Typography>
        </>
    )
}

export default Flair