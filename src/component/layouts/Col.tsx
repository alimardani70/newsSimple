import React, { ReactNode } from "react";
import { Grid as MuiGrid } from "@mui/material";
import { GridClasses } from "@mui/material/Grid/gridClasses";
import { ResponsiveStyleValue, SxProps } from "@mui/system";
import { GridDirection, GridSize, GridSpacing } from "@mui/material/Grid/Grid";
import { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

type ColSizeType = {
  xs?: boolean | GridSize | string[];
  sm?: boolean | GridSize | string[];
  md?: boolean | GridSize | string[];
  lg?: boolean | GridSize | string[];
  xl?: boolean | GridSize | string[];
};
type propsType = {
  children: ReactNode;
  col: ColSizeType;
  classes?: Partial<GridClasses>;
  columnSpacing?: GridSpacing;
  direction?: GridDirection;
  rowSpacing?: GridSpacing;
  extraStyle?: SxProps<Theme>;
  container?: boolean;
  className?: string;
  backgroundColor?: string | "inherit";
};
const colDefaultValue = { xs: 12 };
const Col: React.FC<propsType> = ({
  children,
  classes,
  columnSpacing,
  direction,
  rowSpacing,
  extraStyle,
  container = false,
  col = colDefaultValue,
  className,
  backgroundColor = "#FFF",
}) => {
  const colSize = Object.entries(col).map((size) => {
    return { [size["0"]]: size["1"] };
  });
  const attributes = {
    ...(classes && { classes: classes }),
    ...(columnSpacing && { fixed: columnSpacing }),
    ...(direction && { direction: direction }),
    ...(rowSpacing && { rowSpacing: rowSpacing }),
    ...(extraStyle && { sx: extraStyle }),
    ...(container && { container: container }),
    ...colSize.reduce((a, b) => Object.assign(a, b), {}),
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: backgroundColor,
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

  return (
    <MuiGrid item {...attributes}>
      <Item className={className}>{children}</Item>
    </MuiGrid>
  );
};

export default Col;
