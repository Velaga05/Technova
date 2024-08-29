import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import Footer from './components/Footer';
import AlumniRegistration from './components/AlumniRegistration';
import DonationPortal from './components/DonationPortal';
import NetworkingHub from './components/NetworkingHub';
import JobPortal from './components/JobPortal';
import AlumniDirectory from './components/AlumniDirectory';
import SuccessStoryTracking from './components/SuccessStoryTracking';
import EventsAndReunions from './components/EventsAndReunions';
import FeedbackAndSurveys from './components/FeedbackAndSurveys';

import alumniReducer from './reducers/alumniReducer';
import donationReducer from './reducers/donationReducer';
import networkingReducer from './reducers/networkingReducer';
import jobReducer from './reducers/jobReducer';
import directoryReducer from './reducers/directoryReducer';
import successStoryReducer from './reducers/successStoryReducer';
import eventsReducer from './reducers/eventsReducer';
import feedbackReducer from './reducers/feedbackReducer';

const store = createStore(
  combineReducers({
    alumni: alumniReducer,
    donation: donationReducer,
    networking: networkingReducer,
    job: jobReducer,
    directory: directoryReducer,
    successStory: successStoryReducer,
    events: eventsReducer,
    feedback: feedbackReducer,
  }),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/alumni" component={AlumniRegistration} />
        <Route path="/donation" component={DonationPortal} />
        <Route path="/networking" component={NetworkingHub} />
        <Route path="/job" component={JobPortal} />
        <Route path="/directory" component={AlumniDirectory} />
        <Route path="/success-story" component={SuccessStoryTracking} />
        <Route path="/events" component={EventsAndReunions} />
        <Route path="/feedback" component={FeedbackAndSurveys} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
