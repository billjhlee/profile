import { useState, useEffect, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(({ colors, rootTheme }) => {
  return {
    container: {
      width: "100%",
      backgroundColor: colors.black,
      color: rootTheme.colors.navBarUnselected,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: `${rootTheme.spacing.xl}px 0`,
    },
    menu: {
      listStyleType: "none",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      margin: 0,
      padding: 0,
      width: "100%",
    },
    mItem: {
      cursor: "pointer",
      margin: 0,
      padding: `0 ${rootTheme.spacing.m}px`,
      //   flex: "3 1 1",
      "&:hover": {
        color: colors.white,
      },
    },
    fixed: {
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 2,
    },
  };
});

function NavBar(props) {
  const theme = useTheme();
  const classes = useStyles({ props, theme });
  const [fixed, setFixed] = useState(false);
  const navRef = useRef(null);

  const executeScroll = (index) => {
    if (props.refs[index])
      props.refs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  const scrollFixed = (e) => {
    if (window.pageYOffset > navRef.current.offsetTop) {
      if (!fixed) setFixed(true);
    } else {
      if (fixed) setFixed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollFixed, {
      capture: true,
      passive: true,
    });
  });

  return (
    <div
      className={classNames({
        [classes.container]: true,
        [classes.fixed]: fixed,
      })}
      ref={navRef}
    >
      <ul className={classNames(classes.menu, "r-container")}>
        {props.menu.map((item, index) => (
          <li
            key={item}
            className={classes.mItem}
            onClick={() => executeScroll(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

NavBar.defaultProps = {
  menu: ["School", "Experiences", "Skills", "Projects", "Contact"],
};

export default NavBar;
