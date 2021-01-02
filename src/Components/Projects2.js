import { useState, useRef, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import Project from "./Project";

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
      },
    };
  }
);

function Projects(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });
  const [start, setStart] = useState({ x: null, y: null });
  const [end, setEnd] = useState({ x: null, y: null });
  const [moving, setMoving] = useState(false);
  const carouselRef = useRef(null);

  //   useEffect(() => {
  //     const carousel = carouselRef.current;
  //     carousel.addEventListener("mousedown", handleMouseDown);
  //     carousel.addEventListener("mouseup", handleMouseUp);
  //     carousel.addEventListener("mousemove", handleMouseMove);
  //   });

  //   const handleMouseDown = (e) => {
  //     if (!moving) {
  //       setStart({ x: e.clientX, y: e.clientY });
  //       setMoving(true);
  //       console.log("mousedown", moving);
  //     }
  //   };

  //   const handleMouseUp = (e) => {
  //     if (moving) {
  //       setMoving(false);
  //       console.log("mouseup", true);
  //     }
  //   };

  //   const handleMouseMove = (e) => {
  //     // console.log("move", moving);

  //     if (moving) {
  //       let offsetX = e.clientX - start.x;
  //       let offsetY = e.clientY - start.y;

  //       console.log(offsetX, offsetY);
  //     }
  //   };

  return (
    <div className={classes.container}>
      <h3 className="section-title">Projects</h3>
      <div className="carousel-container">
        <div className={"carousel"} ref={carouselRef}>
          <div className={classNames("carousel-item", "carousel-item-1")}>
            <Project
              name="Parachain Tracker"
              link="https://github.com/parachain-tracker/parachain-tracker"
              description="Community project to host developers who contribute to Polkadot ecosystem"
            />
          </div>
          <div className={classNames("carousel-item", "carousel-item-2")}>
            <Project
              name="Ventura"
              link="https://github.com/billyjhlee/Ventura"
              description="Ethereum Crowdfunding dApp that tries to eliminate scam"
            />
          </div>
          <div className={classNames("carousel-item", "carousel-item-3")}>
            <Project
              name="Looktem Tire"
              link="https://looktemtire.herokuapp.com"
              description="Simple Website for Tire Seller in CA"
            />
          </div>
          <div className={classNames("carousel-item", "carousel-item-4")}>
            <Project
              name="Airbnb Mockup"
              link="https://github.com/billyjhlee/airbnbmockup"
              description="React Native Mock of Airbnb Login Flow"
            />
          </div>
          <div className={classNames("carousel-item", "carousel-item-5")}>
            <Project
              name="Personal Website"
              link="https://billjunghoonlee.herokuapp.com/"
              description="Personal Website using Three.js(webGL)"
            />
          </div>
          <div className={classNames("carousel-item", "carousel-item-6")}>
            <Project
              name="App Ideas"
              link="https://billjhlee.weebly.com/"
              description="Personal App Ideation done in freshman year"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
