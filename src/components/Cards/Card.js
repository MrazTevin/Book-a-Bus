import React from "react";
import PropTypes from 'prop-types';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    add: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    favorite: {
        fontSize: 20,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    image: {
        fontSize: 80
    },
    wrapper: 'lightgrey solid 1px',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200,
})

export default function Card({image}) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>

        </div>

    )

}