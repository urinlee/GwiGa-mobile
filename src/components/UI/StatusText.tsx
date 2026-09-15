import { Theme } from "@/constants/theme";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleProp, Text, TextStyle } from "react-native";

interface StatusTextProps {
  children?: React.ReactNode;
  status: keyof Theme["status"];
  style: StyleProp<TextStyle>;
}

export function StatusText({ children, status, style }: StatusTextProps) {
  const Colors = useAppTheme();
  return (
    <Text style={[{ color: Colors.status[status].text }, style]}>
      {children}
    </Text>
  );
}
