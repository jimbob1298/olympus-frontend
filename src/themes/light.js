import { switchClasses, tabClasses } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import { darkPalette } from "./darkPalette";
import fonts from "./fonts";
import commonSettings from "./global.js";
import { lightPalette as colors } from "./lightPalette";

const lightTheme = {
  gridButtonHoverBackground: "rgba(118, 130, 153, 0.2)",
  gridButtonActiveBackground: "rgba(118, 130, 153, 0.7)",
  switchBg: "#FCFCFC",
};

export const light = responsiveFontSizes(
  createTheme(
    deepmerge(
      {
        colors,
        palette: {
          mode: "light",
          contrastText: colors.gray[10],
          primary: {
            main: colors.gray[10],
          },
          neutral: {
            main: colors.gray[10],
            secondary: colors.gray[600],
          },
          text: {
            primary: colors.gray[10],
            secondary: colors.gray[40],
          },
          graphStrokeColor: "rgba(37, 52, 73, 0.2)",
          error: {
            main: colors.feedback.error,
          },
          info: {
            main: colors.feedback.userFeedback,
          },
          success: {
            main: colors.feedback.success,
          },
          warning: {
            main: colors.feedback.warning,
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
            ${fonts}
            body {
              background:${colors.background};
              background-repeat:no-repeat;
              background-attachment:fixed;
              font-size:0.75rem;
              font-weight:400;
            }
            `,
          },
          MuiSwitch: {
            styleOverrides: {
              colorPrimary: {
                color: colors.gray[10],
                [`&.${switchClasses["checked"]}`]: {
                  color: lightTheme.switchBg,
                  [`& + ${switchClasses["track"]}`]: {
                    backgroundColor: colors.gray[10],
                    borderColor: colors.gray[10],
                  },
                },
              },
              track: {
                border: `1px solid ${colors.gray[10]}`,
                backgroundColor: lightTheme.switchBg,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                background: "transparent",
                "&.ohm-card": {
                  background: "transparent",
                },
                "&.MuiPaper-root&.tooltip-container": {
                  background: colors.paper.card,
                },
              },
            },
          },
          MuiModal: {
            styleOverrides: {
              root: {
                ".MuiPaper-root": {
                  background: colors.paper.card,
                },
              },
            },
          },
          MuiAlert: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },
          MuiTabs: {
            styleOverrides: {
              root: {
                "& .MuiLink-root": {
                  color: colors.gray[40],
                  "&.active": {
                    color: colors.gray[10],
                  },
                },
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                background: colors.paper.background,
                zIndex: 7,
              },
            },
          },
          MuiBackdrop: {
            styleOverrides: {
              root: {
                backgroundColor: "rgba(255,255,255, 0)",
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                color: colors.gray[10],
                "&:hover": {
                  color: colors.gray[500],
                  textDecoration: "none",
                  "&.active": {
                    color: colors.gray[10],
                  },
                },
                "&.active": {
                  color: colors.gray[10],
                  textDecoration: "underline",
                },
                "@media (hover:none)": {
                  "&:hover": {
                    color: colors.gray[500],
                    textDecoration: "none",
                    backgroundColor: "#00000000 !important",
                  },
                  "&:focus": {
                    color: colors.gray[500],
                    backgroundColor: "#00000000 !important",
                  },
                },
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                color: colors.gray[10],
              },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                color: colors.gray[10],
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              notchedOutline: {
                borderColor: `${colors.gray[10]} !important`,
                "&:hover": {
                  borderColor: `${colors.gray[10]} !important`,
                },
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              textColorPrimary: {
                color: colors.gray[40],
                [`&.${tabClasses["selected"]}`]: {
                  color: colors.gray[10],
                },
              },
              root: {
                "&.Mui-selected": {
                  textDecoration: "underline",
                  textUnderlineOffset: "10px",
                  textDecorationThickness: "3px",
                },
                "&:hover": {
                  color: colors.gray[500],
                  textDecoration: "underline",
                  textUnderlineOffset: "10px",
                  textDecorationThickness: "3px",
                },
              },
            },
          },
          PrivateTabIndicator: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: colors.gray[10],
              },
            },
          },
          MuiToggleButton: {
            styleOverrides: {
              root: {
                background: colors.paper.card,
                "&:hover": {
                  background: colors.paper.cardHover,
                },
                "@media (hover:none)": {
                  "&:hover": {
                    background: colors.paper.card,
                  },
                  "&:focus": {
                    background: colors.paper.card,
                  },
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                "&:hover": {
                  backgroundColor: colors.gray[500],
                },
                "@media (hover:none)": {
                  "&:hover": {
                    color: colors.gray[10],
                    backgroundColor: colors.gray[500],
                  },
                  "&:focus": {
                    color: colors.gray[10],
                    backgroundColor: colors.gray[500],
                  },
                },
              },
            },
          },
          MuiSelect: {
            styleOverrides: {
              select: {
                color: "#93AEBC",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              containedPrimary: {
                color: colors.gray[40],
                backgroundColor: colors.primary[300],
                "&.Mui-disabled": {
                  backgroundColor: colors.primary[300],
                },
                "&:hover": {
                  backgroundColor: colors.primary[100],
                },
              },
              containedSecondary: {
                height: "39px",
                color: colors.gray[10],
                background: colors.paper.card,
                fontWeight: 700,
                "&:hover": {
                  background: colors.paper.cardHover,
                },
                "@media (hover:none)": {
                  color: colors.gray[10],
                  background: colors.paper.card,
                  fontWeight: 700,
                  "&:hover": {
                    background: colors.paper.cardHover,
                  },
                },
              },
              outlinedPrimary: {
                color: colors.gray[90],
                borderColor: colors.gray[90],
                "&.Mui-disabled": {
                  color: colors.gray[90],
                  borderColor: colors.gray[90],
                },
                "&:hover": {
                  color: colors.gray[700],
                  backgroundColor: colors.gray[90],
                  borderColor: colors.gray[90],
                },
                "@media (hover:none)": {
                  color: darkPalette.gray[700],
                  borderColor: darkPalette.gray[700],
                  "&:hover": {
                    color: `${colors.gray[600]} !important`,
                    backgroundColor: `${darkPalette.gray[10]} !important`,
                  },
                },
              },
              outlinedSecondary: {
                color: colors.gray[40],
                borderColor: colors.gray[40],
                "&.Mui-disabled": {
                  color: colors.gray[40],
                  borderColor: colors.gray[40],
                },
                "&:hover": {
                  backgroundColor: darkPalette.gray[10],
                  borderColor: darkPalette.gray[10],
                },
              },
              textPrimary: {
                color: colors.gray[600],
                "&:hover": {
                  color: colors.gray[500],
                  backgroundColor: "#00000000",
                },
                "&:active": {
                  color: colors.primary[300],
                  borderBottom: "#F8CC82",
                },
              },
              textSecondary: {
                color: colors.gray[10],
                "&:hover": {
                  color: colors.gray[500],
                },
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                "&.grid-message-typography": {
                  color: colors.gray[40],
                },
                "&.chain-highlight": {
                  color: colors.gray[10],
                },
              },
            },
          },
        },
      },
      commonSettings,
    ),
  ),
);
