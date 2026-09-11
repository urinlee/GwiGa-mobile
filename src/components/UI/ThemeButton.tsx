import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import {
    StyleProp,
    Text,
    TouchableOpacity,
    ViewStyle
} from "react-native";

interface ButtonProps {
  theme?: keyof Theme["button"];
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function ThemeButton({ theme, children, onPress, style }: ButtonProps) {
  const Colors = useAppTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme && Colors.button[theme].background,
        ...style,
      }}
    >
      <Text style={{ color: theme && Colors.button[theme].text }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
