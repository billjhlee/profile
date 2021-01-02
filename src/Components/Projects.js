import { useState, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

import Project from "./Project";
import Video from "./Video";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontSize: fontSizes.l,
        fontWeight: fontWeights.l,
        width: "100%",
        color: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //   padding: `${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px`,
      },
      innerContainer: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        maxWidth: "1100px",
        // overflowX: "scroll",
        // flexWrap: "nowrap",
      },
      videosContainer: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        maxWidth: "1100px",
      },
      innerTitle: {
        fontSize: "26px",
        margin: "16px 0",
      },
    };
  }
);

function Projects(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  return (
    <div className={classNames(classes.container)} ref={props.projectRef}>
      <h3 className="section-title">Projects</h3>
      <div className={classNames(classes.innerContainer, "glow-boxes")}>
        <Project
          name="Parachain Tracker"
          link="https://github.com/parachain-tracker/parachain-tracker"
          description="Community project to host developers who contribute to Polkadot ecosystem"
          color={1}
        />
        <Project
          name="Beaman"
          link="https://github.com/billjhlee/beaman"
          link2="https://github.com/billjhlee/beaman_server"
          description="Male Health Improvement Community Site built using Vue.js and Express"
          color={2}
        />
        <Project
          name="Ventura"
          link="https://github.com/billyjhlee/Ventura"
          description="Ethereum Crowdfunding dApp that tries to eliminate scam"
          color={3}
        />
        <Project
          name="Airbnb Mockup"
          link="https://github.com/billyjhlee/airbnbmockup"
          description="React Native Mock of Airbnb Login Flow"
          color={1}
        />

        <Project
          name="Looktem Tire"
          link="https://looktemtire.herokuapp.com"
          description="Simple Website for Tire Seller in CA"
          color={2}
        />
        <Project
          name="Personal Website"
          link="https://billjunghoonlee.herokuapp.com/"
          description="Personal Website using Three.js (webGL)"
          color={3}
        />
        <Project
          name="App Ideas"
          link="https://billyjhlee.weebly.com/"
          description="Personal App Ideation done in freshman year"
          color={2}
        />
      </div>
    </div>
  );
}

export default Projects;
