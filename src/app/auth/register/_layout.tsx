import { useAppTheme } from "@/hooks/useAppTheme";
import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: "first",
};

export default function RegisterLayout() {
  const colors = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.default },
      }}
    >
      <Stack.Screen name="first" />
      <Stack.Screen name="second" />
    </Stack>
  );
}
