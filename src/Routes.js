import { Redirect, Route, Switch } from "react-router-dom";
import {
  ADVANCE_TRANSLATE_URL,
  BOOK_LIST_URL,
  BOOK_PARAM,
  BOOK_URL,
  CONDITIONAL_URI,
  DAILY_VERSE_URI,
  HOME_URL,
  LANDING_URL,
  PREACHING_URL,
  RHAPSODY_URL,
  RHAPSO_CATEGORY_URL,
} from "./constant/navigation";
import AdvanceTranslateContainer from "./container/AdvanceTranslateContainer";
import BookContainer from "./container/BookContainer";
import BookListContainer from "./container/BookListContainer";
import DailyVerseContainer from "./container/DailyVerseContainer";
import HomeContainer from "./container/HomeContainer";
import LandingContainer from "./container/LandingContainer";
import PreachingContainer from "./container/PreachingContainer";
import RhapsoCategoryContainer from "./container/RhapsoCategoryContainer";
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
      <Route
        path={RHAPSO_CATEGORY_URL}
        component={RhapsoCategoryContainer}
        exact
      />
      <Route path={DAILY_VERSE_URI} component={DailyVerseContainer} exact />
      <Route path={BOOK_LIST_URL} component={BookListContainer} exact />
      <Route path={BOOK_URL + BOOK_PARAM} component={BookContainer} exact />
      <Route path={PREACHING_URL} component={PreachingContainer} exact />
      <Route
        path={ADVANCE_TRANSLATE_URL}
        component={AdvanceTranslateContainer}
        exact
      />
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
