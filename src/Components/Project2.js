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
        padding: "32px",
        zIndex: 1,
      },
      sbContainer: {
        width: "100%",
      },
      innerContainer: {
        width: "100%",
        minHeight: "200px",
        padding: "32px",
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
      opaque: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        background: "rgba(255,255,255,0.1)",
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
          "sliding-box",
          "sliding-box-add",
          `gb-bg-${props.color}`,
          "sb-gb",
          classes.sbContainer
        )}
      >
        <div
          className={classNames("sliding-box-inner", classes.innerContainer)}
        >
          <h6 className={classNames("zero-margin", classes.name)}>
            {props.name}
          </h6>
          <a className={classes.link} href={props.link}>
            {props.link}
          </a>
          <p className={classNames("zero-margin", classes.description)}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
