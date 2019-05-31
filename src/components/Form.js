import React from 'react';
import {TextField, Button, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: 0
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        color: '#fff'
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
        color: '#fff'
    }
}));

const Form = props => {
    const classes = useStyles();
    return (
        <form className={classes.container} onSubmit={props.getWeather}>
            <Grid container>
                <Grid item xs className='flex-center' style={{paddingBottom: '25px'}}>
                    <TextField
                        id="city"
                        name="city"
                        label="City"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        autoFocus
                        InputProps={{
                            style: {
                                caretColor: '#fff',
                                color: '#fff'
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: '#fff'
                            }
                        }}
                    />
                </Grid>
                <Grid item xs className='flex-center' style={{paddingBottom: '25px'}}>
                    <TextField
                        id="country"
                        name="country"
                        label="Country"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            style: {
                                caretColor: '#fff',
                                color: '#fff'
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: '#fff'
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12} className='flex-center'>
                    <Button type="submit" variant="contained" color="primary">Get Weather</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
