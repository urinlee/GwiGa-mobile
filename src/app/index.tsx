import { Screen } from "@/components/Layout/Screen";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Home() {
  return (
    <Screen>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          router.push("/auth/register");
        }}
      >
        <Text>register</Text>
      </Pressable>
    </Screen>
  );
}
