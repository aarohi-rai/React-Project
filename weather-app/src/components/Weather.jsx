import { makeStyles, Box } from '@material-ui/core';

import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '27%',
        height: '80%',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, #ABDCFF, #0396FF)',
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather; 