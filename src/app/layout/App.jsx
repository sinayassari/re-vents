import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import EventDashboard from '../../feature/event/Eventdashboard/EventDashboard';
import NavBar from '../../feature/nav/NavBar/NavBar';
import EventDetailedPage from "../../feature/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../feature/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../feature/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../feature/user/Settings/SettingsDashboard";
import EventForm from "../../feature/event/EventForm/EventForm";
import HomePage from "../../feature/home/HomePage";
import TestComponent from "../../feature/testarea/TestComponent";


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
                <Route path='/(.+)' render={() => (
                    <div>
                        <NavBar/>
                        <Container className="main">
                            <Switch>
                                <Route path='/events' component={EventDashboard}/>
                                <Route path='/test' component={TestComponent}/>
                                <Route path='/event/:id' component={EventDetailedPage}/>
                                <Route path='/manage/:id' component={EventForm}/>
                                <Route path='/people' component={PeopleDashboard}/>
                                <Route path='/profile/:id' component={UserDetailedPage}/>
                                <Route path='/settings' component={SettingsDashboard}/>
                                <Route path='/createEvent' component={EventForm}/>
                            </Switch>
                        </Container>
                    </div>
                )}/>
            </div>
        );
    }
}

export default App;
