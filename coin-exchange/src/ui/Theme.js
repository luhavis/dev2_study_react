export const LARGE_AND_ABOVE = "largeAndAbove";
const BREAKPOINT_NAMES = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${
    breakpoints[BREAKPOINT_NAMES.LARGE]
  }px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media (min-width: ${
    breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1
  }px)`,
  print: "@media print",
};

export const unit = 4;
