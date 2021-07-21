import React from 'react';
import { Grid, Typography } from "@material-ui/core"
import skillLists from '../static/skills.json'
import SkillList from '../components/SkillList'

interface IList {
    language: string,
    avatar: string
}

interface IListArray extends Array<IList>{}

interface IItem {
    title: string,
    list: IListArray
}

const Technical: React.FC = (): JSX.Element => {

    return (
        <>
            <Typography align="center" variant="h2">
                SKILLSET
            </Typography>

            <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="center"
                spacing={3}>
                    
                {skillLists.map((item: IItem, index: number) => (
                    <SkillList key={index} props={item.list} title={item.title} />
                ))}
            </Grid>
        </>
    )
}

export default Technical