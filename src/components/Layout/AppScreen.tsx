import { Screen } from "@/components/Layout/Screen";
import { View } from "react-native";

export function AppScreen({
  children,
  ...ScreenProps
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <Screen {...ScreenProps}>
      <View style={{ marginHorizontal: 10 }}>{children}</View>
    </Screen>
  );
}
