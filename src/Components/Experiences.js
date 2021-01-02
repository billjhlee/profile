import { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontSize: fontSizes.l,
        fontWeight: fontWeights.l,
        width: "100%",
        backgroundColor: rootTheme.colors.nameBarBackground,
        color: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: `${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px`,
      },
    };
  }
);

function Experiences(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container}>
      Full Stack Developer, Reserved Army SGT, Former Protective Services Agent
    </div>
  );
}

export default Experiences;
