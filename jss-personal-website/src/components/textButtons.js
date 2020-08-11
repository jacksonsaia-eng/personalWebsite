import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        color: '#ffdc9b',
        '&:hover': {
            backgroundColor: '#ffdc9b',
            color: 'white',
        },

    }
}));

export default function TextButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button} component={Link} to="/music">music</Button>
            <Button className={classes.button} component={Link} to="/photo">photo</Button>
            <Button className={classes.button} component={Link} to="/video">video</Button>
            <Button className={classes.button} component={Link} to="/engineering">engineering</Button>
            <Button className={classes.button} component={Link} to="/about">about</Button>
        </div >
    );
}