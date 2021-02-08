'use strict';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: "#fc0f37",
      green: "#17a454",
      blue: "#6280a9",
      midblue: "#b8c6dd",
      lightblue: "#ccddea",
      yellow: "#fed130",
      white: "#fff",
      gray: "#ebebeb"
    },
    spacing: {
      0: "0px",
      0.5: "0.5rem",
      1: "1rem"
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }]
    },
    extend: {
      gridTemplateRows: {
        main: "auto minmax(0, 1fr)"
      }
    }
  },
  variants: {
    extend: {},
    backgroundColor: ["hover"],
    cursor: ["disabled", "hover"],
    opacity: ["disabled"]
  },
  plugins: [],
  corePlugins: {
    container: false,
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
    accessibility: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundColor: true,
    backgroundImage: false,
    gradientColorStops: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: true,
    borderOpacity: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: true,
    boxSizing: false,
    cursor: true,
    display: true,
    flexDirection: true,
    flexWrap: false,
    placeItems: false,
    placeContent: false,
    placeSelf: false,
    alignItems: true,
    alignContent: false,
    alignSelf: false,
    justifyItems: false,
    justifyContent: true,
    justifySelf: false,
    flex: true,
    flexGrow: false,
    flexShrink: false,
    order: false,
    float: true,
    clear: false,
    fontFamily: false,
    fontWeight: true,
    height: true,
    lineHeight: true,
    listStylePosition: false,
    listStyleType: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    objectFit: false,
    objectPosition: false,
    opacity: true,
    outline: true,
    overflow: true,
    overscrollBehavior: false,
    placeholderColor: false,
    placeholderOpacity: false,
    pointerEvents: false,
    position: true,
    inset: true,
    resize: false,
    boxShadow: false,
    ringWidth: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringColor: false,
    ringOpacity: false,
    fill: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textAlign: false,
    textOpacity: false,
    textOverflow: false,
    fontStyle: false,
    textTransform: false,
    textDecoration: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    wordBreak: false,
    width: true,
    zIndex: true,
    gap: false,
    gridAutoFlow: false,
    gridTemplateColumns: false,
    gridAutoColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: true,
    gridAutoRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    transform: true,
    transformOrigin: false,
    scale: false,
    rotate: false,
    translate: true,
    skew: false,
    transitionProperty: true,
    transitionTimingFunction: false,
    transitionDuration: true,
    transitionDelay: false,
    animation: false
  }
};
