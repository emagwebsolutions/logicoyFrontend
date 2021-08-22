import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import {Provider} from 'react-redux'
import Login from './components/Login'
import {store,persistor} from './components/redux/store'
import Users from './components/users/Users'
import Privateroute from './components/Privateroute'
import Dashboard from './components/dashboards/Dashboard'
import Jobs from './components/jobs/Jobs'
import Driver from './components/driver/Driver'
import Truck from './components/truck/Truck'
import Transporters from './components/transporters/Transporters'
import Reports from './components/reports/Reports'
import Profile from './components/users/Profile'
import Waybill from './components/waybill/Waybill'
import Rates from './components/rates/Rates'
import { PersistGate } from 'redux-persist/integration/react'

export default function App(){
    return (
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <Switch>
                    <Privateroute component={Dashboard} exact path="/dashboard" />
                    <Route exact path="/" component={Login} /> 
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/Users" component={Users} />
                    <Route exact path="/jobs" component={Jobs} />
                    <Route exact path="/transporters" component={Transporters} />
                    <Route exact path="/driver" component={Driver} />
                    <Route exact path="/trucks" component={Truck} />
                    <Route exact path="/reports" component={Reports} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/waybills" component={Waybill} />
                    <Route exact path="/rates" component={Rates} />
                </Switch>
            </HashRouter>
            </PersistGate>
            </Provider>
        
    )

} 