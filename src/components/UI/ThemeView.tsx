import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleProp, View, ViewStyle } from "react-native";

interface ThemeBackgroundProps {
  theme?: keyof Theme["background"];
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function ThemeView({ theme, children, style }: ThemeBackgroundProps) {
  const Colors = useAppTheme();
  return (
    <View
      style={{
        backgroundColor: theme && Colors.background[theme],
        ...style,
      }}
    >
      {children}
    </View>
  );
}
