import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: "100%", paddingTop: "5rem" }}>{children}</Box>
    </Container>
  );
}

export default PageContainer;
