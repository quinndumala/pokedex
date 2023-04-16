import { Box, CircularProgress, LinearProgress, Stack } from "@mui/material";

function LoadingView() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default LoadingView;
