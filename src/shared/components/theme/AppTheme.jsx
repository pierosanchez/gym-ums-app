import { createTheme, ThemeProvider } from "@mui/material";
import { palette, shape, typography } from "./primitives";
import { inputCustomizations } from "./customizations/inputs";
import { surfaceCustomizations } from "./customizations/surfaces";
import { navigationCusomizations } from "./customizations/navigation";

function AppTheme(props) {
  const { children } = props;
  const theme = createTheme({
    palette,
    shape,
    typography,
    components: {
      ...inputCustomizations,
      ...surfaceCustomizations,
      ...navigationCusomizations
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;