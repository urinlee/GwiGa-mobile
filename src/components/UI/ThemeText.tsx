import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { Text } from "react-native";

interface ThemeTextProps {
  theme: keyof Theme["text"];
  children: React.ReactNode;
}

export function ThemeText({ theme = "primary", children }: ThemeTextProps) {
  const Colors = useAppTheme();
  return <Text style={{ color: Colors.text[theme] }}>{children}</Text>;
}
