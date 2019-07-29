import React from 'react';
import { Container, Typography, CardMedia } from '@material-ui/core'
import TimeLine from './TimeLine'
import ActivityMap from './ActivityMap'
import useStyles from './makeStyles'

function Architect(props) {
    const classes = useStyles();

    return <>
        <Container className={classes.container} maxWidth="md" justify="center">
            <CardMedia className={classes.img} component="img" image={props.image} title={props.name} alt="Photo" />
            <Typography className={classes.name} variant="h4" component="h2">{props.name}</Typography>
            <Typography className={classes.years} variant="h6">Годы жизни: {props.born} - {props.deceased}</Typography>
            <Typography className={classes.description} paragraph={true}>{props.description}</Typography>
            <Typography className={classes.bio} variant="h4">Биография</Typography>
            <TimeLine data={props.bio} />
            <Typography className={classes.map} variant="h4">Место основной деятельности</Typography>
            <ActivityMap data={props.mapData}/>
            <Typography className={classes.gallery} variant="h4">Фотогалерея</Typography>
            
        </Container>
    </>
}

export default Architect
  