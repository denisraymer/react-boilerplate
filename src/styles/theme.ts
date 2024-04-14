import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  borderRadius: "24px",

  palette: {
    primary: {
      light: "#3FB1E2",
      main: "#006C88",
      dark: "#1C5269",
    },
    error: "#FF4242",
    font: {
      light: "#F7F9FA",
      gray: "#8F989A",
      dark: "#111212",
    },
    gray: {
      light: "#F0F3F5",
      gray: "#E1E7E9",
      dark: "#8F989A",
    },
    background: {
      light: "#ffffff",
      gray: "#F8F9FB",
      dark: "#202222",
    },
  },
  screen: {
    lg: "1920px",
    md: "1280px",
    sm: "768px",
    xs: "375px",
  },
  typography: {
    family: '"Golos Text", sans-serif',
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
    },
    heading: {
      h1: {
        lg: {
          fontSize: "96px",
        },
        md: {
          fontSize: "72px",
        },
        sm: {
          fontSize: "64px",
        },
        xs: {
          fontSize: "64px",
        },
      },
      h2: {
        lg: {
          fontSize: "88px",
        },
        md: {
          fontSize: "64px",
        },
        sm: {
          fontSize: "56px",
        },
        xs: {
          fontSize: "48px",
        },
      },
      h3: {
        lg: {
          fontSize: "72px",
        },
        md: {
          fontSize: "48px",
        },
        sm: {
          fontSize: "32px",
        },
        xs: {
          fontSize: "32px",
        },
      },
      h4: {
        lg: {
          fontSize: "56px",
        },
        md: {
          fontSize: "40px",
        },
        sm: {
          fontSize: "40px",
        },
        xs: {
          fontSize: "32px",
        },
      },
      h5: {
        lg: {
          fontSize: "48px",
        },
        md: {
          fontSize: "32px",
        },
        sm: {
          fontSize: "28px",
        },
        xs: {
          fontSize: "24px",
        },
      },
    },
    caption: {
      cap1: {
        lg: {
          fontSize: "32px",
        },
        md: {
          fontSize: "22px",
        },
        sm: {
          fontSize: "22px",
        },
        xs: {
          fontSize: "22px",
        },
      },
      cap2: {
        lg: {
          fontSize: "28px",
        },
        md: {
          fontSize: "20px",
        },
        sm: {
          fontSize: "20px",
        },
        xs: {
          fontSize: "20px",
        },
      },
      cap3: {
        lg: {
          fontSize: "24px",
        },
        md: {
          fontSize: "18px",
        },
        sm: {
          fontSize: "18px",
        },
        xs: {
          fontSize: "18px",
        },
      },
    },
    body: {
      body1: {
        lg: {
          fontSize: "24px",
        },
        md: {
          fontSize: "18px",
        },
        sm: {
          fontSize: "16px",
        },
        xs: {
          fontSize: "16px",
        },
      },
      body2: {
        lg: {
          fontSize: "16px",
        },
        md: {
          fontSize: "16px",
        },
        sm: {
          fontSize: "14px",
        },
        xs: {
          fontSize: "14px",
        },
      },
    },
    button: {
      xs: 375,
      sm: 768,
      md: 1280,
      lg: 1920,
    },
  },
}
