import React from "react";
import { Box } from "@mui/material";

type ComponentContainerProps = {
  children: React.ReactNode;
  componentId: string;
  backgroundImage?: string;
  bgcolor?: string;
  paddingY?: number;
};

function ComponentContainer({
  children,
  componentId,
  backgroundImage,
  bgcolor,
  paddingY = 8,
}: ComponentContainerProps) {
  return (
    <Box
      id={componentId}
      sx={{
        px: { xs: 2, md: 4 },
        py: paddingY,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        bgcolor: bgcolor || undefined,
      }}
    >
      {children}
    </Box>
  );
}

export default ComponentContainer;
