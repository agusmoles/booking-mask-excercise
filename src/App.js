import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FlightTab } from "./containers";
import { lightTheme } from "./themes/lightTheme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Switch>
          <Route path="/us/en/Book/:flightType/:originAndDestination/:departureDate/:adults/:children/:infants/:planeClass/al-LX/sidmbvl">
            <FlightTab />
          </Route>
        </Switch>
        <Route exact path="/">
          <FlightTab />
        </Route>
      </Router>
    </ThemeProvider>
  );
};

export default App;
