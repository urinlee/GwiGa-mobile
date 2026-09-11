import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleProp, Text, TextStyle } from "react-native";

interface ThemeTextProps {
  theme?: keyof Theme["text"];
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export function ThemeText({
  theme = "primary",
  children,
  style,
}: ThemeTextProps) {
  const Colors = useAppTheme();
  return <Text style={[{ color: Colors.text[theme] }, style]}>{children}</Text>;
}
