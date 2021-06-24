// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import { useHistory } from "react-router";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Splash from "./components/Splash/index";
import SignupFormModal from "./components/SignupFormModal";
// import Search from "./components/Search/index";
import CampPageComponent from "./components/campPage";
import CampsComponent from "./components/splashCamps";
import ReservationsComponent from "./components/Reservations";
import { ReserveFromUserId } from '././store/reservations';


// import Slideshow from './components/Slideshow'

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (!user) {
      history.push('/')
    }
  }, [history, user])

  useEffect(() => {
    dispatch(ReserveFromUserId(user?.id));
  }, [dispatch, user])



  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Splash isLoaded={isLoaded} />
            <ReservationsComponent isLoaded={isLoaded}/>
            <CampsComponent isLoaded={isLoaded}/>
          </Route>
          <Route path='/camps/:id'>
            <CampPageComponent isLoaded={isLoaded}/>
          </Route>
          {/* <Route path='/camps/:id'>
            <CampPageComponent isLoaded={isLoaded}/>
          </Route> */}
        </Switch>
      )}
      <Footer isLoaded={isLoaded}/>
    </div>
  );
}


export default App;
