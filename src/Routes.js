import { Redirect, Route, Switch } from "react-router-dom";
import {
  CONDITIONAL_URI,
  HOME_URL,
  LANDING_URL,
  RHAPSODY_URL,
} from "./constant/navigation";
import HomeContainer from "./container/HomeContainer";
import LandingContainer from "./container/LandingContainer";
import RhapsoContainer from "./container/RhapsoContainer";

const mobile = window.matchMedia("(max-width: 576px)").matches;
console.log(mobile);

const Routes = () => {
  return (
    <Switch>
      <Route path={LANDING_URL} component={LandingContainer} exact />
      <Route
        path={HOME_URL + CONDITIONAL_URI}
        component={HomeContainer}
        exact
      />
      <Route path={RHAPSODY_URL} component={RhapsoContainer} exact />
      <Route path="/" exact>
        {mobile ? (
          <Redirect to={LANDING_URL} />
        ) : (
          <Redirect to={RHAPSODY_URL} />
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
