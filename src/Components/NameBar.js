import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        minHeight: "65px",
        width: "100%",
        backgroundColor: rootTheme.colors.nameBarBackground,
        color: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: `0 ${rootTheme.spacing.xl}px`,
      },
      hWrapper: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "flex-between",
      },
      header: {
        cursor: "wait",
        padding: 0,
        margin: 0,
        fontSize: fontSizes.h,
        fontWeight: fontWeights.m,
      },
      sWrapper: {
        display: "flex",
        marginLeft: "8px",
        // color: 'grey'
      },
      small: {
        // padding: `0 ${rootTheme.spacing.m}px`,
        fontSize: fontSizes.xs,
        padding: 0,
        margin: 0,
        opacity: 0,
      },
    };
  }
);

function NameBar(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container}>
      <div
        className={classNames("r-container", classes.hWrapper)}
        style={{ width: "100%" }}
      >
        <h3 className={classNames(classes.header, "rainbow-text-animated")}>
          Billy Junghoon Lee
        </h3>
        <div className={classes.sWrapper}>
          <small
            className={classNames(classes.small, "blinker-1")}
            style={{ marginLeft: "4px" }}
          >
            H
          </small>
          <small className={classNames(classes.small, "blinker-2")}>O</small>
          <small className={classNames(classes.small, "blinker-3")}>V</small>
          <small className={classNames(classes.small, "blinker-1")}>E</small>
          <small className={classNames(classes.small, "blinker-2")}>R</small>

          <small
            className={classNames(classes.small, "blinker-1")}
            style={{ marginLeft: "4px" }}
          >
            M
          </small>
          <small className={classNames(classes.small, "blinker-2")}>Y</small>

          <small
            className={classNames(classes.small, "blinker-3")}
            style={{ marginLeft: "4px" }}
          >
            N
          </small>
          <small className={classNames(classes.small, "blinker-1")}>A</small>
          <small className={classNames(classes.small, "blinker-2")}>M</small>
          <small className={classNames(classes.small, "blinker-1")}>E</small>
        </div>
      </div>
    </div>
  );
}

export default NameBar;
