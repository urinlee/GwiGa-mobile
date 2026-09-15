import { Fonts, Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, Text } from "react-native";
import { ThemeButton } from "./ThemeButton";

interface ButtonProps {
  label: string;
  onPress?: () => void;
  theme?: keyof Theme["button"];
  disabled?: boolean;
}

export function BottomButton({
  label,
  onPress,
  theme = "primary",
  disabled,
}: ButtonProps) {
  const Color = useAppTheme();
  return (
    <ThemeButton
      theme={theme}
      disabled={disabled}
      style={style.button}
      onPress={onPress}
    >
      <Text style={{ ...style.buttonText }}>{label}</Text>
    </ThemeButton>
  );
}

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: Fonts.rounded,
  },
});
