import React, { useState } from 'react';
import {
    Form,
    Grid,
    Header,
    Segment,
    Message,
    Loader,
    Dimmer
} from 'semantic-ui-react';
import {
    withRouter
} from 'react-router-dom';
import axios from 'axios';
import GlobalConstants from '../../global/globalConstants';
import './styles.css';

export const LoginForm = (props) => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [err, setErr] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (user === '' || pwd === '') {
            setErr('Please enter username or password.')
        } else {
            setShowLoader(true);
            axios(`${GlobalConstants.END_POINT_URL}people/?search=${user}`)
                .then(res => {
                    if (res.data.results.length) {
                        console.log(res.data);
                        if (res.data.results[0].birth_year == pwd) {
                            GlobalConstants.setLocalStorage('isLogin', true);
                            props.history.push('/search');
                        } else {
                            setErr('Please enter username or password.');
                        }
                        setShowLoader(false);
                    } else {
                        setErr('Please enter username or password.');
                    }
                    setShowLoader(false);
                });
        }
    };
    const handleUserChange = (e) => {
        setErr('');
        if (e.target.name === 'user') {
            setUser(e.target.value);
        }
    }
    const handlePwdChange = (e) => {
        setErr('')
        if (e.target.name === 'password') {
            setPwd(e.target.value)
        }
    }
    return (
        <Grid className="LoginWrapper" verticalAlign='middle' centered >
            <Grid.Column mobile={16} tablet={10} computer={6}>
                <Header as="h2" textAlign="center">
                    Star Wars
        </Header>
                {err && <Message
                    error
                    visible
                    content={'Please enter valid username / password'}
                />
                }
                <Segment>
                    <Form size="large" loading={false}>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            name="user"
                            onChange={handleUserChange}
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={handlePwdChange}
                        />
                        <Form.Button type="submit" color="blue" fluid size="large" onClick={formSubmit}>
                            Login
            </Form.Button>
                    </Form>
                </Segment>
               {showLoader && <Dimmer active inverted>
                    <Loader inverted />
                </Dimmer>}
            </Grid.Column>
        </Grid>
    )
}

export default withRouter(LoginForm);