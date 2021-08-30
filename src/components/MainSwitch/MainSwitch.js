import { Switch, Route, Redirect } from "react-router-dom";
import { ServicesUnderConstruction, StartViev } from "../../templates";

const MainSwitch = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <StartViev />} />
        <Route
          exact
          path="/additinal-offer"
          render={() => <ServicesUnderConstruction />}
        />
        <Route
          exact
          path="/aplication"
          render={() => <ServicesUnderConstruction />}
        />
        <Route
          exact
          path="/vod-offer"
          render={() => <ServicesUnderConstruction />}
        />
        <Route
          exact
          path="/main-offer"
          render={() => <ServicesUnderConstruction />}
        />
        <Route
          exact
          path="/online"
          render={() => <ServicesUnderConstruction />}
        />
        <Route
          exact
          path="/packages-offer"
          render={() => <ServicesUnderConstruction />}
        />
        <Route
          exact
          path="/support"
          render={() => <ServicesUnderConstruction />}
        />

        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default MainSwitch;
