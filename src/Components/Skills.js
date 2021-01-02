import { useState, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";

import Skill from "./Skill";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontSize: "80px",
        fontWeight: fontWeights.l,
        width: "100%",
        color: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // padding: `${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px`,
      },
      innerContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      },

      "@media only screen and (max-width: 1140px)": {},
      "@media only screen and (max-width: 992px)": {},
      "@media only screen and (max-width: 768px)": {},
      "@media only screen and (max-width: 576px)": {},
    };
  }
);

function Skills(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container} ref={props.skillRef}>
      <h3 className="section-title">Skills</h3>
      <div className={classes.innerContainer}>
        <Skill title="Front End" sub="" fill={80} anim="linear" />
        <Skill title="Back End" fill={80} anim="linear2" />
        <Skill title="UI/UX" fill={60} anim="linear3" />
        <Skill title="Video Making" fill={60} anim="linear4" />
      </div>
    </div>
  );
}

Skills.defaultProps = {};

export default Skills;
