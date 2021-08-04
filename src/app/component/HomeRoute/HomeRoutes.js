import { Route, Switch } from "react-router-dom";
import { HOME_ROUTE_SPEECH, HOME_URL } from "../../../constant/navigation";
import SpeechStateUI from "../SpeechToSpeech/component/SpeechStateUI";
import HomeRoutesContainer from "./HomeRoutesContainer";

const HomeRoutes = () => {
  return (
    <Switch>
      <Route
        path={HOME_URL + HOME_ROUTE_SPEECH}
        renders={() => (
          <HomeRoutesContainer>
            <SpeechStateUI />
          </HomeRoutesContainer>
        )}
        exact
      />
    </Switch>
  );
};

export default HomeRoutes;
