import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { DateDiff } from '../utils/date';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        actionButton: {
            textTransform: 'lowercase',
        }
    }),
);

interface IOwnProp {
    name: string,
    date: Date,
    author: string,
    comments: any[],
    link: string,
    points: number,
}

const getDate = (date: Date) => {
    const year = DateDiff.inYears(new Date(date), new Date());
    if (year > 0) {
        return year > 1 ? year + " years" : year + " year";
    }
    const month = DateDiff.inMonths(new Date(date), new Date());
    if (month > 0) {
        return month > 1 ? month + " months" : month + " month";
    }

    const week = DateDiff.inYears(new Date(date), new Date());
    if (year > 0) {
        return week > 1 ? week + " weeks" : week + " week";
    }

    const day = DateDiff.inYears(new Date(date), new Date());
    if (day > 1) {
        return day + " days";
    }

    return "1 day";
}

export default function ContentCard(props: IOwnProp) {
    const classes = useStyles();

    return (
        <Card>
            <Typography>
                {props.name}
            </Typography>
            <CardActions>
                <Button className={classes.actionButton}
                    size="small" color="primary">
                    {props.points > 1 ? props.points + " points" : props.points + " point"}
                </Button>
                <Button
                    className={classes.actionButton}
                    size="small" color="primary">
                    {props.author}
                </Button>
                <Button
                    className={classes.actionButton}
                    size="small" color="primary">
                    {getDate(props.date)}
                </Button>
                <Button
                    className={classes.actionButton}
                    size="small" color="primary">
                    {props.comments.length > 1 ? props.comments.length + " comments" :
                        props.comments.length + " comment"}
                </Button>
                <Button
                    className={classes.actionButton}
                    size="small" color="primary">
                    {props.link}
                </Button>
            </CardActions>
        </Card>
    );
}