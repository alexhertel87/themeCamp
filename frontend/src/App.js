// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Splash from "./components/Splash/index";
import SignupFormModal from "./components/SignupFormModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // return (
  //   <div>
  //     <Navigation isLoaded={isLoaded} />
  //     {isLoaded && (
  //       <div>
  //           <Splash isLoaded={isLoaded} />
  //       </div>
  //     )}
  //     <Footer />
  //   </div>
  // );


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
            <Splash isLoaded={isLoaded} />
          <Route path="/signup">
             <SignupFormModal />
          </Route>
          <Footer />
        </Switch>
      )}
    </>
  );
}

export default App;
