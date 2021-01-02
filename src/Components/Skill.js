import { useState, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(
  ({ fontSizes, fontWeights, colors, rootTheme }) => {
    return {
      container: {
        boxSizing: "border-box",
        fontSize: "80px",
        fontWeight: fontWeights.l,
        // width: "100%",
        color: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: `24px 24px`,
      },

      "@media only screen and (max-width: 1140px)": {},
      "@media only screen and (max-width: 992px)": {},
      "@media only screen and (max-width: 768px)": {},
      "@media only screen and (max-width: 576px)": {},
    };
  }
);

function Skill(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  //   const Gradient = () => (
  //   );

  return (
    <div className={classes.container}>
      <svg
        className="circle-chart"
        viewBox="0 0 33.83098862 33.83098862"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="radial">
            <stop offset="70%" stopColor="#eff1ff" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
          <radialGradient id="radial-2">
            <stop offset="95%" stopColor="#eff1ff" />
            <stop offset="100%" stopColor="#ffd54f" />
          </radialGradient>
          <linearGradient
            id={"linear"}
            x1={"100%"}
            y={"0%"}
            x2={"0%"}
            y2={"200%"}
          >
            <stop offset={"0%"} stopColor={"#0652DD"}></stop>
            <stop offset={"50%"} stopColor={"#000"}>
              <animate
                id="animation1"
                attributeName="offset"
                from="0"
                to="1"
                dur="3s"
                begin="0s;animation2.end"
              />
              <animate
                id="animation2"
                attributeName="offset"
                from="1"
                to="0"
                dur="3s"
                begin="animation1.end"
              />
            </stop>
          </linearGradient>
          <linearGradient
            id={"linear2"}
            x1={"100%"}
            y1={"0%"}
            x2={"0%"}
            y2={"200%"}
          >
            <stop offset={"0%"} stopColor={"#EE5A24"}></stop>
            <stop offset={"100%"} stopColor={"#000"}>
              <animate
                id="animation1"
                attributeName="offset"
                from="0"
                to="1"
                dur="3s"
                begin="0s;animation2.end"
              />
              <animate
                id="animation2"
                attributeName="offset"
                from="1"
                to="0"
                dur="3s"
                begin="animation1.end"
              />
            </stop>
          </linearGradient>
          <linearGradient
            id={"linear3"}
            x1={"100%"}
            y1={"0%"}
            x2={"0%"}
            y2={"200%"}
          >
            <stop offset={"0%"} stopColor={"#fff200"}></stop>
            <stop offset={"100%"} stopColor={"#000"}>
              <animate
                id="animation1"
                attributeName="offset"
                from="0"
                to="1"
                dur="3s"
                begin="0s;animation2.end"
              />
              <animate
                id="animation2"
                attributeName="offset"
                from="1"
                to="0"
                dur="3s"
                begin="animation1.end"
              />
            </stop>
          </linearGradient>
          <linearGradient
            id={"linear4"}
            x1={"100%"}
            y1={"0%"}
            x2={"0%"}
            y2={"200%"}
          >
            <stop offset={"0%"} stopColor={"#26de81"}></stop>
            <stop offset={"100%"} stopColor={"#000"}>
              <animate
                id="animation1"
                attributeName="offset"
                from="0"
                to="1"
                dur="3s"
                begin="0s;animation2.end"
              />
              <animate
                id="animation2"
                attributeName="offset"
                from="1"
                to="0"
                dur="3s"
                begin="animation1.end"
              />
            </stop>
          </linearGradient>
        </defs>
        <circle
          className="circle-chart-background"
          cx="16.91549431"
          cy="16.91549431"
          stroke={"url(#radial)"}
          r="15.91549431"
        />
        <circle
          className="circle-chart-circle"
          strokeWidth="2"
          strokeDasharray={`${props.fill},100`}
          strokeLinecap="round"
          fill="none"
          stroke={`url(#${props.anim})`}
          cx="16.91549431"
          cy="16.91549431"
          r="15.91549431"
        />
        <g className="circle-chart-info">
          <text
            className="circle-chart-header"
            x="16.91549431"
            y="15.5"
            alignmentBaseline="central"
            textAnchor="middle"
          >
            {props.title}
          </text>
          <text
            className="circle-chart-subheader"
            x="16.91549431"
            y="20.5"
            alignmentBaseline="central"
            textAnchor="middle"
            fontSize="2"
          >
            {props.sub}
          </text>
        </g>
      </svg>
    </div>
  );
}

Skill.defaultProps = {};

export default Skill;
