import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import {
    Loader,
    Dimmer,
    Grid,
    Button
} from 'semantic-ui-react';
import GlobalConstants from '../../global/globalConstants'
import { Link } from 'react-router-dom';

const PlanetDetails = (props) => {
    if (!GlobalConstants.getLocalStorage('isLogin')) {
        props.history.push('/');
    }
    const [data, setData] = useState();
    useEffect(() => {
        axios(`${GlobalConstants.END_POINT_URL}planets/${props.match.params.id}/`)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    setData(res.data);
                } else {

                }
            });
    }, [props.match.params.id])
    return (
        <Grid verticalAlign='middle' centered >
            <Grid.Column width={16}>
                <Link className="search-button" to="/Search">Search</Link>
                <Button
                    color='red'
                    content='Logout'
                    icon='logout'
                    onClick={() => { GlobalConstants.deleteAllLocalStorage(); props.history.push('/'); }}
                />

                {data ? <div className="planetWrapper"><div className="planetBox">
                    <div className="planet">
                        {data && data.name}
                    </div>
                    <div className="info">
                        <br /><br /><br /><br />Diameter: {data && data.diameter}
                        <br />Terrain: {data && data.terrain}<br />Population: {data && data.population}
                    </div>
                </div></div> : <Dimmer active inverted>
                        <Loader inverted />
                    </Dimmer>}

            </Grid.Column>
        </Grid>

    )
};

export default PlanetDetails;