import { Colors } from "@/constants/theme";
import { useColorScheme } from "react-native";

export function useAppTheme() {
  const colorScheme = useColorScheme();
  return Colors[colorScheme == "dark" ? "dark" : "light"];
}
