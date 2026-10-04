import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function Divider({
  orientation = "horizontal",
  color,
  style,
}: DividerProps) {
  const colors = useAppTheme();

  return (
    <View
      accessible={false}
      pointerEvents="none"
      style={[
        orientation === "vertical" ? styles.vertical : styles.horizontal,
        { backgroundColor: color ?? colors.border.default },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    alignSelf: "stretch",
  },
  vertical: {
    width: 1,
    alignSelf: "stretch",
  },
});
