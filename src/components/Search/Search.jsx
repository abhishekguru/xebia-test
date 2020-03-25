import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Grid, List, Segment, Button } from 'semantic-ui-react'
import _ from 'lodash'
import axios from 'axios';
import GlobalConstants from '../../global/globalConstants'
import './styles.css';

const SearchComponet = (props) => {
    if (!GlobalConstants.getLocalStorage('isLogin')) {
        props.history.push('/');
    }
    const [res, setRes] = useState();
    const searchDataUpdate = (d) => {
        axios(`https://swapi.co/api/planets/?search=${d}`)
            .then(res => {
                if (res.data.results.length) {
                    console.log(res.data.results);
                    setRes(res.data.results);
                } else {

                }
            });
    };
    const returnNumner = (url) => {
        let arr = url.split('/').filter(v => v === "" ? false : true);
        return arr[arr.length - 1];
    }
    return (
        <Grid>
            <Grid.Column width={16}>
                <Segment>
                    <div className="dropdown">
                        <Input size='massive' focus placeholder='Search...' onChange={(e, d) => searchDataUpdate(d.value)} />
                        
                        <div className={`ui massive dropdown-content ${res && res.length && 'block'}`}>

                            <List>
                                {res && res.length && res.map(v => (
                                    <Link to={`/planets/details/${returnNumner(v.url)}`}>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>{v.name}</List.Header>
                                                <List.Description>
                                                    {v.population}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </Link>
                                ))}
                            </List>
                        </div>
                    </div>
                    <Button
                            color='red'
                            content='Logout'
                            icon='logout'
                            onClick={() => { GlobalConstants.deleteAllLocalStorage(); props.history.push('/'); }}
                        />
                </Segment>
            </Grid.Column>
        </Grid>
    )
};

export default SearchComponet;