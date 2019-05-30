import React from 'react';
import {TextField, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '50px 0'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
}));

const Form = props => {
    const classes = useStyles();
    return (
        <form className={classes.container} onSubmit={props.getWeather}>
            <TextField
                id="city"
                name="city"
                label="City"
                type="search"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="country"
                name="country"
                label="Country"
                type="search"
                className={classes.textField}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">Get Weather</Button>
        </form>
    );
};

export default Form;
