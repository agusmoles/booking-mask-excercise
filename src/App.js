import { ThemeProvider } from "styled-components";
import { FlightTab } from "./containers";
import { lightTheme } from "./themes/lightTheme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <FlightTab />
    </ThemeProvider>
  );
};

export default App;
