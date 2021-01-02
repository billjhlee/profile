import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

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
    <div className={classNames(classes.container)} ref={props.videoRef}>
      <h3 className="section-title">Videos</h3>
      <div className={classes.videosContainer}>
        <Video
          name="LG Social Campus 1 Min Film Contest"
          src="https://youtube.com/embed/-n6CwofGH3U"
          color="1"
        />
        <Video
          name="Youtuber Intro 1"
          src="https://youtube.com/embed/7J27Xvos1us"
          color="2"
        />
        <Video
          name="Youtuber Intro 2"
          src="https://youtube.com/embed/gZ8j1IQ964A"
          color="3"
        />
        <Video
          name="Youtuber Intro 3"
          src="https://youtube.com/embed/2zWMiF7hAj4"
          color="1"
        />
        <Video
          name="Youtuber Outro 1"
          src="https://youtube.com/embed/0ftzTvFQgvY"
          color="2"
        />
        <Video
          name="Youtuber Outro 2"
          src="https://youtube.com/embed/J-whnA3T9n8"
          color="3"
        />
      </div>
      <br />
    </div>
  );
}

export default Projects;
