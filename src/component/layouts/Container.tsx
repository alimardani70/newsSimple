import React, { ReactNode } from "react";
import { Breakpoint, Container as MuiContainer } from "@mui/material";
import { ContainerClasses } from "@mui/material/Container/containerClasses";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Grid as MuiGrid } from "@mui/material";
import { GridSpacing } from "@mui/material/Grid/Grid";

type propsType = {
  children: ReactNode;
  disableGutters?: boolean;
  fixed?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  classes?: Partial<ContainerClasses>;
  className?: string;
  extraStyle?: SxProps<Theme>;
  spacing?: GridSpacing;
};
const Container: React.FC<propsType> = ({
  disableGutters,
  maxWidth,
  classes,
  fixed,
  extraStyle,
  className,
  children,
  spacing,
}) => {
  const attributes = {
    fixed: fixed,
    ...(disableGutters && { disableGutters: disableGutters }),
    ...(maxWidth && { maxWidth: maxWidth }),
    ...(classes && { classes: classes }),
    ...(fixed && { fixed: fixed }),
    ...(extraStyle && { sx: extraStyle }),
  };
  return (
    <MuiContainer {...attributes} className={className}>
      {children}
    </MuiContainer>
  );
};

export default Container;
