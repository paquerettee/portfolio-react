import React from "react";
import { Box } from "@mui/material";

type ComponentContainerProps = {
  children: React.ReactNode;
  componentId: string;
  backgroundImage?: string;
  bgcolor?: string;
};

function ComponentContainer({
  children,
  componentId,
  backgroundImage,
  bgcolor,
}: ComponentContainerProps) {
  return (
    <Box
      id={componentId}
      sx={{
        px: 4,
        py: 0,
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
