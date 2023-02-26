import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#f4f4f4",
      contrastText: "#000000",
    },
    secondary: {
      main: "#b71c1c",
      contrastText: "#ffffff",
    },
    error: {
      main: grey[800],
      contrastText: "#000000",
    },
  },
});
export default theme;
