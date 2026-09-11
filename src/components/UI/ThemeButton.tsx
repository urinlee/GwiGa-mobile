import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { Pressable, StyleProp, Text, ViewStyle } from "react-native";

interface ButtonProps {
  theme?: keyof Theme["button"];
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  isPressIn?: boolean;
}

export function ThemeButton({
  theme,
  children,
  onPress,
  isPressIn = false,
  style,
}: ButtonProps) {
  const Colors = useAppTheme();
  return (
    <Pressable
      onPressIn={isPressIn ? onPress : undefined}
      onPressOut={!isPressIn ? onPress : undefined}
      style={{
        backgroundColor: theme && Colors.button[theme].background,
        ...style,
      }}
    >
      <Text style={{ color: theme && Colors.button[theme].text }}>
        {children}
      </Text>
    </Pressable>
  );
}
