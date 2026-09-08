import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { View } from "react-native";

interface ThemeBackgroundProps {
  theme?: keyof Theme["background"];
  children: React.ReactNode;
}

export function ThemeBackground({
  theme = "default",
  children,
}: ThemeBackgroundProps) {
  const Colors = useAppTheme();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background[theme] }}>
      {children}
    </View>
  );
}
