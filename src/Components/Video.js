import { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontSize: fontSizes.l,
        fontWeight: fontWeights.l,
        color: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "32px",
        zIndex: 1,
        // borderRadius: "10px",
      },
      innerContainer: {
        width: "250px",
        height: "250px",
      },
      video: {
        flex: "1 1 auto",
        width: "100%",
      },
      name: {
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        margin: "12px 0",
        fontSize: "24px",
        // textAlign: "center",
      },
    };
  }
);

function Video(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container}>
      <div
        className={classNames(
          classes.innerContainer,
          "glow-box",
          `gb-bg-${props.color}`
        )}
      >
        <h3 className={classes.name}>{props.name}</h3>
        <iframe
          className={classes.video}
          src={props.src}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    </div>
  );
}

export default Video;
