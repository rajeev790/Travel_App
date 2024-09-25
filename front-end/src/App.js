import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HotelDetailsPage from './pages/HotelDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import SearchResultsPage from './pages/SearchResultsPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/hotels/:id" component={HotelDetailsPage} />
                <Route path="/user-profile" component={UserProfilePage} />
                <Route path="/search-results" component={SearchResultsPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;
