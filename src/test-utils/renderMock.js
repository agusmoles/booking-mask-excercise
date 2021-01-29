import React, { Suspense } from "react";
import { render as testingRender } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes/lightTheme";

const render = (ui, renderOptions) => {
  const history = createMemoryHistory();
  const Wrapper = ({ children }) => (
    <Router history={history}>
      <Suspense fallback={<></>}>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </Suspense>
    </Router>
  );

  return {
    ...testingRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    history,
  };
};

export { render };
