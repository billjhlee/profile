import { useState, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames";
import logoCondos from "../assets/logo_condos.png";
import logoNokia from "../assets/logo_nokia.png";
import logoEmpire from "../assets/logo_empire_circle.png";
import logoUSFK from "../assets/logo_usfk.png";

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
        justifyContent: "center",
        alignItems: "center",
        padding: `${rootTheme.spacing.xl}px ${rootTheme.spacing.xl}px`,
        minHeight: "150px",
      },
      innerContainer: {
        padding: `${rootTheme.spacing.l}px`,
      },
      header: {
        margin: 0,
        fontSize: "24px",
        fontWeight: fontWeights.b,
      },
      subheader: {
        margin: 0,
        marginTop: "4px",
        fontSize: "12px",
      },
      headersContainer: {
        paddingLeft: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      infoContainer: {
        display: "flex",
        alignItems: "center",
      },
      moreBtn: {
        border: 0,
        background: "transparent",
        color: "#fff",
        outline: 0,
        fontSize: "16px",
        margin: "0 12px",
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        cursor: "pointer",
      },
      logoRegular: {
        height: "80px",
      },
      logoSmall: {
        height: "50px",
      },
      logoContainer: {
        height: "80px",
        width: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      explanationUl: {
        // listStyleType: "none",
        listStylePosition: "inside",
        fontSize: fontSizes.xl,
      },
      "@media only screen and (max-width: 1140px)": {},
      "@media only screen and (max-width: 992px)": {},
      "@media only screen and (max-width: 768px)": {
        header: {
          fontSize: "20px",
        },
        explanationUl: {
          fontSize: fontSizes.l,
        },
      },
      "@media only screen and (max-width: 576px)": {
        header: {
          fontSize: "16px",
        },
        explanationUl: {
          fontSize: fontSizes.m,
        },
      },
    };
  }
);

function WorkExperience(props) {
  const experiences = [
    {
      title: "Protective Services Agent - SGT",
      company: "USFK/CFC/UNC",
      explanation: [
        "Protective Services Agent to the Commander of United States Forces Korea, Combined Forces Command and United Nations Command",
      ],
      logo: logoUSFK,
    },
    {
      title: "Full Stack Developer",
      company: "Condos.ca",
      explanation: [
        'Prototype of "View Location & Nearby Amenities" feature',
        "Autogeneration of Google Ads and an administrative managing tool",
        "Description Generator used for all listings on Condos.ca",
        "Local businesses, restaurants, schools, gyms, etc scraper (review, rating)",
        "City of Toronto Street Intersections scraper",
        "Public transportation routes, stop and schedule scraper",
      ],
      logo: logoCondos,
    },
    {
      title: "Junior Software Designer",
      company: "Nokia",
      explanation: [
        "GUI of “Traffic Steering Controller” on NSP",
        "Next hop tracking feature of “Autonomous Steering Optimizer” on NSP",
        "Crossings minimizing algorithm of multi layer network diagram used for all applications on NSP",
      ],
      logo: logoNokia,
    },
    {
      title: "Developer",
      company: "Empire Life",
      explanation: [
        'Production test site for "Fast N Full" w integration of 3rd party insurance illustrator',
        "Prototypes of various partnership/insurance product on mobile platforms",
        "Ethereum smart contracts for insurance claim and approval",
      ],
      logo: logoEmpire,
    },
  ];

  // firebase
  //   .database()
  //   .ref("experiences/" + "condo")
  //   .set({
  //     works_done: ["autogen"],
  //   });

  const theme = useTheme();
  const classes = useStyles({ props, theme });
  const [info, openInfo] = useState(false);
  const scrollRef = useRef(null);

  const executeScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const renderExperience = (num) => {
    const { title, company, explanation, logo } = experiences[num];

    return (
      <div>
        <div className={classes.infoContainer}>
          <div className={classes.logoContainer}>
            <img
              className={num >= 2 ? classes.logoSmall : classes.logoRegular}
              src={logo}
            />
          </div>
          <div className={classes.headersContainer}>
            <h4 className={classes.header}>{title}</h4>
            <h6 className={classes.subheader}>@{company}</h6>
          </div>
          {renderChev()}
        </div>
        {renderExplanation(num)}
      </div>
    );
  };

  const renderExplanation = (num) => {
    const { explanation } = experiences[num];
    if (info)
      return (
        <ul className={classes.explanationUl}>
          {explanation.map((exp, ind) => (
            <li key={exp.substr(0, 3) + ind}>{exp}</li>
          ))}
        </ul>
      );
  };

  const handleOpenInfo = () => {
    openInfo(!info);
    setTimeout(() => {
      if (!info && scrollRef) executeScroll();
    }, 100);
  };

  const renderChev = () => {
    if (info) {
      return (
        <button className={classes.moreBtn} onClick={handleOpenInfo}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      );
    }
    return (
      <button className={classes.moreBtn} onClick={handleOpenInfo}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    );
  };

  return (
    <div className={classes.container} ref={scrollRef}>
      <div className={classNames("sliding-box", "sliding-box-add")}>
        <div
          className={classNames("sliding-box-inner", classes.innerContainer)}
        >
          {renderExperience(props.num)}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
