import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: '-webkit-inline-box',
            background: 'whitesmoke',
        },
        searchOption: {
            marginLeft: '50px',
            display: 'flex',
        }
    }),
);

const searchValues = [
    {
        value: 'Stories',
    },
];

const byValues = [
    {
        value: 'Popularity',
    },
    {
        value: 'Time',
    },
    {
        value: 'Comments'
    }
];


const forValues = [
    {
        value: 'All time',
    },
    {
        value: 'year'
    },
    {
        value: '6 month'
    },
    {
        value: 'month'
    },
    {
        value: 'week'
    },
    {
        value: 'today'
    }
];


export default function SortBar() {

    const classes = useStyles();
    const [searchState, setSearchState] = React.useState('Stories');
    const [byState, setByState] = React.useState('Popularity');
    const [forState, setForState] = React.useState('All time');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchState(event.target.value);
    };

    const handleByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setByState(event.target.value);
    };

    const handleForChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForState(event.target.value);
    };

    return (
        <FormControl className={classes.root}>
            <FormLabel component="legend">Search</FormLabel>
            <TextField
                className={classes.searchOption}
                select
                value={searchState}
                onChange={handleSearchChange}
            >
                {searchValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>

            <FormLabel component="legend">By</FormLabel>

            <TextField
                className={classes.searchOption}
                select
                value={byState}
                onChange={handleByChange}
            >
                {byValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>

            <FormLabel component="legend">For</FormLabel>

            <TextField
                className={classes.searchOption}
                select
                value={forState}
                onChange={handleForChange}
            >
                {forValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>

        </FormControl>
    );
}