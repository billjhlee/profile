import { useState, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontSize: fontSizes.l,
        fontWeight: fontWeights.l,
        // width: "100%",
        // backgroundColor: rootTheme.colors.nameBarBackground,
        color: colors.white,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "350px",
        // borderRadius: "10px",
        // boxShadow: "0 8px 3px -3px silver",
        margin: "32px",
        zIndex: 1,
      },
      innerContainer: {
        height: "250px",
        width: "250px",
      },
      name: {
        fontSize: "24px",
      },
      link: {
        color: "#bbb",
        fontSize: fontSizes.s,
      },
      description: {
        color: "white",
        marginTop: "16px",
        fontSize: fontSizes.m,
      },
    };
  }
);

function Project(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  return (
    <div className={classNames(classes.container)}>
      <div
        className={classNames(
          classes.innerContainer,
          "glow-box",
          `gb-bg-${props.color}`
        )}
      >
        <h6 className={classNames("zero-margin", classes.name)}>
          {props.name}
        </h6>
        <a className={classes.link} href={props.link} target="_blank">
          {props.link}
        </a>
        <a className={classes.link} href={props.link2} target="_blank">
          {props.link2}
        </a>
        <p className={classNames("zero-margin", classes.description)}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
