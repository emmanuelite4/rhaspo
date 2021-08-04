import { Route, Switch } from "react-router-dom";
import {
  CONDITIONAL_URI,
  HOME_URL,
  LANDING_URL,
  RHAPSO_URL,
} from "./constant/navigation";
import HomeContainer from "./container/HomeContainer";
import LandingContainer from "./container/LandingContainer";
import RhapsoContainer from "./container/RhapsoContainer";

const Routes = () => {
  return (
    <Switch>
      <Route path={LANDING_URL} component={LandingContainer} exact />
      <Route
        path={HOME_URL + CONDITIONAL_URI}
        component={HomeContainer}
        exact
      />
      <Route path={RHAPSO_URL} component={RhapsoContainer} exact />
    </Switch>
  );
};

export default Routes;
