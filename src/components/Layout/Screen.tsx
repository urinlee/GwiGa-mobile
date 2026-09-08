import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Screen({
  backgroundColor,
  children,
}: {
  backgroundColor?: string;
  children: React.ReactNode;
}) {
  const insets = useSafeAreaInsets();
  const insetPadding = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };
  const themebgColor = useAppTheme().background.default;
  const bgColor = backgroundColor || themebgColor;
  return (
    <View
      style={[{ ...insetPadding, backgroundColor: bgColor }, styles.Container]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    minHeight: "100%",
  },
});
