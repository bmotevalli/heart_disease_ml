import Home from "../containers/home/home"
import Analysis from "../containers/analysis/analysis"
import Help from "../containers/Help/Help"

export const ROUTES = {
  MAINVIEW: {
    MAP: { PATH: "/analysis", COMP: Analysis },
    HOME: { PATH: "/home", COMP: Home },
    Help: { PATH: "/Help", COMP: Help }
  }
};

export const SIDE_MENU = {
  CLOSED: "50px",
  OPENED: "150px",
};
