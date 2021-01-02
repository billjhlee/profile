import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles(({ rootTheme }) => {
  return {
    container: ({ props }) => ({
      width: "100%",
      borderTop: `${props.dividerWidth}px ${props.dividerType} ${rootTheme.colors.dividerWeak}`,
      height: `${props.dividerWidth}px`,
      backgroundColor: rootTheme.colors.nameBarBackground,
    }),
  };
});

function Divider(props) {
  const theme = useTheme();
  //   console.log({ ...props, theme });
  const classes = useStyles({ props, theme });

  return <div className={classes.container}></div>;
}

Divider.defaultProps = {
  dividerWidth: "1",
  dividerType: "solid",
  dividerColor: "#fff",
  backgroundColor: "#000",
};

export default Divider;
