import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  theme?: keyof Theme["button"];
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export function ThemeButton({
  theme,
  children,
  onPress,
  style,
  disabled,
}: ButtonProps) {
  const Colors = useAppTheme();
  const themedColor = disabled
    ? Colors.button.disabled
    : theme && Colors.button[theme];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: themedColor?.background,
        ...style,
      }}
      disabled={disabled}
    >
      <Text style={{ color: themedColor?.text }}>{children}</Text>
    </TouchableOpacity>
  );
}
