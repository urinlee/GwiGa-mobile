import type { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, View, type ViewProps } from "react-native";

interface ThemeCardProps extends ViewProps {
  backgroundTheme?: keyof Theme["background"];
  borderTheme?: keyof Theme["border"];
}

export function ThemeCard({
  backgroundTheme = "default",
  borderTheme = "default",
  style,
  children,
  ...viewProps
}: ThemeCardProps) {
  const colors = useAppTheme();
  return (
    <View
      {...viewProps}
      style={[
        styles.card,
        {
          borderColor: colors.border[borderTheme],
          backgroundColor: colors.background[backgroundTheme],
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
});
