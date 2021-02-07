import { useState, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import schoolVideo from "../assets/school2.mp4";

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
      video: {
        width: "100%",
      },
      headers: {
        display: "flex",
      },
      header: {
        color: "#eff1ff",
        fontSize: "24px",
        // margin: 0,
        margin: `${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px`,
      },
      header2: {
        fontSize: "48px",
        margin: 0,
      },
      header3: {
        fontSize: "48px",
        margin: `0 ${rootTheme.spacing.xl}px`,
      },
      button: {
        marginTop: `36px`,
      },
      departments: {
        textAlign: "center",
      },
      major: {
        fontWeight: fontWeights.b,
        fontSize: "48px",
        padding: "0 24px",
      },
      major_des: {
        fontSize: "24px",
      },
      "@media only screen and (max-width: 1140px)": {},
      "@media only screen and (max-width: 992px)": {},
      "@media only screen and (max-width: 768px)": {
        major: {
          fontWeight: fontWeights.b,
          fontSize: "36px",
        },
        header2: {
          fontSize: "36px",
        },
        header3: {
          fontSize: "36px",
        },
      },
      "@media only screen and (max-width: 576px)": {
        major: {
          fontWeight: fontWeights.b,
          fontSize: "32px",
        },
        header2: {
          fontSize: "36px",
        },
        header3: {
          fontSize: "36px",
        },
      },
    };
  }
);

function School(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  const [reveal, setReveal] = useState(false);
  const [exit, setExit] = useState(false);
  const scrollRef = useRef(null);

  const revealBtn = () => {
    if (!reveal)
      return (
        <div className={classNames({ fadeout: exit })}>
          <a
            className={classNames({
              "gold-bg": true,
              "sliding-button": true,
              "button-1": true,
              [classes.button]: true,
            })}
            onClick={revealSchool}
            alt="CLICK"
          >
            CLICK
          </a>
        </div>
      );
  };

  const revealSchool = () => {
    setExit(true);
    setTimeout(revealAndScroll, 1500);
  };

  const revealAndScroll = () => {
    setReveal(true);
    executeScroll();
  };

  const schoolVid = () => {
    if (reveal)
      return (
        <video
          ref={scrollRef}
          autoPlay
          muted
          className={classNames(classes.video, "r-container")}
        >
          <source src={schoolVideo} type="video/mp4"></source>
        </video>
      );
  };

  const majorDes = () => {
    if (reveal)
      return (
        <div
          className={classNames("r-container", classes.departments, "fadein")}
        >
          <p
            className={classNames(
              "metallic-text-gold",
              classes.major,
              "zero-margin"
            )}
            style={{ backgroundPosition: "50% 100%" }}
          >
            David R. Cheriton School of Computer Science
          </p>
        </div>
      );
  };

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className={classes.container} ref={props.schoolRef}>
      <h3 className="section-title">School</h3>
      <h6 className={classNames(classes.header)}>Proud to bleed</h6>
      <div className={classes.headers}>
        <h6 className={classNames("metallic-text-black", classes.header2)}>
          Black{" "}
        </h6>
        <h6 className={classNames("metallic-text-black", classes.header3)}>
          &{" "}
        </h6>
        <h6 className={classNames("metallic-text-gold", classes.header2)}>
          Gold
        </h6>
      </div>
      {revealBtn()}
      {schoolVid()}

      {majorDes()}
    </div>
  );
}

export default School;
