import "styled-components";
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
