import React from 'react';
import {Route,Switch} from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import SearchComponet from '../components/Search/Search';
import PlanetDetails from '../components/PlanetDetails/PlanetDetails';

export const Routing = () => {
        return(
            <Switch>
                <Route exact path="/" component={LoginForm}/>
                <Route exact path="/search" component={SearchComponet}/>
                <Route exact path="/planets/details/:id" component={PlanetDetails}/>
            </Switch>
        )
}
export default Routing;