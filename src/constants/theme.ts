import "@/global.css";

import { Platform } from "react-native";

const PrimaryColors = {
  light: "#255442",
  dark: "#98CBB0",
} as const;

/** Deep Forest colors, grouped by their role in the interface. */
export const Colors = {
  light: {
    text: {
      primary: "#233129",
      secondary: "#5D6B62",
      placeholder: "#6B786F",
      brand: PrimaryColors.light,
      inverse: "#FFFFFF",
    },
    background: {
      default: "#F7F8F4",
      subtle: "#EFF2ED",
      surface: "#FFFFFF", // 카드·팝업 등 화면 위에 놓이는 영역
      muted: "#E5EAE2", // 구분 영역·카드 내부의 보조 영역
      accent: "#E2ECE5", // 선택된 항목·브랜드 강조 영역
      primarySubtle: "#EAF1EC", // primary 계열의 옅은 안내 배경
      primary: PrimaryColors.light, // 강조 배경: text.inverse와 함께 사용
    },
    container: {
      default: "#FFFFFF",
      selected: "#E2ECE5",
    },
    border: {
      default: "#DEE5DC",
      input: "#829084",
      focus: PrimaryColors.light,
    },
    button: {
      primary: {
        background: PrimaryColors.light,
        text: "#FFFFFF",
        pressed: "#1B4032",
      },
      secondary: {
        background: "#E2ECE5",
        text: PrimaryColors.light,
      },
      ghost: {
        background: "transparent",
        text: PrimaryColors.light,
      },
      disabled: {
        background: "#E5E9E3",
        text: "#69766D",
      },
    },
    status: {
      success: {
        background: "#E2ECE5",
        text: PrimaryColors.light,
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
      brand: PrimaryColors.dark,
      inverse: "#1D382A",
    },
    background: {
      default: "#111713",
      subtle: "#161E19",
      surface: "#1C2520",
      muted: "#202B24",
      accent: "#263C30",
      primarySubtle: "#1F2F26",
      primary: PrimaryColors.dark,
    },
    container: {
      default: "#1C2520",
      selected: "#263C30",
    },
    border: {
      default: "#344238",
      input: "#66786A",
      focus: PrimaryColors.dark,
    },
    button: {
      primary: {
        background: PrimaryColors.dark,
        text: "#1D382A",
        pressed: "#80B59A",
      },
      secondary: {
        background: "#263C30",
        text: PrimaryColors.dark,
      },
      ghost: {
        background: "transparent",
        text: PrimaryColors.dark,
      },
      disabled: {
        background: "#2B352E",
        text: "#78867B",
      },
    },
    status: {
      success: {
        background: "#263C30",
        text: PrimaryColors.dark,
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
