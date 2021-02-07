import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontWeight: fontWeights.b,
        width: "100%",
        // backgroundColor: rootTheme.colors.nameBarBackground,
        color: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "36px",
        height: "300px",
        flexWrap: "wrap",
      },
      link: {
        outline: "none",
        color: "#fff",
      },
      contact: {
        textAlign: "center",
      },
      "@media only screen and (max-width: 1140px)": {},
      "@media only screen and (max-width: 992px)": {
        container: {
          fontSize: "32px",
        },
      },
      "@media only screen and (max-width: 768px)": {
        container: {
          fontSize: "24px",
        },
      },
      "@media only screen and (max-width: 576px)": {},
    };
  }
);

function Contact(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <div className={classes.container} ref={props.contactRef}>
      <p className={classes.contact}>
        Reach me on<span style={{ marginLeft: "8px" }}></span>
        <a
          href="mailto:billyleejh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          billyleejh@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
