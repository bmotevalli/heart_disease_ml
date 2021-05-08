import Home from "../containers/home/home"
import Analysis from "../containers/analysis/analysis"

export const ROUTES = {
  MAINVIEW: {
    MAP: { PATH: "/analysis", COMP: Analysis },
    HOME: { PATH: "/home", COMP: Home }
  }
};

export const SIDE_MENU = {
  CLOSED: "50px",
  OPENED: "150px",
};
