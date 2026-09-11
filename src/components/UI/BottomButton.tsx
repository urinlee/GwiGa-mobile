import { Fonts } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, Text } from "react-native";
import { ThemeButton } from "./ThemeButton";

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

export function BottomButton({ label, onPress }: ButtonProps) {
  const Color = useAppTheme();
  return (
    <ThemeButton theme="primary" style={style.button} onPress={onPress}>
      <Text style={{ color: Color.button.primary.text, ...style.buttonText }}>
        {label}
      </Text>
    </ThemeButton>
  );
}

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: Fonts.rounded,
  },
});
