import React from 'react';
import CardRobo from './Card';
import Grid from '@material-ui/core/Grid';


const CardList = ({ robots }) => {
        const robotArray = robots.map((user, i) => {
            return <CardRobo key={i} name={user.name} email={user.email} id={user.id} />;
        });
        return (
            <Grid container justify="center">
                {robotArray}
            </Grid>
        );
}

export default CardList;
