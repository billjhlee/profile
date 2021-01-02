import { createUseStyles, useTheme } from "react-jss";

import WorkExperience from "./WorkExperience";

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
    };
  }
);

function WorkExperiences(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container} ref={props.experienceRef}>
      <h3 className="section-title">Experiences</h3>
      <WorkExperience num={0} />
      <WorkExperience num={1} />
      <WorkExperience num={2} />
      <WorkExperience num={3} />
    </div>
  );
}

export default WorkExperiences;
