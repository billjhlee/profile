import React, { useRef } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createUseStyles, ThemeProvider } from "react-jss";

import NavBar from "./Components/NavBar";
import NameBar from "./Components/NameBar";
import Divider from "./Components/Divider";
import DescriptionBar from "./Components/DescriptionBar";

import HomePage from "./Pages/HomePage";

const themes = {
  colors: {
    black: "#000",
    white: "#fff",
  },
  fontWeights: {
    l: 300,
    r: 400,
    m: 500,
    sb: 600,
    b: 700,
    bb: 800,
    bbb: 900,
  },
  fontSizes: {
    t: 8,
    xs: 10,
    s: 12,
    m: 14,
    l: 16,
    xl: 18,
    h: 24,
  },
  fontStyle: {
    n: "normal",
    i: "italic",
    o: "oblique",
  },
  rootTheme: {
    spacing: {
      xs: 4,
      s: 6,
      m: 8,
      l: 12,
      xl: 16,
      xxl: 24,
    },
    colors: {
      dark: "#333",
      navBarUnselected: "#ccc",
      nameBarBackground: "#151516",
      dividerWeak: "#3D3D3D",
      // colorBlack: "#000",
      // colorWhite: "#fff",
    },
    // "@media (max-width: 1200px)": {
    //   container: {
    //     maxWidth: "960px",
    //   },
    // },
    // "@media (max-width: 992px)": {
    //   container: {
    //     maxWidth: "720px",
    //   },
    // },
    // "@media (max-width: 768px)": {
    //   container: {
    //     maxWidth: "540px",
    //   },
    // },
    // "@media (max-width: 576px)": {
    //   container: {
    //     maxWidth: "100%",
    //   },
    // },
  },
};

function App() {
  const schoolRef = useRef(null);
  const experienceRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const videoRef = useRef(null);

  return (
    <ThemeProvider theme={themes}>
      <BrowserRouter>
        <NavBar
          refs={[schoolRef, experienceRef, skillRef, projectRef, contactRef]}
        />
        <NameBar />
        <Divider />
        <DescriptionBar />
        <Switch>
          <Route path="/">
            <HomePage
              schoolRef={schoolRef}
              experienceRef={experienceRef}
              skillRef={skillRef}
              projectRef={projectRef}
              videoRef={videoRef}
              contactRef={contactRef}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
