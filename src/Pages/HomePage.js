import { createUseStyles, useTheme } from "react-jss";
import School from "../Components/School";
import WorkExperiences from "../Components/WorkExperiences";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Videos from "../Components/Videos";
import Contact from "../Components/Contact";

const useStyles = createUseStyles(({ colors, rootTheme }) => ({
  container: {
    backgroundColor: colors.black,
    minHeight: "100vh",
  },
}));

function HomePage(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container}>
      <School schoolRef={props.schoolRef} />
      <WorkExperiences experienceRef={props.experienceRef} />
      <Skills skillRef={props.skillRef} />
      <Projects projectRef={props.projectRef} />
      <Videos videoRef={props.videoRef} />
      <Contact contactRef={props.contactRef} />
    </div>
  );
}

export default HomePage;
