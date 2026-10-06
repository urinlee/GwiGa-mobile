import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { Text, type TextProps } from "react-native";

interface ThemeTextProps extends TextProps {
  theme?: keyof Theme["text"];
}

export function ThemeText({
  theme = "primary",
  style,
  ...textProps
}: ThemeTextProps) {
  const Colors = useAppTheme();
  return (
    <Text {...textProps} style={[{ color: Colors.text[theme] }, style]} />
  );
}
