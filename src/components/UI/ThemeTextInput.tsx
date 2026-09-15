import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, TextInput } from "react-native";

const defaultFontSize = {
  xxxl: 30,
  xxl: 26,
  xl: 22,
  lg: 20,
  md: 14,
  sm: 10,
  xs: 8,
  xxs: 6,
};

export function ThemeTextInput({
  size = "lg",
  ...props
}: { size?: keyof typeof defaultFontSize } & React.ComponentProps<
  typeof TextInput
>) {
  const Colors = useAppTheme();

  return (
    <TextInput
      {...props}
      style={{
        backgroundColor: Colors.background.subtle,
        borderColor: Colors.border.input,
        color: Colors.text.primary,
        fontSize: defaultFontSize[size],
        ...styles.default,
        ...props.style,
      }}
      selectionColor={Colors.text.primary}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontWeight: "500",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
