import React, { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
type propsType = {
  children: ReactNode;
  extraStyle?: SxProps<Theme>;
  className?: string;
};
const Row: React.FC<propsType> = ({ children, extraStyle, className }) => {
  const attributes = {
    ...(extraStyle && { sx: extraStyle }),
  };
  return (
    <Box sx={{ flexGrow: 1 }} {...attributes}>
      <Grid container spacing={2} className={className}>
        {children}
      </Grid>
    </Box>
  );
};

export default Row;
