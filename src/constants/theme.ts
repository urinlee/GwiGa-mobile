import "@/global.css";

import { Platform } from "react-native";

/** Deep Forest colors, grouped by their role in the interface. */
export const Colors = {
  light: {
    text: {
      primary: "#233129",
      secondary: "#5D6B62",
      placeholder: "#6B786F",
      brand: "#255442",
      inverse: "#FFFFFF",
    },
    background: {
      default: "#F7F8F4",
      subtle: "#EFF2ED",
    },
    container: {
      default: "#FFFFFF",
      selected: "#E2ECE5",
    },
    border: {
      default: "#DEE5DC",
      input: "#829084",
      focus: "#255442",
    },
    button: {
      primary: {
        background: "#255442",
        text: "#FFFFFF",
        pressed: "#1B4032",
      },
      secondary: {
        background: "#E2ECE5",
        text: "#255442",
      },
      ghost: {
        background: "transparent",
        text: "#255442",
      },
      disabled: {
        background: "#E5E9E3",
        text: "#69766D",
      },
    },
    status: {
      success: {
        background: "#E2ECE5",
        text: "#255442",
      },
      warning: {
        background: "#FAF1DC",
        text: "#855C18",
      },
      error: {
        background: "#FBEDEC",
        text: "#B43F3F",
      },
    },
  },
  dark: {
    text: {
      primary: "#EDF2EA",
      secondary: "#B6C1B5",
      placeholder: "#929F94",
      brand: "#98CBB0",
      inverse: "#1D382A",
    },
    background: {
      default: "#111713",
      subtle: "#161E19",
    },
    container: {
      default: "#1C2520",
      selected: "#263C30",
    },
    border: {
      default: "#344238",
      input: "#66786A",
      focus: "#98CBB0",
    },
    button: {
      primary: {
        background: "#98CBB0",
        text: "#1D382A",
        pressed: "#80B59A",
      },
      secondary: {
        background: "#263C30",
        text: "#98CBB0",
      },
      ghost: {
        background: "transparent",
        text: "#98CBB0",
      },
      disabled: {
        background: "#2B352E",
        text: "#78867B",
      },
    },
    status: {
      success: {
        background: "#263C30",
        text: "#98CBB0",
      },
      warning: {
        background: "#3B321E",
        text: "#E7C37C",
      },
      error: {
        background: "#422829",
        text: "#F0A6A6",
      },
    },
  },
} as const;

export type Theme = (typeof Colors)[keyof typeof Colors];

type ColorPath<T> = {
  [Key in keyof T & string]: T[Key] extends string
    ? Key
    : `${Key}.${ColorPath<T[Key]>}`;
}[keyof T & string];

/** Color token paths shared by both themes, e.g. "text.primary". */
export type ThemeColor = ColorPath<typeof Colors.light> &
  ColorPath<typeof Colors.dark>;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
