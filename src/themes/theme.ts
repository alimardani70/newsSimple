import { lightBlue} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

export const theme = createTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: lightBlue[700],
    },
  },
});
